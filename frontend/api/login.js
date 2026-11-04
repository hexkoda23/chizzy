import { assertNotRateLimited, checkPassword, clientIp, recordFailedAttempt, sessionCookie } from './_lib/auth.js';
import { HttpError, readJson, sendError, sendJson } from './_lib/http.js';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') throw new HttpError(405, 'Method not allowed.');
    const ip = clientIp(req);
    assertNotRateLimited(ip);
    const { password } = await readJson(req);
    if (!checkPassword(password)) {
      recordFailedAttempt(ip);
      throw new HttpError(401, 'That password is not correct.');
    }
    res.setHeader('Set-Cookie', sessionCookie());
    sendJson(res, 200, { ok: true });
  } catch (error) {
    sendError(res, error);
  }
}
