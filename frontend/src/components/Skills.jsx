const skillCards = [
  {
    icon: '✍️',
    title: 'Content & Communications',
    skills: [
      'Brand messaging & narrative alignment',
      'Technical & creative copywriting',
      'Content planning & strategy',
      'Script writing & storytelling',
      'Visual content direction',
      'Research-backed messaging',
    ],
    accent: 'from-teal-600/20 to-teal-600/5',
  },
  {
    icon: '🗂️',
    title: 'Operations & Admin Support',
    skills: [
      'Task coordination & workflow management',
      'Documentation & record keeping',
      'Cross-departmental collaboration',
      'Stakeholder communication',
      'Strategic project support',
      'Information management',
    ],
    accent: 'from-blue-600/20 to-blue-600/5',
  },
  {
    icon: '💬',
    title: 'Customer Support & Experience',
    skills: [
      'Customer communication & issue resolution',
      'Client follow-ups & feedback documentation',
      'User experience support',
      'Engagement monitoring',
      'Response consistency management',
    ],
    accent: 'from-purple-600/20 to-purple-600/5',
  },
  {
    icon: '🖥️',
    title: 'IT Tools & Systems',
    skills: [
      'Google Workspace (Docs, Sheets, Drive)',
      'Microsoft Office (Word, Excel, PowerPoint)',
      'Basic CRM familiarity (Zendesk / Intercom)',
      'Social media scheduling tools',
      'Content calendar management',
    ],
    accent: 'from-orange-600/20 to-orange-600/5',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-400" />
            What I Bring
            <span className="w-6 h-px bg-teal-400" />
          </div>
          <h2 className="section-heading text-white mb-4">Skills Overview</h2>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCards.map((card, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group navy-card rounded-2xl p-6 hover:border-teal-600/40 card-hover`}
            >
              {/* Gradient top accent */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${card.accent.replace('/20', '').replace('/5', '')} bg-teal-600 opacity-60`} />

              <div className="relative">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-5 leading-snug">
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-snug">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                      {skill}
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
