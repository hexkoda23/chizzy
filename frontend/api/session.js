import { isAuthenticated } from './_lib/auth.js';
import { sendJson } from './_lib/http.js';

export default function handler(req, res) {
  sendJson(res, 200, { authenticated: isAuthenticated(req) });
}
