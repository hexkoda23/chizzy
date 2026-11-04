import { clearedCookie } from './_lib/auth.js';
import { sendJson } from './_lib/http.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed.' });
  res.setHeader('Set-Cookie', clearedCookie());
  return sendJson(res, 200, { ok: true });
}
