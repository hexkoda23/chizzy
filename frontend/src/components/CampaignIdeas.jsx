const campaigns = [
  {
    title: '"The Human Behind the Brand" Series',
    platforms: ['LinkedIn', 'Instagram'],
    platformColors: ['bg-blue-500', 'bg-gradient-to-br from-pink-500 to-orange-400'],
    objective: 'Build brand trust and relatability',
    concept:
      'A content series spotlighting the people, stories, and values behind a business — combining scripted interviews, written narratives, and designed carousels to humanise corporate brands and drive authentic audience connection.',
    icon: '👥',
    accentColor: 'border-blue-500',
    numberColor: 'text-blue-400',
  },
  {
    title: '"Clarity First" Explainer Campaign',
    platforms: ['Twitter/X', 'YouTube Shorts'],
    platformColors: ['bg-gray-700', 'bg-red-600'],
    objective: 'Simplify complex topics for non-expert audiences',
    concept:
      'Short-form educational content that translates technical, regulatory, or industry-specific information into accessible, engaging formats — leveraging her physics and scientific background to make even the most complex ideas understandable.',
    icon: '💡',
    accentColor: 'border-teal-500',
    numberColor: 'text-teal-400',
  },
  {
    title: '"Monthly Momentum" Newsletter Strategy',
    platforms: ['Email', 'LinkedIn Newsletter'],
    platformColors: ['bg-teal-600', 'bg-blue-600'],
    objective: 'Audience retention and thought leadership',
    concept:
      'A curated monthly newsletter combining performance insights, industry news, and a personal brand note — designed to maintain audience engagement between campaigns and position the brand as an informed voice in its sector.',
    icon: '📬',
    accentColor: 'border-purple-500',
    numberColor: 'text-purple-400',
  },
];

export default function CampaignIdeas() {
  return (
    <section id="campaign-ideas" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-600" />
            Creative Strategy
            <span className="w-6 h-px bg-teal-600" />
          </div>
          <h2 className="section-heading text-[#0F172A] mb-3">Campaign Ideas</h2>
          <p className="text-gray-500 text-lg font-medium">Strategic thinking, not just execution.</p>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((c, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-l-4 ${c.accentColor} card-hover group`}
            >
              {/* Number & icon */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-5xl font-black opacity-10 ${c.numberColor}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </span>
              </div>

              <h3 className="text-[#0F172A] font-bold text-xl mb-4 leading-snug group-hover:text-teal-700 transition-colors">
                {c.title}
              </h3>

              {/* Objective */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">Objective:</span>
              </div>
              <p className="text-teal-700 text-sm font-medium mb-4 italic">"{c.objective}"</p>

              {/* Concept */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{c.concept}</p>

              {/* Platform tags */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {c.platforms.map((p, j) => (
                    <span
                      key={j}
                      className={`${c.platformColors[j]} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
