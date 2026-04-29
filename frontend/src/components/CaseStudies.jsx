import { useState } from 'react';

const caseStudies = [
  {
    title: 'Social Media Performance Analysis and Insight-Driven Recommendations',
    company: 'Social Media Analysis Project',
    duration: '2024',
    tags: ['Social Media', 'Data Analysis', 'Strategy'],
    tagColors: ['bg-teal-100 text-teal-700', 'bg-blue-100 text-blue-700', 'bg-purple-100 text-purple-700'],
    accentColor: 'bg-teal-500',
    overview: 'This project focused on analyzing social media performance to identify gaps in engagement, content effectiveness, and audience response patterns.',
    problem: "The existing content lacked clear performance direction. While posts were being published, there was limited understanding of what was working, what wasn't, and why engagement levels varied.",
    approach: 'I reviewed post performance across key metrics such as engagement, reach, and content type effectiveness. I looked for patterns in audience behavior, content structure, and messaging.',
    execution: [
      'Analyzed high- and low-performing posts',
      'Identified patterns in engagement and audience interaction',
      'Evaluated content formats, captions, and timing',
      'Developed clear insights based on observed trends',
      'Provided recommendations for improving content direction',
    ],
    outcome: 'The analysis provided a clearer understanding of what drives engagement and highlighted areas for improvement, enabling more intentional and data-informed content decisions.',
    keyInsight: 'Content performance improves when decisions are guided by patterns and audience behavior, not assumptions.',
    link: 'https://docs.google.com/document/d/1q3ckGGcbOjtYnLDLGh-lEnfgP95k33rMtI-IJ8E_xo4/edit?usp=drivesdk',
  },
  {
    title: 'Structured Content Planning for Consistency and Engagement',
    company: 'Content Calendar Project',
    duration: '2024',
    tags: ['Content Strategy', 'Planning', 'Social Media'],
    tagColors: ['bg-orange-100 text-orange-700', 'bg-green-100 text-green-700', 'bg-teal-100 text-teal-700'],
    accentColor: 'bg-orange-500',
    overview: 'A content planning project designed to improve posting consistency and create a more intentional content flow.',
    problem: 'The brand lacked a structured posting system, resulting in inconsistent content delivery and weak audience engagement.',
    approach: 'I developed a content structure based on clear themes and posting frequency, ensuring each piece of content served a defined purpose.',
    execution: [
      'Created a 4-week content calendar',
      'Defined content pillars and themes',
      'Structured post types (educational, engaging, promotional)',
      'Aligned messaging with audience needs and brand tone',
    ],
    outcome: 'The calendar introduced consistency, improved content organization, and created a clearer direction for audience engagement.',
    keyInsight: 'Consistency is not just about posting regularly, it\'s about having a clear and repeatable content structure.',
    link: 'https://docs.google.com/document/d/1qHhe3ManKNpSNU4-fo6eUY5pKZCC0iypx6wn9WzTfQk/edit?usp=drivesdk',
  },
  {
    title: 'Content Strategy Development and Execution for Brand Growth',
    company: 'Content Strategy + Calendar Project',
    duration: '2024',
    tags: ['Content Strategy', 'Brand Growth', 'Planning'],
    tagColors: ['bg-purple-100 text-purple-700', 'bg-pink-100 text-pink-700', 'bg-green-100 text-green-700'],
    accentColor: 'bg-purple-500',
    overview: 'This project combined content strategy development with execution planning to create a cohesive and effective content system.',
    problem: 'The brand had no defined content direction, making it difficult to maintain consistency, build identity, or connect meaningfully with its audience.',
    approach: 'I built a 90day strategy rooted in audience understanding, brand positioning, and content purpose. The goal was to create awareness, clarity, structure, and direction.',
    execution: [
      'Defined target audience and content goals',
      'Developed content pillars aligned with brand messaging',
      'Created a structured content calendar',
      'Designed content themes and messaging direction',
      'Ensured alignment between strategy and execution',
    ],
    outcome: 'The project provided a clear roadmap for content creation, improving consistency, brand voice, and overall communication effectiveness.',
    keyInsight: 'Strong content is not created randomly,it is built on clear strategy, structure, and intention.',
  },
  {
    title: 'Campaign Concept Development and Script Writing',
    company: 'Campaign Theme & Script Writing',
    duration: '2024',
    tags: ['Campaign', 'Script Writing', 'Creative'],
    tagColors: ['bg-rose-100 text-rose-700', 'bg-amber-100 text-amber-700', 'bg-cyan-100 text-cyan-700'],
    accentColor: 'bg-rose-500',
    overview: 'A campaign-focused project centered on developing a strong theme and crafting a script that communicates the message clearly and effectively.',
    problem: 'There was a need for a cohesive campaign direction that could capture attention and communicate the intended message in a compelling way.',
    approach: 'I focused on building a clear narrative, ensuring the message was both relatable and engaging while aligning with the campaign objective.',
    execution: [
      'Developed campaign theme and core message',
      'Structured the narrative flow of the script',
      'Focused on clarity, tone, and emotional connection',
      'Ensured alignment between message and audience',
    ],
    outcome: 'The final script delivered a clear and engaging message, providing a strong foundation for campaign execution.',
    keyInsight: 'A strong campaign is built on clarity of message, when people understand it, they connect with it.',
    link: 'https://docs.google.com/document/d/1rBGX7u7qJycJVFKn_I-rWxIUZJUvfuAebssO0-AWmsM/edit?usp=drivesdk',
    additionalLink: {
      label: 'Additional short script writing',
      url: 'https://docs.google.com/document/d/1PNnDMwYLR2TfsLBWkhCxSDcxQWUP8p21/edit?usp=drivesdk&ouid=114589323661130766226&rtpof=true&sd=true',
    },
  },
  {
    title: 'Creative Writing and Storytelling',
    company: 'Writing Samples (Stories)',
    duration: '2024',
    tags: ['Creative Writing', 'Storytelling', 'Content'],
    tagColors: ['bg-pink-100 text-pink-700', 'bg-rose-100 text-rose-700', 'bg-purple-100 text-purple-700'],
    accentColor: 'bg-pink-500',
    overview: 'A collection of written pieces exploring storytelling through clear expression, emotional depth, and structured narrative flow.',
    problem: 'The objective was to create stories that are relatable, thought-provoking, and emotionally engaging.',
    approach: 'I focused on clarity of expression, pacing, and emotional honesty, ensuring each piece communicates its message effectively.',
    execution: [
      'Developed story concepts and themes',
      'Structured narratives for flow and readability',
      'Focused on tone, voice, and emotional impact',
    ],
    outcome: 'The stories reflect a consistent writing style centered on clarity, relatability, and meaningful expression.',
    keyInsight: 'Effective storytelling is not about complexity, it\'s about clarity and emotional truth.',
    link: 'https://docs.google.com/document/d/1JDGJDYzl4UQBzzNWlq8HjVU3V-mqdneOtY0fnMusAnM/edit?usp=drivesdk',
    additionalLink: {
      label: 'View Project',
      url: 'https://docs.google.com/document/d/1XDYa1t_9QARGW3iwV591NOnQNUIbLUue/edit?usp=drivesdk&ouid=114589323661130766226&rtpof=true&sd=true',
    },
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);

  const activeCase = caseStudies[activeTab];
  const hasDetails = activeCase.overview !== undefined;

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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {caseStudies.map((cs, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cs.company.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Colored accent bar */}
          <div className={`h-1.5 ${activeCase.accentColor}`} />

          <div className="p-8">
            {/* Company & duration */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">{activeCase.company}</p>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {activeCase.duration}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-[#0F172A] font-bold text-2xl mb-6 leading-snug">
              {activeCase.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {activeCase.tags.map((tag, j) => (
                <span
                  key={j}
                  className={`${activeCase.tagColors[j]} text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Detailed content for case studies with overview */}
            {hasDetails ? (
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#0F172A] font-semibold text-sm uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-gray-600 leading-relaxed">{activeCase.overview}</p>
                </div>
                
                <div>
                  <h4 className="text-[#0F172A] font-semibold text-sm uppercase tracking-wider mb-2">The Problem</h4>
                  <p className="text-gray-600 leading-relaxed">{activeCase.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-[#0F172A] font-semibold text-sm uppercase tracking-wider mb-2">Approach</h4>
                  <p className="text-gray-600 leading-relaxed">{activeCase.approach}</p>
                </div>
                
                <div>
                  <h4 className="text-[#0F172A] font-semibold text-sm uppercase tracking-wider mb-2">Execution</h4>
                  <ul className="space-y-2">
                    {activeCase.execution.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[#0F172A] font-semibold text-sm uppercase tracking-wider mb-2">Outcome</h4>
                  <p className="text-gray-600 leading-relaxed">{activeCase.outcome}</p>
                </div>
                
                <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                  <h4 className="text-teal-700 font-semibold text-sm uppercase tracking-wider mb-2">Key Insight</h4>
                  <p className="text-teal-800 leading-relaxed">{activeCase.keyInsight}</p>
                </div>

                {activeCase.link && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href={activeCase.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      View Full Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    {activeCase.additionalLink && (
                      <a
                        href={activeCase.additionalLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
                      >
                        {activeCase.additionalLink.label}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}

                {/* Images for case studies with screenshots - displayed as link */}
                {activeCase.images && activeCase.images.length > 0 && (
                  <div className="mt-6">
                    <a
                      href={activeCase.images[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      View Project Screenshots
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              /* Bullets for case studies without detailed format */
              <ul className="space-y-2.5">
                {activeCase.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
