import content from '../data/content.json';
import { PageHeader } from './ui';

const { skills } = content;

export default function Skills() {
  return (
    <section id="skills" className="pb-20 sm:pb-28">
      <PageHeader eyebrow={skills.eyebrow} title={skills.heading} />

      <div className="page-width">
        <div className="grid md:grid-cols-2 gap-5">
          {skills.groups.map((group, i) => (
            <article
              key={i}
              className={`animate-on-scroll animate-on-scroll-delay-${(i % 2) + 1} rounded-2xl p-8 sm:p-10 ${i === 0 || i === 3 ? 'bg-ink text-paper' : 'bg-paper-deep'}`}
            >
              <p className={`font-display italic mb-8 ${i === 0 || i === 3 ? 'text-clay-light' : 'text-clay'}`}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display font-light text-3xl leading-tight mb-6">{group.title}</h2>
              <ul className={`divide-y ${i === 0 || i === 3 ? 'divide-paper/10 text-paper/75' : 'divide-ink/10 text-ink-soft'}`}>
                {group.items.map((skill, j) => (
                  <li key={j} className="py-2.5 text-[15px]">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
