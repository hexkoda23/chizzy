const MAX_UPLOAD_BYTES = 3 * 1024 * 1024;
const MAX_IMAGE_SIDE = 1600;

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`/api/${path}`, {
      ...options,
      headers: options.body ? { 'Content-Type': 'application/json' } : undefined,
    });
  } catch {
    throw new Error('Could not reach the server. Check your internet connection and try again.');
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.error || 'Something went wrong. Please try again.');
    error.status = response.status;
    throw error;
  }
  return data;
}

export const getSession = () => request('session');
export const login = (password) => request('login', { method: 'POST', body: JSON.stringify({ password }) });
export const logout = () => request('logout', { method: 'POST' });
export const getContent = () => request('content');
export const saveContent = (content, version) =>
  request('content', { method: 'PUT', body: JSON.stringify({ content, version }) });

function toBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = () => reject(new Error('That file could not be read.'));
    reader.readAsDataURL(blob);
  });
}

// Phone photos are often far larger than the upload limit, so shrink them first.
async function shrinkImage(file) {
  let bitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new Error('That image could not be opened. Please use a JPG, PNG or WebP file.');
  }
  const scale = Math.min(1, MAX_IMAGE_SIDE / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.86));
}

export async function uploadFile(file, kind) {
  const blob = kind === 'image' ? await shrinkImage(file) : file;
  if (blob.size > MAX_UPLOAD_BYTES) {
    throw new Error('That file is too large. The limit is 3 MB.');
  }
  const data = await toBase64(blob);
  const { url } = await request('upload', {
    method: 'POST',
    body: JSON.stringify({ kind, name: file.name, data }),
  });
  return { url, preview: URL.createObjectURL(blob) };
}
