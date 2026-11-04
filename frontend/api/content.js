import { requireAuth } from './_lib/auth.js';
import { HttpError, readJson, sendError, sendJson } from './_lib/http.js';
import { readContent, writeContent } from './_lib/storage.js';
import { assertValidContent } from './_lib/validate.js';

export default async function handler(req, res) {
  try {
    requireAuth(req);
    if (req.method === 'GET') return sendJson(res, 200, await readContent());
    if (req.method === 'PUT') {
      const { content, version } = await readJson(req);
      assertValidContent(content);
      return sendJson(res, 200, await writeContent(content, version));
    }
    throw new HttpError(405, 'Method not allowed.');
  } catch (error) {
    return sendError(res, error);
  }
}
