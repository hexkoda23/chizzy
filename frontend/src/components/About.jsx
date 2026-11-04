import content from '../data/content.json';
import { Download, Photo, RichText } from './ui';

const { about, profile } = content;

export default function About() {
  const [lead, ...paragraphs] = about.paragraphs;

  return (
    <section id="about" className="page-width pt-16 sm:pt-24 pb-20 sm:pb-28">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* LEFT: Photo */}
        <div className="lg:col-span-5 animate-on-scroll">
          <div className="lg:sticky lg:top-28 max-w-md mx-auto lg:mx-0">
            <Photo
              src={profile.aboutPhoto}
              alt={`${profile.shortName}, ${profile.role}`}
              className="aspect-[4/5] [border-radius:50%_50%_1rem_1rem/40%_40%_1rem_1rem]"
              imgClassName="object-top"
            />
            <p className="mt-4 text-sm text-ink-faint">
              <span className="font-display italic text-ink text-base">{profile.shortName}</span> — {profile.role}
            </p>
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="lg:col-span-7 animate-on-scroll animate-on-scroll-delay-2">
          <p className="eyebrow mb-5">{about.eyebrow}</p>
          <h1 className="display-heading mb-10">{about.heading}</h1>

          {lead && (
            <p className="font-display font-light text-2xl sm:text-3xl leading-snug mb-8 [&>strong]:font-normal [&>strong]:text-clay">
              <RichText text={lead} />
            </p>
          )}

          <div className="space-y-5 text-ink-soft text-[17px] leading-relaxed">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>

          {/* Stats grid */}
          <dl className="grid grid-cols-2 mt-12 border-t border-ink/10">
            {about.stats.map((stat, i) => (
              <div key={stat.label} className={`py-6 border-b border-ink/10 ${i % 2 === 1 ? 'pl-6 border-l' : 'pr-6'}`}>
                <dd className="font-display font-light text-4xl text-clay">{stat.value}</dd>
                <dt className="mt-2 text-sm text-ink-soft">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10">
            Download CV
            <Download />
          </a>
        </div>
      </div>
    </section>
  );
}
