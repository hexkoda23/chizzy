export class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

export function sendError(res, error) {
  if (error instanceof HttpError) return sendJson(res, error.status, { error: error.message });
  console.error(error);
  return sendJson(res, 500, { error: 'Something went wrong on the server. Please try again.' });
}

// Vercel pre-parses JSON onto req.body; the local dev server hands over the raw stream.
export async function readJson(req) {
  try {
    if (req.body !== undefined) {
      return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    }
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new HttpError(400, 'The request could not be read.');
  }
}
