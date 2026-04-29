const insightCards = [
  {
    emoji: '📈',
    title: 'Engagement Trend Tracking',
    description:
      'Monitoring platform metrics (likes, comments, shares, reach, saves) to identify what content resonates and optimise future output.',
    stat: 'Metrics',
    statLabel: 'Monitored',
  },
  {
    emoji: '🎯',
    title: 'Audience Feedback Loop',
    description:
      'Documenting user interactions and feedback to refine messaging tone, content format, and posting cadence.',
    stat: 'Insights',
    statLabel: 'Driven',
  },
  {
    emoji: '📋',
    title: 'Monthly Performance Reports',
    description:
      'Compiling insight reviews that translate data into clear, actionable strategy recommendations for clients and stakeholders.',
    stat: 'Reports',
    statLabel: 'Delivered',
  },
];

export default function AnalyticsInsights() {
  return (
    <section id="analytics-insights" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-400" />
            Data & Performance
            <span className="w-6 h-px bg-teal-400" />
          </div>
          <h2 className="section-heading text-white mb-3">Analytics & Insights</h2>
          <p className="text-gray-400 text-lg">Data-informed content decisions.</p>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {insightCards.map((card, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} navy-card rounded-2xl p-8 card-hover group text-center`}
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {card.emoji}
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>

              {/* Decorative stat */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center">
                <div className="text-teal-400 text-2xl font-black">{card.stat}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">{card.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout banner */}
        <div className="animate-on-scroll bg-gradient-to-r from-teal-600/20 to-teal-600/10 border border-teal-600/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              Want to see a sample insight report?
            </p>
            <p className="text-gray-400 text-sm">
              View a real client-facing monthly review with data, trends, and recommendations.
            </p>
          </div>
          <a
            href="https://docs.google.com/document/d/1q3ckGGcbOjtYnLDLGh-lEnfgP95k33rMtI-IJ8E_xo4/edit?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-teal-600/25 whitespace-nowrap"
          >
            View Monthly Insight Review
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
