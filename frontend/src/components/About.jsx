import { RectPhoto } from './ImageWithFallback';

const stats = [
  { value: '3+', label: 'Years Experience', icon: '🏆' },
  { value: '50+', label: 'Projects Delivered', icon: '📊' },
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
              alt="Zizi professional photo"
            />
            <p className="mt-4 text-xs text-gray-500 italic text-center md:text-left max-w-sm">
              Zizi — Content & Communication Strategist
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
              <p className="text-xl font-semibold text-[#0F172A]">
                Zizi
              </p>
              <p className="text-lg text-teal-600 font-medium">
                Content & Communication Strategist
              </p>
              <p>
                I’m a graduate of <strong className="text-[#0F172A]">Industrial Physics</strong> with a strong foundation in structured thinking, problem-solving, and analysis.
              </p>
              <p>
                Over time, I’ve transitioned these skills into content and communication, where I focus on making ideas clear, engaging, and easy to understand.
              </p>
              <p>
                I’ve worked across <strong className="text-[#0F172A]">content planning, social media strategy, and customer communication</strong>, where I’ve learned how to organize workflows, break down complex information, and present it in ways that connect with people. My approach is simple: clarity first, then impact.
              </p>
              <p>
                I write across different styles and formats, from storytelling to structured content, always with a focus on meaning, relatability, and precision. I’m particularly interested in creating content that doesn’t just inform, but makes people pause, think, and feel.
              </p>
              <p>
                Right now, I’m focused on building depth in <strong className="text-[#0F172A]">content strategy and communication</strong>, refining how ideas are shaped, structured, and delivered for real impact.
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
