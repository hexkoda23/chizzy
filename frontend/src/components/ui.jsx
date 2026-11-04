import { useState } from 'react';
import content from '../data/content.json';

function Icon({ d, className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

export const ArrowRight = (props) => <Icon d="M5 12h14m-6-6 6 6-6 6" {...props} />;
export const ArrowLeft = (props) => <Icon d="M19 12H5m6 6-6-6 6-6" {...props} />;
export const ArrowUpRight = (props) => <Icon d="M7 17 17 7M8 7h9v9" {...props} />;
export const Download = (props) => <Icon d="M12 4v11m-5-5 5 5 5-5M5 20h14" {...props} />;

export function Photo({ src, alt, className = '', imgClassName = '', ...props }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`overflow-hidden bg-clay-pale ${className}`}>
      {failed ? (
        <div className="w-full h-full flex items-center justify-center font-display text-5xl text-clay">
          {content.profile.initials}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${imgClassName}`}
          onError={() => setFailed(true)}
          {...props}
        />
      )}
    </div>
  );
}

// Renders **double asterisks** from the admin's text as bold.
export function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    /^\*\*[^*]+\*\*$/.test(part) ? (
      <strong key={i} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

export function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="page-width pt-16 sm:pt-24 pb-12 sm:pb-16">
      <div className="animate-on-scroll">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="display-heading">{title}</h1>
        {subtitle && <p className="mt-6 text-lg sm:text-xl text-ink-soft max-w-2xl">{subtitle}</p>}
      </div>
    </header>
  );
}

export function KeyInsight({ text }) {
  return (
    <aside className="bg-ink text-paper rounded-2xl p-8 sm:p-10">
      <p className="eyebrow-on-dark mb-4">Key Insight</p>
      <p className="font-display font-light text-2xl sm:text-3xl leading-snug">{text}</p>
    </aside>
  );
}

export function CaseSection({ title, children }) {
  return (
    <section className="grid sm:grid-cols-[10rem_1fr] gap-3 sm:gap-8 py-8 border-t border-ink/10">
      <h2 className="eyebrow pt-1">{title}</h2>
      <div className="text-ink-soft text-[17px] leading-relaxed">{children}</div>
    </section>
  );
}

export function NumberedList({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="font-display italic text-clay w-6 flex-shrink-0">{i + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
