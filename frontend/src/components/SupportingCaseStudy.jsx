export default function SupportingCaseStudy() {
  return (
    <section id="supporting-case-study" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-400" />
            Additional Work
            <span className="w-6 h-px bg-teal-400" />
          </div>
          <h2 className="section-heading text-white mb-3">Supporting Case Study</h2>
          <p className="text-gray-400 text-lg font-medium">Operations & Communication Coordination</p>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Supporting Case Study Card */}
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div className="h-1.5 bg-slate-500" />

          <div className="p-8">
            {/* Company & duration */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-1">Institutional & Client Projects</p>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2022 – 2026
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">Operations</span>
              <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Coordination</span>
              <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Communication</span>
            </div>

            {/* Content */}
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-gray-400">Contributed to coordination and communication systems that supported internal teams and external stakeholders, improving workflow clarity, alignment, and execution efficiency.</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Key Contributions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                    Supported cross-departmental coordination under senior leadership
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                    Facilitated joint initiatives that enhanced alignment between teams
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                    Maintained structured documentation systems for workflow continuity
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                    Managed remote client communication and proposal tracking
                  </li>
                </ul>
              </div>
              
              <div className="bg-teal-900/30 rounded-xl p-5 border border-teal-500/20">
                <h4 className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-2">Key Insight</h4>
                <p className="text-gray-300">Operational efficiency improves significantly when communication, documentation, and coordination are structured, not left informal or reactive.</p>
              </div>

              {/* Link to screenshots */}
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/4case/8d732395-2f3e-4797-86b5-3270d51a33fc.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
                >
                  View Screenshot 1
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="/4case/91a8ea59-2e16-4e68-9d2a-8e3e486817f8.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors"
                >
                  View Screenshot 2
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}