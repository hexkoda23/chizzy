import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import content from '../data/content.json';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Supporting Case Study', path: '/supporting-case-study' },
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
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-ink/10' : 'border-transparent'
      }`}
    >
      <div className="page-width h-[72px] flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl tracking-tight hover:text-clay transition-colors">
          {content.profile.firstName}
          <span className="text-clay">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1 text-sm font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-clay after:transition-all after:duration-300 ${
                  isActive ? 'text-ink after:w-full' : 'text-ink-soft hover:text-ink after:w-0 hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5">
            Contact Me
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mobile-menu-enter page-width pb-8 pt-2">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `py-3.5 font-display text-2xl border-b border-ink/10 ${isActive ? 'text-clay' : 'text-ink'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-primary mt-6">
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
