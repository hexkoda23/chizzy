import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Content Samples', path: '/content-samples' },
  { label: 'Campaign Ideas', path: '/campaign-ideas' },
  { label: 'Analytics Insights', path: '/analytics-insights' },
  { label: 'Tools', path: '/tools' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3'
          : 'bg-[#0F172A] py-5' // Use solid bg instead of transparent to account for non-hero pages
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-teal-600/30 group-hover:bg-teal-500 transition-colors">
            CC
          </div>
          <span className="hidden sm:block text-white font-semibold text-sm tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
            Chiziterem
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-teal-400 bg-teal-600/10'
                    : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/30"
          >
            Contact Me
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-white"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mobile-menu-enter bg-[#0F172A]/98 backdrop-blur-md border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-teal-400 bg-teal-600/10'
                      : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 text-center bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
