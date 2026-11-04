import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight, ArrowUpRight } from '../components/ui';
import content from '../data/content.json';

const { about, home, caseStudies, contact } = content;

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Stats */}
      <section className="bg-ink text-paper">
        <div className="page-width grid grid-cols-2 lg:grid-cols-4">
          {about.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-on-scroll animate-on-scroll-delay-${(i % 4) + 1} py-10 lg:py-14 pr-6 ${i % 2 === 1 ? 'pl-6 lg:pl-8 border-l border-paper/10' : ''} ${i >= 2 ? 'border-t lg:border-t-0 border-paper/10' : ''} ${i === 2 ? 'lg:pl-8 lg:border-l' : ''}`}
            >
              <p className="font-display font-light text-4xl sm:text-5xl text-clay-light">{stat.value}</p>
              <p className="mt-3 text-sm text-paper/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="page-width py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-8 animate-on-scroll">
          <p className="eyebrow lg:col-span-3 pt-3">{about.eyebrow}</p>
          <div className="lg:col-span-9">
            <p className="section-heading">{home.statement}</p>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">{home.statementBody}</p>
            <Link to="/about" className="group inline-flex items-center gap-2 mt-8 text-sm font-semibold hover:text-clay transition-colors">
              {about.heading}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="page-width pb-20 sm:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 animate-on-scroll">
          <div>
            <p className="eyebrow mb-4">{caseStudies.heading}</p>
            <h2 className="section-heading">{caseStudies.subheading}</h2>
          </div>
          <Link to="/case-studies" className="btn-secondary">
            View all
            <ArrowRight />
          </Link>
        </div>

        <div className="border-b border-ink/10">
          {caseStudies.items.slice(0, 3).map((item, i) => (
            <Link
              key={item.id}
              to={`/case-studies/${item.id}`}
              className="group grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[4rem_1fr_auto] items-baseline gap-2 sm:gap-4 py-7 border-t border-ink/10 animate-on-scroll"
            >
              <span className="font-display italic text-clay">{String(i + 1).padStart(2, '0')}</span>
              <span>
                <span className="block font-display font-light text-xl sm:text-3xl leading-snug transition-colors group-hover:text-clay">
                  {item.title}
                </span>
                <span className="block mt-2 text-sm text-ink-faint">
                  {item.company} · {item.duration}
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-ink-faint transition-all group-hover:text-clay group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="page-width py-20 sm:py-28 animate-on-scroll">
          <p className="eyebrow-on-dark mb-5">{contact.eyebrow}</p>
          <h2 className="display-heading max-w-4xl">{contact.heading}</h2>
          <p className="mt-6 text-lg text-paper/70 max-w-xl">{contact.subheading}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-light">
              Contact Me
              <ArrowRight />
            </Link>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              LinkedIn
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
