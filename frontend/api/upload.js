import { requireAuth } from './_lib/auth.js';
import { HttpError, readJson, sendError, sendJson } from './_lib/http.js';
import { writeUpload } from './_lib/storage.js';

// Vercel caps request bodies at 4.5 MB, and base64 adds a third on top of the file.
const MAX_BYTES = 3 * 1024 * 1024;

const SIGNATURES = [
  { extension: 'pdf', kind: 'cv', matches: (b) => b.subarray(0, 5).toString('latin1') === '%PDF-' },
  { extension: 'jpg', kind: 'image', matches: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
  { extension: 'png', kind: 'image', matches: (b) => b.subarray(0, 4).toString('latin1') === '\x89PNG' },
  {
    extension: 'webp',
    kind: 'image',
    matches: (b) => b.subarray(0, 4).toString('latin1') === 'RIFF' && b.subarray(8, 12).toString('latin1') === 'WEBP',
  },
];

function slug(name) {
  const base = String(name ?? '').replace(/\.[^.]*$/, '').toLowerCase();
  return base.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'file';
}

export default async function handler(req, res) {
  try {
    requireAuth(req);
    if (req.method !== 'POST') throw new HttpError(405, 'Method not allowed.');

    const { kind, name, data } = await readJson(req);
    if (typeof data !== 'string' || !data) throw new HttpError(400, 'No file was received.');

    const buffer = Buffer.from(data, 'base64');
    if (buffer.length > MAX_BYTES) throw new HttpError(413, 'That file is too large. The limit is 3 MB.');

    const type = SIGNATURES.find((signature) => signature.kind === kind && signature.matches(buffer));
    if (!type) {
      throw new HttpError(415, kind === 'cv' ? 'Please upload your CV as a PDF.' : 'Please upload a JPG, PNG or WebP image.');
    }

    const folder = kind === 'cv' ? 'cv' : 'images';
    const relativePath = `uploads/${folder}/${slug(name)}-${Date.now().toString(36)}.${type.extension}`;
    await writeUpload(relativePath, buffer);
    return sendJson(res, 200, { url: `/${relativePath}` });
  } catch (error) {
    return sendError(res, error);
  }
}
