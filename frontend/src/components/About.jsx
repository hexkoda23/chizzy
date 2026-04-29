import { RectPhoto } from './ImageWithFallback';

const stats = [
  { value: '3+', label: 'Years Experience', icon: '🏆' },
  { value: '4', label: 'Industries Served', icon: '🌐' },
  { value: '✓', label: 'Remote-First Ready', icon: '💻' },
  { value: 'B.Sc.', label: 'Industrial Physics', icon: '🎓' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

          {/* LEFT: Photo */}
          <div className="w-full md:w-auto md:flex-shrink-0 flex flex-col items-center md:items-start animate-on-scroll">
            <RectPhoto
              src="/my-pics/photo2.jpg"
              alt="Chiziterem Chibuokem professional photo"
            />
            <p className="mt-4 text-xs text-gray-500 italic text-center md:text-left max-w-sm">
              Chiziterem Chibuokem — Communications &amp; Operations Professional
            </p>
          </div>

          {/* RIGHT: Text */}
          <div className="flex-1 animate-on-scroll animate-on-scroll-delay-2">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-teal-600" />
              Who I Am
            </div>
            <h2 className="section-heading text-[#0F172A] mb-6">About Me</h2>
            <div className="teal-accent-bar" />

            <div className="space-y-4 text-gray-600 leading-relaxed text-[17px]">
              <p>
                I'm a multidisciplinary professional holding a <strong className="text-[#0F172A]">B.Sc. in Industrial Physics</strong> from Enugu State University of Science &amp; Technology (ESUT), 2024 — a foundation that sharpens my systems thinking and analytical approach to every communication challenge.
              </p>
              <p>
                My experience spans <strong className="text-[#0F172A]">digital communications, administrative support, content strategy, and social media operations</strong>, across remote, hybrid, and institutional settings — from tech startups like Webxiel Technology and Solution Labs to a federal government agency, the Nigeria Shippers' Council.
              </p>
              <p>
                I'm passionate about <strong className="text-[#0F172A]">translating complex, technical information</strong> into clear, compelling, audience-appropriate content. Whether it's crafting a brand script, streamlining a workflow, or managing stakeholder communication, I bring the same detail-oriented, collaborative energy.
              </p>
              <p>
                Currently based in <strong className="text-[#0F172A]">Lagos, Nigeria</strong>, and open to remote and global opportunities across communications, operations, and content roles.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group`}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black text-teal-600 group-hover:text-teal-700 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
