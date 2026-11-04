import { Link } from 'react-router-dom';
import content from '../data/content.json';
import { ArrowRight, Download, Photo } from './ui';

const { profile } = content;

export default function Hero() {
  return (
    <section id="hero" className="page-width pt-10 sm:pt-14 lg:pt-16 pb-16 lg:pb-24">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-end">
        {/* LEFT: Text */}
        <div className="lg:col-span-7 animate-on-scroll">
          <p className="eyebrow mb-6">{profile.eyebrow}</p>

          <h1 className="font-display font-light tracking-tight leading-[0.98] mb-8" style={{ fontSize: 'clamp(3.25rem, 9.2vw, 8rem)' }}>
            {profile.firstName}
            <br />
            <span className="italic text-clay">{profile.lastName}</span>
          </h1>

          <p className="font-display font-light text-2xl sm:text-[1.75rem] leading-snug max-w-2xl mb-8 [text-wrap:pretty]">
            {profile.tagline}
          </p>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft mb-10 max-w-2xl">
            {profile.credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/case-studies" className="btn-primary" id="hero-view-work">
              View My Work
              <ArrowRight />
            </Link>
            <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" id="hero-download-cv" className="btn-secondary">
              Download CV
              <Download />
            </a>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="lg:col-span-5 animate-on-scroll animate-on-scroll-delay-2">
          <div className="relative max-w-md mx-auto lg:ml-auto lg:mr-0">
            <Photo
              src={profile.heroPhoto}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="aspect-[4/5] [border-radius:50%_50%_1rem_1rem/40%_40%_1rem_1rem]"
              imgClassName="object-top"
              fetchPriority="high"
            />

            <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 bg-paper/95 backdrop-blur rounded-full pl-5 pr-4 py-2.5 text-sm">
              <span className="font-medium">{profile.location}</span>
              {profile.openToWork && (
                <span className="flex items-center gap-2 text-ink-soft whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" aria-hidden="true" />
                  {profile.openToWorkLabel}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
