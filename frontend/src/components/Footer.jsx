export default function Footer() {
  return (
    <footer className="bg-[#060E1F] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-teal-600/20">
            CC
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/chibuokem-chizterem"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="text-gray-400 hover:text-teal-400 text-sm font-medium transition-colors"
            >
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <a
              href="mailto:ihuomachibuokem@gmail.com"
              id="footer-email"
              className="text-gray-400 hover:text-teal-400 text-sm font-medium transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2026 Chiziterem Chibuokem. All rights reserved.
          </p>

          {/* Tagline */}
          <p className="text-teal-600/60 text-xs font-medium tracking-widest uppercase">
            Built with clarity in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
