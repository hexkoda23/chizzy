import { HttpError } from './http.js';

const MAX_CONTENT_BYTES = 500 * 1024;

const REQUIRED_SECTIONS = ['seo', 'home', 'contact', 'footer'];

const REQUIRED_LISTS = [
  ['profile', 'credentials'],
  ['about', 'paragraphs'],
  ['about', 'stats'],
  ['skills', 'groups'],
  ['caseStudies', 'items'],
  ['supporting', 'tags'],
  ['supporting', 'contributions'],
  ['supporting', 'screenshots'],
  ['tools', 'groups'],
];

function hasScriptUrl(value) {
  if (typeof value === 'string') return /^\s*javascript:/i.test(value);
  if (value && typeof value === 'object') return Object.values(value).some(hasScriptUrl);
  return false;
}

// A malformed save would break the public site's build, so reject it here.
export function assertValidContent(content) {
  if (!content || typeof content !== 'object' || Array.isArray(content)) {
    throw new HttpError(400, 'The content is not in the expected format.');
  }
  if (Buffer.byteLength(JSON.stringify(content)) > MAX_CONTENT_BYTES) {
    throw new HttpError(413, 'The content is too large to save.');
  }
  for (const section of REQUIRED_SECTIONS) {
    if (!content[section] || typeof content[section] !== 'object') {
      throw new HttpError(400, `The "${section}" section is missing.`);
    }
  }
  for (const [section, key] of REQUIRED_LISTS) {
    if (!Array.isArray(content[section]?.[key])) {
      throw new HttpError(400, `The "${section}" section is missing its ${key}.`);
    }
  }
  const ids = content.caseStudies.items.map((item) => item.id);
  if (ids.some((id) => !/^[a-z0-9-]+$/.test(id ?? '')) || new Set(ids).size !== ids.length) {
    throw new HttpError(400, 'Every case study needs its own unique web address.');
  }
  if (hasScriptUrl(content)) {
    throw new HttpError(400, 'One of the links is not allowed. Links must start with https://');
  }
}
