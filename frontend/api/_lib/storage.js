import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { HttpError } from './http.js';

const CONTENT_PATH = 'src/data/content.json';
const CONFLICT = 'This content was changed somewhere else since you opened it. Reload the page to get the latest version.';

const repo = () => process.env.GITHUB_REPO || 'hexkoda23/chizzy';
const branch = () => process.env.GITHUB_BRANCH || 'main';
const repoRoot = () => process.env.GITHUB_ROOT ?? 'frontend';

function mode() {
  if (process.env.GITHUB_TOKEN) return 'github';
  if (process.env.VERCEL) {
    throw new HttpError(503, 'Publishing is not set up yet: GITHUB_TOKEN is missing.');
  }
  return 'local';
}

function github(filePath, options = {}) {
  const repoPath = [repoRoot(), filePath].filter(Boolean).join('/');
  const url = `https://api.github.com/repos/${repo()}/contents/${repoPath}`;
  return fetch(options.method ? url : `${url}?ref=${branch()}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
  });
}

async function githubFailure(response) {
  console.error('GitHub API error', response.status, await response.text());
  if (response.status === 401 || response.status === 403) {
    return new HttpError(502, 'GitHub rejected the access token. It may have expired.');
  }
  return new HttpError(502, 'GitHub could not save the change. Please try again.');
}

const hash = (text) => createHash('sha256').update(text).digest('hex');

export async function readContent() {
  if (mode() === 'local') {
    const text = await readFile(path.resolve(CONTENT_PATH), 'utf8');
    return { content: JSON.parse(text), version: hash(text), mode: 'local' };
  }
  const response = await github(CONTENT_PATH);
  if (!response.ok) throw await githubFailure(response);
  const file = await response.json();
  const text = Buffer.from(file.content, 'base64').toString('utf8');
  return { content: JSON.parse(text), version: file.sha, mode: 'github' };
}

export async function writeContent(content, version) {
  const text = `${JSON.stringify(content, null, 2)}\n`;

  if (mode() === 'local') {
    const target = path.resolve(CONTENT_PATH);
    if (hash(await readFile(target, 'utf8')) !== version) throw new HttpError(409, CONFLICT);
    await writeFile(target, text);
    return { version: hash(text), mode: 'local' };
  }

  const response = await github(CONTENT_PATH, {
    method: 'PUT',
    body: JSON.stringify({
      message: 'Update portfolio content from admin',
      content: Buffer.from(text).toString('base64'),
      sha: version,
      branch: branch(),
    }),
  });
  if (response.status === 409) throw new HttpError(409, CONFLICT);
  if (!response.ok) throw await githubFailure(response);
  const result = await response.json();
  return { version: result.content.sha, mode: 'github' };
}

export async function writeUpload(relativePath, buffer) {
  const filePath = `public/${relativePath}`;

  if (mode() === 'local') {
    const target = path.resolve(filePath);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, buffer);
    return;
  }

  const response = await github(filePath, {
    method: 'PUT',
    body: JSON.stringify({
      message: `Upload ${path.basename(relativePath)} from admin`,
      content: buffer.toString('base64'),
      branch: branch(),
    }),
  });
  if (!response.ok) throw await githubFailure(response);
}
