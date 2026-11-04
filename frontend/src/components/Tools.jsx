import content from '../data/content.json';
import { PageHeader } from './ui';

const { tools } = content;

export default function Tools() {
  return (
    <section id="tools" className="pb-20 sm:pb-28">
      <PageHeader eyebrow={tools.eyebrow} title={tools.heading} />

      <div className="page-width">
        <div className="border-b border-ink/10">
          {tools.groups.map((group, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-4 md:gap-8 py-9 border-t border-ink/10 animate-on-scroll">
              <h2 className="md:col-span-4 font-display font-light text-2xl sm:text-3xl leading-tight">{group.category}</h2>
              <ul className="md:col-span-8 flex flex-wrap gap-2.5">
                {group.tools.map((tool, j) => (
                  <li key={j} className="px-4 py-2.5 rounded-full bg-paper-deep text-sm font-medium">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 font-display italic text-xl text-ink-soft animate-on-scroll">{tools.note}</p>
      </div>
    </section>
  );
}
