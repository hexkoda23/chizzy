import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import { HttpError } from './http.js';

const COOKIE_NAME = 'admin_session';
const SESSION_SECONDS = 60 * 60 * 24 * 7;
const MAX_ATTEMPTS = 8;
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;

const attempts = new Map();

const sha256 = (value) => createHash('sha256').update(value).digest();

function signingKey() {
  return sha256(`${process.env.ADMIN_PASSWORD}:${process.env.GITHUB_TOKEN ?? ''}`);
}

function sign(expires) {
  return createHmac('sha256', signingKey()).update(String(expires)).digest('hex');
}

const safeEqual = (a, b) => timingSafeEqual(sha256(a), sha256(b));

export function checkPassword(input) {
  if (!process.env.ADMIN_PASSWORD) {
    throw new HttpError(503, 'Admin login is not set up yet: ADMIN_PASSWORD is missing.');
  }
  return typeof input === 'string' && safeEqual(input, process.env.ADMIN_PASSWORD);
}

// Best effort on serverless, where each warm instance keeps its own count.
export function assertNotRateLimited(ip) {
  const entry = attempts.get(ip);
  if (entry && entry.resetAt > Date.now() && entry.count >= MAX_ATTEMPTS) {
    throw new HttpError(429, 'Too many attempts. Please wait 15 minutes and try again.');
  }
}

export function recordFailedAttempt(ip) {
  const entry = attempts.get(ip);
  if (!entry || entry.resetAt <= Date.now()) {
    attempts.set(ip, { count: 1, resetAt: Date.now() + ATTEMPT_WINDOW_MS });
  } else {
    entry.count += 1;
  }
}

export function clientIp(req) {
  return String(req.headers['x-forwarded-for'] ?? req.socket?.remoteAddress ?? 'unknown')
    .split(',')[0]
    .trim();
}

function cookie(value, maxAge) {
  const secure = process.env.VERCEL ? '; Secure' : '';
  return `${COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`;
}

export function sessionCookie() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  return cookie(`${expires}.${sign(expires)}`, SESSION_SECONDS);
}

export function clearedCookie() {
  return cookie('', 0);
}

export function isAuthenticated(req) {
  if (!process.env.ADMIN_PASSWORD) return false;
  const match = (req.headers.cookie ?? '').match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return false;
  const [expires, signature] = match[1].split('.');
  if (!expires || !signature || Number(expires) * 1000 < Date.now()) return false;
  return safeEqual(signature, sign(expires));
}

export function requireAuth(req) {
  if (!isAuthenticated(req)) throw new HttpError(401, 'Your session has expired. Please sign in again.');
}
