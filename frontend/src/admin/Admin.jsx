import { useCallback, useEffect, useMemo, useState } from 'react';
import { getContent, getSession, login, logout, saveContent } from './api';
import { DraftContext, setIn } from './fields';
import { SECTIONS } from './sections';

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
}

// New case studies get their web address from their title when first published.
function withCaseStudyIds(content) {
  const used = new Set(content.caseStudies.items.map((item) => item.id).filter(Boolean));
  const items = content.caseStudies.items.map((item, i) => {
    if (item.id) return item;
    const base = slugify(item.title) || `case-study-${i + 1}`;
    let id = base;
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
    used.add(id);
    return { ...item, id };
  });
  return { ...content, caseStudies: { ...content.caseStudies, items } };
}

function LoginForm({ onSuccess, expired }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await login(password);
      onSuccess();
    } catch (loginError) {
      setError(loginError.message);
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-2xl border border-ink/10 p-8">
      <p className="font-display text-2xl tracking-tight">
        Portfolio admin<span className="text-clay">.</span>
      </p>
      <p className="text-sm text-ink-soft mt-2 mb-6">
        {expired ? 'Your session ended. Sign in again and your edits will still be here.' : 'Sign in to update your site.'}
      </p>
      <label htmlFor="admin-password" className="block text-sm font-medium mb-1.5">
        Password
      </label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        autoFocus
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-lg border border-ink/15 px-3.5 py-2.5 focus:outline-none focus:border-clay focus:ring-1 focus:ring-clay"
      />
      {error && (
        <p className="text-sm text-red-700 mt-3" role="alert">
          {error}
        </p>
      )}
      <button type="submit" disabled={busy} className="btn-primary w-full mt-5 disabled:opacity-50">
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}

function PublishStatus({ dirty, status }) {
  if (status.type === 'error') {
    return <p className="text-sm text-red-700" role="alert">{status.message}</p>;
  }
  if (dirty) return <p className="text-sm text-ink-soft">You have unpublished changes.</p>;
  if (status.type === 'saved') {
    return <p className="text-sm text-emerald-800" role="status">{status.message}</p>;
  }
  return <p className="text-sm text-ink-faint">Everything is published.</p>;
}

function Editor({ initial, onSignOut }) {
  const [saved, setSaved] = useState(initial.content);
  const [draft, setDraft] = useState(initial.content);
  const [version, setVersion] = useState(initial.version);
  const [sectionId, setSectionId] = useState(SECTIONS[0].id);
  const [publishing, setPublishing] = useState(false);
  const [status, setStatus] = useState({ type: 'idle' });
  const [expired, setExpired] = useState(false);

  const dirty = useMemo(() => JSON.stringify(draft) !== JSON.stringify(saved), [draft, saved]);
  const section = SECTIONS.find(({ id }) => id === sectionId);

  useEffect(() => {
    if (!dirty) return undefined;
    const warn = (e) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const setField = useCallback((path, value) => {
    setDraft((current) => setIn(current, path, value));
    setStatus({ type: 'idle' });
  }, []);

  const context = useMemo(() => ({ draft, setField }), [draft, setField]);

  const publish = async () => {
    setPublishing(true);
    setStatus({ type: 'idle' });
    try {
      const content = withCaseStudyIds(draft);
      const result = await saveContent(content, version);
      setDraft(content);
      setSaved(content);
      setVersion(result.version);
      setStatus({
        type: 'saved',
        message: result.mode === 'github' ? 'Published. Your site updates in about a minute.' : 'Saved on this computer.',
      });
    } catch (error) {
      if (error.status === 401) setExpired(true);
      else setStatus({ type: 'error', message: error.message });
    } finally {
      setPublishing(false);
    }
  };

  return (
    <DraftContext.Provider value={context}>
      <div className="min-h-screen bg-paper lg:grid lg:grid-cols-[260px_1fr]">
        <aside className="bg-ink text-paper lg:sticky lg:top-0 lg:h-screen flex flex-col">
          <div className="px-5 lg:px-6 pt-5 lg:pt-7 pb-3 lg:pb-6 flex items-center justify-between">
            <p className="font-display text-xl tracking-tight">
              Admin<span className="text-clay-light">.</span>
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer" className="lg:hidden text-sm text-paper/70 hover:text-paper">
              View site ↗
            </a>
          </div>
          <nav aria-label="Sections" className="flex lg:flex-col gap-1 px-3 pb-3 overflow-x-auto lg:overflow-y-auto lg:flex-1">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-current={id === sectionId ? 'page' : undefined}
                onClick={() => {
                  setSectionId(id);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className={`flex-shrink-0 text-left text-sm font-medium rounded-lg px-3 py-2 transition-colors ${
                  id === sectionId ? 'bg-paper text-ink' : 'text-paper/75 hover:bg-paper/10 hover:text-paper'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex flex-col items-start gap-2 p-6 border-t border-paper/10 text-sm">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-paper/75 hover:text-paper">
              View site ↗
            </a>
            <button type="button" onClick={onSignOut} className="text-paper/75 hover:text-paper">
              Sign out
            </button>
          </div>
        </aside>

        <div className="min-w-0 flex flex-col min-h-screen">
          <main className="flex-1 w-full max-w-3xl mx-auto px-5 sm:px-8 pt-8 lg:pt-12 pb-16">
            <h1 className="font-display font-light text-4xl tracking-tight">{section.label}</h1>
            <p className="text-ink-soft mt-2 mb-8">{section.description}</p>
            <div className="space-y-8">
              <section.Component />
            </div>
            <button type="button" onClick={onSignOut} className="lg:hidden mt-12 text-sm font-medium text-ink-soft">
              Sign out
            </button>
          </main>

          <div className="sticky bottom-0 bg-paper/95 backdrop-blur border-t border-ink/10">
            <div className="max-w-3xl mx-auto px-5 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <PublishStatus dirty={dirty} status={status} />
              <div className="flex items-center gap-2 ml-auto">
                {dirty && (
                  <button type="button" onClick={() => setDraft(saved)} disabled={publishing} className="text-sm font-medium text-ink-soft hover:text-ink px-3 py-2">
                    Discard
                  </button>
                )}
                <button type="button" onClick={publish} disabled={!dirty || publishing} className="btn-primary !py-2.5 disabled:opacity-40 disabled:pointer-events-none">
                  {publishing ? 'Publishing…' : 'Publish changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {expired && (
        <div className="fixed inset-0 z-50 bg-ink/60 flex items-center justify-center p-5">
          <LoginForm expired onSuccess={() => setExpired(false)} />
        </div>
      )}
    </DraftContext.Provider>
  );
}

export default function Admin() {
  const [state, setState] = useState({ view: 'loading' });

  const load = useCallback(async () => {
    try {
      const { authenticated } = await getSession();
      if (!authenticated) return setState({ view: 'login' });
      return setState({ view: 'editor', initial: await getContent() });
    } catch (error) {
      return setState({ view: 'error', message: error.message });
    }
  }, []);

  useEffect(() => {
    document.title = 'Admin';
    load();
  }, [load]);

  const signOut = async () => {
    await logout();
    setState({ view: 'login' });
  };

  if (state.view === 'editor') return <Editor initial={state.initial} onSignOut={signOut} />;

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-5">
      {state.view === 'login' && <LoginForm onSuccess={load} />}
      {state.view === 'error' && (
        <div className="max-w-sm text-center">
          <p className="text-ink-soft" role="alert">{state.message}</p>
          <button type="button" onClick={signOut} className="btn-secondary mt-5">
            Back to sign in
          </button>
        </div>
      )}
    </div>
  );
}
