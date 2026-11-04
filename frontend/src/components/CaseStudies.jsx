import { Link } from 'react-router-dom';
import content from '../data/content.json';
import { ArrowUpRight, PageHeader } from './ui';

const { caseStudies } = content;

export default function CaseStudies() {
  return (
    <section id="case-studies" className="pb-20 sm:pb-28">
      <PageHeader eyebrow={caseStudies.eyebrow} title={caseStudies.heading} subtitle={caseStudies.subheading} />

      <div className="page-width">
        <div className="border-b border-ink/10">
          {caseStudies.items.map((item, i) => (
            <Link
              key={item.id}
              to={`/case-studies/${item.id}`}
              className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[4rem_1fr_auto] gap-2 sm:gap-4 py-9 border-t border-ink/10 animate-on-scroll"
            >
              <span className="font-display italic text-clay pt-1">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p className="text-sm text-ink-faint mb-2">
                  {item.company} · {item.duration}
                </p>
                <h2 className="font-display font-light text-2xl sm:text-[2rem] leading-tight transition-colors group-hover:text-clay max-w-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">{item.overview}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 mt-1 text-ink-faint transition-all group-hover:text-clay group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
