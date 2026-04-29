const caseStudies = [
  {
    title: 'Administrative Operations & Institutional Synergy',
    company: 'Nigeria Shippers\' Council (NSC) — Special Duties Department',
    duration: 'May 2025 – March 2026',
    tags: ['Government', 'Operations', 'Stakeholder Management'],
    tagColors: ['bg-blue-100 text-blue-700', 'bg-green-100 text-green-700', 'bg-purple-100 text-purple-700'],
    accentColor: 'bg-blue-500',
    bullets: [
      'Supported the Deputy Director (Collaboration & Synergy) in cross-departmental coordination',
      'Facilitated joint initiatives, improving alignment and execution timelines across departments',
      'Managed administrative documentation, workflow continuity, and stakeholder engagement',
      'Contributed to institutional synergy projects that improved service delivery efficiency',
    ],
  },
  {
    title: 'Brand Voice & Social Media Operations at Scale',
    company: 'Webxiel Technology',
    duration: 'May 2024 – Present',
    tags: ['Tech', 'Social Media', 'Brand Communications'],
    tagColors: ['bg-teal-100 text-teal-700', 'bg-pink-100 text-pink-700', 'bg-orange-100 text-orange-700'],
    accentColor: 'bg-teal-500',
    bullets: [
      'Led day-to-day digital communications as Brand Spokesperson and Social Media Team Lead',
      'Managed content scheduling, posting, engagement monitoring, and audience interaction',
      'Contributed to content scripting, narrative development, and campaign messaging',
      'Collaborated with design and dev teams on campaigns that improved user engagement',
    ],
  },
  {
    title: 'Remote Administrative Operations & Business Development Support',
    company: 'Solution Labs',
    duration: 'November 2022 – January 2024',
    tags: ['Remote Work', 'Admin', 'Business Development'],
    tagColors: ['bg-indigo-100 text-indigo-700', 'bg-yellow-100 text-yellow-700', 'bg-red-100 text-red-700'],
    accentColor: 'bg-indigo-500',
    bullets: [
      'Managed structured data organisation, documentation, and client communication remotely',
      'Handled proposals, quotations, and deliverable follow-ups with clients',
      'Assisted with press release research and communications',
      'Improved internal workflows through organised records and team coordination',
    ],
  },
  {
    title: 'Technical Documentation in a Clinical & Biomedical Environment',
    company: 'Meridian Hospitals — Radiology & Biomedical Engineering, Port Harcourt',
    duration: 'June 2023 – November 2023',
    tags: ['Healthcare', 'Technical Documentation', 'Industrial Training'],
    tagColors: ['bg-rose-100 text-rose-700', 'bg-cyan-100 text-cyan-700', 'bg-amber-100 text-amber-700'],
    accentColor: 'bg-rose-500',
    bullets: [
      'Supported biomedical engineers and radiologists in documenting medical imaging equipment',
      'Maintained compliance and maintenance records for radiology and ultrasound systems',
      'Applied industrial physics knowledge to real-world technical environments',
      'Developed skills in systems reliability and cross-disciplinary technical collaboration',
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-600" />
            Professional Experience
            <span className="w-6 h-px bg-teal-600" />
          </div>
          <h2 className="section-heading text-[#0F172A] mb-3">Case Studies</h2>
          <p className="text-gray-500 text-lg font-medium">Real work. Real impact.</p>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-on-scroll-delay-${(i % 2) + 1} bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group`}
            >
              {/* Colored accent bar */}
              <div className={`h-1.5 ${cs.accentColor}`} />

              <div className="p-7">
                {/* Company & duration */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">{cs.company}</p>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {cs.duration}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#0F172A] font-bold text-xl mb-4 leading-snug group-hover:text-teal-700 transition-colors">
                  {cs.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cs.tags.map((tag, j) => (
                    <span
                      key={j}
                      className={`${cs.tagColors[j]} text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {cs.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
