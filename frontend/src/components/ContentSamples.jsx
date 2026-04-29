const contentSamples = [
  {
    emoji: '🎬',
    type: 'CAMPAIGN SCRIPT',
    title: 'Brand Awareness Campaign Script',
    description:
      'A structured campaign script developed to drive audience awareness and engagement for a client brand. Demonstrates scripting, narrative flow, and audience-first communication.',
    link: 'https://docs.google.com/document/d/1cNEYAgXIDMyJ6F2gexNaOp34-x673pv1Eakv_5cph2Y/edit?usp=drivesdk',
    accentFrom: 'from-teal-500',
    accentTo: 'to-teal-600',
  },
  {
    emoji: '📅',
    type: 'CONTENT CALENDAR',
    title: 'Sample Content Calendar — Consumer Brand',
    description:
      'A structured monthly content plan showcasing content strategy, scheduling logic, and platform-specific thinking for a consumer-facing brand.',
    link: 'https://docs.google.com/document/d/1JDGJDYzl4UQBzzNWlq8HjVU3V-mqdneOtY0fnMusAnM/edit?usp=drivesdk',
    accentFrom: 'from-blue-500',
    accentTo: 'to-blue-600',
  },
  {
    emoji: '✍️',
    type: 'SAMPLE STORY',
    title: 'Storytelling & Narrative Samples',
    description:
      'Written content pieces showcasing creative and editorial storytelling — designed to connect with audiences and communicate brand values clearly.',
    link: 'https://docs.google.com/document/d/1ydSWfVmZG6SbNOh7r10kGzzXH73WHi1yYw8PJa-0Fvk/edit?usp=drivesdk',
    accentFrom: 'from-purple-500',
    accentTo: 'to-purple-600',
  },
  {
    emoji: '📝',
    type: 'SAMPLE STORY',
    title: 'Additional Story Sample',
    description:
      'Another written sample demonstrating range, voice, and the ability to adapt tone and structure to different content goals.',
    link: 'https://docs.google.com/document/d/1XDYa1t_9QARGW3iwV591NOnQNUIbLUue/edit?usp=drivesdk',
    accentFrom: 'from-rose-500',
    accentTo: 'to-rose-600',
  },
  {
    emoji: '📊',
    type: 'ANALYTICS INSIGHT',
    title: 'Monthly Insight Review',
    description:
      'A client-facing monthly insight report summarising content performance, engagement trends, and strategic recommendations.',
    link: 'https://docs.google.com/document/d/1PNnDMwYLR2TfsLBWkhCxSDcxQWUP8p21/edit?usp=drivesdk',
    accentFrom: 'from-orange-500',
    accentTo: 'to-orange-600',
  },
];

export default function ContentSamples() {
  return (
    <section id="content-samples" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-teal-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-400" />
            Portfolio Samples
            <span className="w-6 h-px bg-teal-400" />
          </div>
          <h2 className="section-heading text-white mb-3">Content Samples</h2>
          <p className="text-gray-400 text-lg">
            A look at the writing, strategy, and storytelling behind the work.
          </p>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentSamples.map((sample, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-on-scroll-delay-${(i % 3) + 1} navy-card rounded-2xl overflow-hidden card-hover group flex flex-col`}
            >
              {/* Gradient header area */}
              <div className={`bg-gradient-to-br ${sample.accentFrom} ${sample.accentTo} p-6 flex items-center gap-4`}>
                <span className="text-4xl drop-shadow">{sample.emoji}</span>
                <span className="text-white/80 text-xs font-black tracking-widest uppercase">
                  {sample.type}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-teal-400 transition-colors">
                  {sample.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {sample.description}
                </p>
                <a
                  href={sample.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors group/link"
                >
                  View Sample
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
