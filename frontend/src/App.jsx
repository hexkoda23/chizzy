import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import SupportingCaseStudy from './components/SupportingCaseStudy';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    // Need a MutationObserver or a way to re-attach when DOM changes,
    // since pages render dynamically now.
    const setupObserver = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Unobserve once visible
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );
      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    let currentObserver = setupObserver();

    // Re-run when navigation happens
    const observer = new MutationObserver(() => {
      if (currentObserver) currentObserver.disconnect();
      currentObserver = setupObserver();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (currentObserver) currentObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-20"> {/* Added pt-20 to account for fixed navbar on new pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/supporting-case-study" element={<SupportingCaseStudy />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
