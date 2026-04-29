import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const highlights = [
  {
    title: 'About Me',
    description: 'Learn more about my background in Industrial Physics and communications.',
    path: '/about',
    icon: '👤',
  },
  {
    title: 'Case Studies',
    description: 'Real work and real impact across government and tech sectors.',
    path: '/case-studies',
    icon: '💼',
  },
  {
    title: 'Supporting Case Study',
    description: 'Operations & Communication Coordination in institutional and client projects.',
    path: '/supporting-case-study',
    icon: '📊',
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Quick Highlights Section to keep the landing page well defined but short */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-3">Explore My Portfolio</h2>
            <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <Link 
                to={item.path} 
                key={i}
                className={`animate-on-scroll animate-on-scroll-delay-${i + 1} bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-teal-400 hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 text-teal-600 text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  View <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
