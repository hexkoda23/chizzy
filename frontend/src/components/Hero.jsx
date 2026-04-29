import { Link } from 'react-router-dom';
import { CirclePhoto } from './ImageWithFallback';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] bg-[#0F172A] flex items-center overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Text */}
          <div className="flex-1 text-center md:text-left animate-on-scroll">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 bg-teal-600/15 border border-teal-600/30 text-teal-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
              Communications & Operations
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight mb-4">
              CHIZITEREM<br />
              <span className="text-gradient">CHIBUOKEM</span>
            </h1>

            <p className="text-teal-400/90 font-medium text-sm sm:text-base mb-4 leading-relaxed">
              Content &amp; Digital Communications&nbsp;&nbsp;·&nbsp;&nbsp;Operations &amp; Administrative Support&nbsp;&nbsp;·&nbsp;&nbsp;Industrial Physics B.Sc.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Turning complex ideas into clear, compelling content — and making operations run smoother while doing it.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-8">
              <Link
                to="/case-studies"
                className="btn-primary flex items-center justify-center gap-2"
                id="hero-view-work"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#"
                id="hero-download-cv"
                className="btn-outline flex items-center justify-center gap-2"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <span>📍</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          {/* RIGHT: Photo */}
          <div className="flex-shrink-0 flex justify-center animate-on-scroll animate-on-scroll-delay-2">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-teal-600/20 blur-2xl scale-110 animate-[float_3s_ease-in-out_infinite]" />

              <CirclePhoto
                src="/my-pics/photo1.jpg"
                alt="Chiziterem Chibuokem profile photo"
                sizeClass="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
              />

              {/* Open to Work badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-teal-600/40 whitespace-nowrap border border-teal-500">
                Open to Work ✦
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link to="/about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity cursor-pointer">
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </Link>
    </section>
  );
}
