const toolGroups = [
  {
    category: 'Content & Social',
    icon: '✍️',
    tools: [
      { emoji: '📅', name: 'Content Calendar Tools' },
      { emoji: '✍️', name: 'Google Docs' },
      { emoji: '📱', name: 'Social Platforms' },
    ],
    accentColor: 'border-teal-500 bg-teal-50',
    iconBg: 'bg-teal-100 text-teal-700',
  },
  {
    category: 'Operations & Admin',
    icon: '🗂️',
    tools: [
      { emoji: '📊', name: 'Google Sheets' },
      { emoji: '📁', name: 'Google Drive' },
      { emoji: '📄', name: 'Microsoft Word' },
      { emoji: '📊', name: 'Excel' },
      { emoji: '📊', name: 'PowerPoint' },
    ],
    accentColor: 'border-blue-500 bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    category: 'Customer Support',
    icon: '💬',
    tools: [
      { emoji: '💬', name: 'Zendesk (familiar)' },
      { emoji: '💬', name: 'Intercom (familiar)' },
    ],
    accentColor: 'border-purple-500 bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-700',
  },
  {
    category: 'Communication',
    icon: '📧',
    tools: [
      { emoji: '📧', name: 'Gmail' },
      { emoji: '🤝', name: 'Remote Collaboration Tools' },
    ],
    accentColor: 'border-orange-500 bg-orange-50',
    iconBg: 'bg-orange-100 text-orange-700',
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-600" />
            My Toolkit
            <span className="w-6 h-px bg-teal-600" />
          </div>
          <h2 className="section-heading text-[#0F172A] mb-3">Tools & Platforms</h2>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Tool groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolGroups.map((group, i) => (
            <div
              key={i}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-white rounded-2xl p-6 shadow-sm border-l-4 ${group.accentColor.split(' ')[0]} border border-gray-100 card-hover group`}
            >
              {/* Category header */}
              <div className={`inline-flex items-center gap-2 ${group.iconBg} rounded-xl px-3 py-2 mb-5`}>
                <span className="text-lg">{group.icon}</span>
                <span className="font-bold text-xs uppercase tracking-wider">{group.category}</span>
              </div>

              {/* Tool list */}
              <ul className="space-y-3">
                {group.tools.map((tool, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-gray-600 text-sm hover:text-gray-900 transition-colors"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg text-base border border-gray-100 flex-shrink-0">
                      {tool.emoji}
                    </span>
                    <span className="font-medium">{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10 animate-on-scroll">
          Always learning new tools — adaptability is part of the toolkit too. 🚀
        </p>
      </div>
    </section>
  );
}
