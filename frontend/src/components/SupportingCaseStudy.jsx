import content from '../data/content.json';
import { ArrowUpRight, CaseSection, KeyInsight, NumberedList, PageHeader } from './ui';

const { supporting } = content;

export default function SupportingCaseStudy() {
  return (
    <section id="supporting-case-study" className="pb-20 sm:pb-28">
      <PageHeader eyebrow={supporting.eyebrow} title={supporting.heading} subtitle={supporting.subheading} />

      <div className="page-width">
        <div className="max-w-4xl animate-on-scroll">
          <p className="eyebrow mb-4">
            {supporting.company} · {supporting.duration}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {supporting.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <CaseSection title="Overview">{supporting.overview}</CaseSection>
          <CaseSection title="Key Contributions">
            <NumberedList items={supporting.contributions} />
          </CaseSection>

          <div className="mt-4">
            <KeyInsight text={supporting.keyInsight} />
          </div>
        </div>

        {supporting.screenshots.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5 mt-12">
            {supporting.screenshots.map((src, i) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block animate-on-scroll"
                aria-label={`Open screenshot ${i + 1}`}
              >
                <div className="overflow-hidden rounded-2xl bg-paper-deep border border-ink/10">
                  <img
                    src={src}
                    alt={`${supporting.subheading}, screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="flex items-center gap-1.5 mt-3 text-sm font-medium text-ink-soft group-hover:text-clay transition-colors">
                  View Screenshot {i + 1}
                  <ArrowUpRight />
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
