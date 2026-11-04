import { createContext, useContext, useId, useRef, useState } from 'react';
import { uploadFile } from './api';

export const DraftContext = createContext(null);

const getIn = (object, path) => path.reduce((value, key) => value?.[key], object);

export function setIn(object, [key, ...rest], value) {
  const copy = Array.isArray(object) ? [...object] : { ...object };
  copy[key] = rest.length ? setIn(object[key], rest, value) : value;
  return copy;
}

function useField(path) {
  const { draft, setField } = useContext(DraftContext);
  return [getIn(draft, path), (value) => setField(path, value)];
}

const inputClass =
  'w-full rounded-lg border border-ink/15 bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder-ink-faint/60 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay transition-colors';

function Label({ htmlFor, label, hint }) {
  return (
    <div className="mb-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
        {label}
      </label>
      {hint && <p className="text-[13px] text-ink-faint mt-0.5">{hint}</p>}
    </div>
  );
}

export function TextField({ label, hint, path, type = 'text', placeholder }) {
  const id = useId();
  const [value, setValue] = useField(path);
  return (
    <div>
      <Label htmlFor={id} label={label} hint={hint} />
      <input id={id} type={type} value={value ?? ''} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} className={inputClass} />
    </div>
  );
}

export function TextArea({ label, hint, path, rows = 3 }) {
  const id = useId();
  const [value, setValue] = useField(path);
  return (
    <div>
      <Label htmlFor={id} label={label} hint={hint} />
      <textarea id={id} rows={rows} value={value ?? ''} onChange={(e) => setValue(e.target.value)} className={`${inputClass} resize-y leading-relaxed`} />
    </div>
  );
}

export function Toggle({ label, hint, path }) {
  const [value, setValue] = useField(path);
  return (
    <div className="flex items-start justify-between gap-6">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        {hint && <p className="text-[13px] text-ink-faint mt-0.5">{hint}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={Boolean(value)}
        aria-label={label}
        onClick={() => setValue(!value)}
        className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-colors ${value ? 'bg-clay' : 'bg-ink/20'}`}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${value ? 'translate-x-5' : ''}`} />
      </button>
    </div>
  );
}

function RowButton({ label, onClick, disabled, children, danger }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`w-8 h-8 flex items-center justify-center rounded-md text-ink-faint transition-colors disabled:opacity-25 disabled:pointer-events-none ${
        danger ? 'hover:bg-red-50 hover:text-red-700' : 'hover:bg-ink/5 hover:text-ink'
      }`}
    >
      {children}
    </button>
  );
}

function RowControls({ index, count, name, onMove, onRemove }) {
  return (
    <div className="flex items-center flex-shrink-0">
      <RowButton label={`Move ${name} up`} disabled={index === 0} onClick={() => onMove(index, -1)}>↑</RowButton>
      <RowButton label={`Move ${name} down`} disabled={index === count - 1} onClick={() => onMove(index, 1)}>↓</RowButton>
      <RowButton label={`Remove ${name}`} danger onClick={() => onRemove(index)}>✕</RowButton>
    </div>
  );
}

function useListField(path) {
  const [items, setItems] = useField(path);
  const list = items ?? [];
  return {
    items: list,
    setItems,
    add: (item) => setItems([...list, item]),
    remove: (index) => setItems(list.filter((_, i) => i !== index)),
    move: (index, offset) => {
      const next = [...list];
      const [item] = next.splice(index, 1);
      next.splice(index + offset, 0, item);
      setItems(next);
    },
  };
}

function AddButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm font-semibold text-clay hover:text-clay-dark transition-colors"
    >
      + {children}
    </button>
  );
}

export function StringList({ label, hint, path, addLabel = 'Add another', multiline, itemName = 'item' }) {
  const { items, setItems, add, remove, move } = useListField(path);
  const update = (index, value) => setItems(items.map((item, i) => (i === index ? value : item)));

  return (
    <fieldset>
      <legend className="block text-sm font-medium text-ink">{label}</legend>
      {hint && <p className="text-[13px] text-ink-faint mt-0.5">{hint}</p>}
      <div className="space-y-2 mt-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-1">
            {multiline ? (
              <textarea aria-label={`${itemName} ${i + 1}`} rows={4} value={item} onChange={(e) => update(i, e.target.value)} className={`${inputClass} resize-y leading-relaxed`} />
            ) : (
              <input aria-label={`${itemName} ${i + 1}`} value={item} onChange={(e) => update(i, e.target.value)} className={inputClass} />
            )}
            <RowControls index={i} count={items.length} name={`${itemName} ${i + 1}`} onMove={move} onRemove={remove} />
          </div>
        ))}
      </div>
      <div className="mt-2.5">
        <AddButton onClick={() => add('')}>{addLabel}</AddButton>
      </div>
    </fieldset>
  );
}

// A list of cards. `children` receives each item's path and renders its fields.
export function Repeater({ path, addLabel, blank, itemName, title, children, startOpen }) {
  const { items, add, remove, move } = useListField(path);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details key={i} open={startOpen} className="group rounded-xl border border-ink/10 bg-white">
          <summary className="flex items-center justify-between gap-3 px-4 py-2.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            <span className="min-w-0 flex items-center gap-2.5 text-sm font-medium">
              <span className="text-ink-faint transition-transform group-open:rotate-90" aria-hidden="true">›</span>
              <span className="truncate">{title(item) || `New ${itemName}`}</span>
            </span>
            <span onClick={(e) => e.preventDefault()}>
              <RowControls index={i} count={items.length} name={title(item) || itemName} onMove={move} onRemove={remove} />
            </span>
          </summary>
          <div className="px-4 pb-5 pt-3 space-y-5 border-t border-ink/10">{children([...path, i])}</div>
        </details>
      ))}
      <AddButton onClick={() => add(structuredClone(blank))}>{addLabel}</AddButton>
    </div>
  );
}

function useUpload(kind, onDone) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handleChange = async (e) => {
    const file = e.target.files[0];
    e.target.value = '';
    if (!file) return;
    setBusy(true);
    setError('');
    try {
      onDone(await uploadFile(file, kind));
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setBusy(false);
    }
  };

  return { inputRef, busy, error, handleChange, open: () => inputRef.current.click() };
}

const uploadButtonClass =
  'inline-flex items-center rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold hover:border-ink hover:bg-ink hover:text-paper transition-colors disabled:opacity-50 disabled:pointer-events-none';

export function ImageField({ label, hint, path }) {
  const [value, setValue] = useField(path);
  const [preview, setPreview] = useState(null);
  const upload = useUpload('image', ({ url, preview: localPreview }) => {
    setPreview(localPreview);
    setValue(url);
  });

  return (
    <div className="flex items-start gap-4">
      <img src={preview ?? value} alt="" className="w-24 h-28 object-cover rounded-lg bg-paper-deep flex-shrink-0" />
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        {hint && <p className="text-[13px] text-ink-faint mt-0.5">{hint}</p>}
        <input ref={upload.inputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={upload.handleChange} className="hidden" aria-label={`Upload ${label}`} />
        <button type="button" onClick={upload.open} disabled={upload.busy} className={`${uploadButtonClass} mt-3`}>
          {upload.busy ? 'Uploading…' : 'Change photo'}
        </button>
        {upload.error && <p className="text-sm text-red-700 mt-2" role="alert">{upload.error}</p>}
      </div>
    </div>
  );
}

export function ScreenshotList({ label, hint, path }) {
  const { items, add, remove, move } = useListField(path);
  const [previews, setPreviews] = useState({});
  const upload = useUpload('image', ({ url, preview }) => {
    setPreviews((current) => ({ ...current, [url]: preview }));
    add(url);
  });

  return (
    <div>
      <p className="text-sm font-medium text-ink">{label}</p>
      {hint && <p className="text-[13px] text-ink-faint mt-0.5">{hint}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
        {items.map((url, i) => (
          <div key={url} className="rounded-lg border border-ink/10 bg-white overflow-hidden">
            <img src={previews[url] ?? url} alt={`Screenshot ${i + 1}`} className="w-full aspect-[4/3] object-cover object-top bg-paper-deep" />
            <div className="flex justify-end">
              <RowControls index={i} count={items.length} name={`screenshot ${i + 1}`} onMove={move} onRemove={remove} />
            </div>
          </div>
        ))}
      </div>
      <input ref={upload.inputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={upload.handleChange} className="hidden" aria-label="Upload screenshot" />
      <button type="button" onClick={upload.open} disabled={upload.busy} className={`${uploadButtonClass} mt-3`}>
        {upload.busy ? 'Uploading…' : 'Add screenshot'}
      </button>
      {upload.error && <p className="text-sm text-red-700 mt-2" role="alert">{upload.error}</p>}
    </div>
  );
}

export function CvField({ path }) {
  const [value, setValue] = useField(path);
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState('');
  const upload = useUpload('cv', ({ url, preview: localPreview }) => {
    setPreview(localPreview);
    setFileName(url.split('/').pop());
    setValue(url);
  });

  return (
    <div className="rounded-xl border border-ink/10 bg-white p-6">
      <p className="text-sm text-ink-faint">Current CV</p>
      <p className="font-medium break-all mt-1">{fileName || decodeURIComponent(value.split('/').pop())}</p>
      <div className="flex flex-wrap items-center gap-3 mt-5">
        <input ref={upload.inputRef} type="file" accept="application/pdf" onChange={upload.handleChange} className="hidden" aria-label="Upload CV" />
        <button type="button" onClick={upload.open} disabled={upload.busy} className="btn-primary !py-2.5 disabled:opacity-50">
          {upload.busy ? 'Uploading…' : 'Upload new CV'}
        </button>
        <a href={preview ?? value} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-clay hover:text-clay-dark">
          View this CV
        </a>
      </div>
      {upload.error && <p className="text-sm text-red-700 mt-3" role="alert">{upload.error}</p>}
      {preview && !upload.error && (
        <p className="text-sm text-ink-soft mt-3" role="status">
          Uploaded. Press <strong className="font-semibold">Publish changes</strong> to put this CV on your site.
        </p>
      )}
    </div>
  );
}
