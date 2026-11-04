import { Link, Navigate, useParams } from 'react-router-dom';
import content from '../data/content.json';
import { ArrowLeft, ArrowRight, ArrowUpRight, CaseSection, KeyInsight, NumberedList } from './ui';

const { items } = content.caseStudies;

export default function CaseStudyDetail() {
  const { id } = useParams();
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return <Navigate to="/case-studies" replace />;

  const item = items[index];
  const next = items[(index + 1) % items.length];

  return (
    <article className="page-width pt-12 sm:pt-16 pb-20 sm:pb-28">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-clay transition-colors">
        <ArrowLeft />
        All case studies
      </Link>

      <header className="mt-10 mb-12 max-w-4xl">
        <p className="eyebrow mb-5">
          {item.company} · {item.duration}
        </p>
        <h1 className="font-display font-light tracking-tight leading-[1.08]" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
          {item.title}
        </h1>
        <div className="flex flex-wrap gap-2 mt-8">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-4xl">
        <CaseSection title="Overview">{item.overview}</CaseSection>
        <CaseSection title="The Problem">{item.problem}</CaseSection>
        <CaseSection title="Approach">{item.approach}</CaseSection>
        <CaseSection title="Execution">
          <NumberedList items={item.execution} />
        </CaseSection>
        <CaseSection title="Outcome">{item.outcome}</CaseSection>

        <div className="mt-4">
          <KeyInsight text={item.keyInsight} />
        </div>

        {item.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-10">
            {item.links.map((link, i) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={i === 0 ? 'btn-primary' : 'btn-secondary'}
              >
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        )}
      </div>

      {items.length > 1 && (
        <Link to={`/case-studies/${next.id}`} className="group block mt-20 pt-8 border-t border-ink/10">
          <p className="eyebrow mb-3">Next case study</p>
          <p className="flex items-center justify-between gap-6 font-display font-light text-2xl sm:text-4xl leading-tight transition-colors group-hover:text-clay">
            {next.title}
            <ArrowRight className="w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </p>
        </Link>
      )}
    </article>
  );
}
