import { useState } from 'react';

const contactDetails = [
  {
    icon: '📧',
    label: 'Email',
    value: 'ihuomachibuokem@gmail.com',
    href: 'mailto:ihuomachibuokem@gmail.com',
    id: 'contact-email',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+234 9067948713',
    href: 'tel:+2349067948713',
    id: 'contact-phone',
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'chibuokem-chizterem',
    href: 'https://www.linkedin.com/in/chibuokem-chizterem',
    id: 'contact-linkedin',
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: null,
    id: 'contact-location',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — non-functional as requested
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-px bg-teal-400" />
            Get In Touch
            <span className="w-6 h-px bg-teal-400" />
          </div>
          <h2 className="section-heading text-white mb-3">Let's Work Together</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Open to content, communications, and operations roles — remote or Lagos-based.
          </p>
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Contact details */}
          <div className="animate-on-scroll space-y-6">
            <h3 className="text-white font-bold text-2xl mb-6">Reach Out Directly</h3>

            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const content = (
                  <div
                    key={detail.id}
                    id={detail.id}
                    className={`navy-card rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 ${detail.href ? 'hover:border-teal-600/50 hover:-translate-y-0.5 cursor-pointer' : ''}`}
                  >
                    <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{detail.label}</p>
                      <p className="text-white font-medium">{detail.value}</p>
                    </div>
                    {detail.href && (
                      <div className="ml-auto text-teal-400 opacity-60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                );

                if (!detail.href) return content;

                return (
                  <a
                    key={detail.id}
                    href={detail.href}
                    target={detail.external ? '_blank' : undefined}
                    rel={detail.external ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* LinkedIn CTA */}
            <div className="pt-4">
              <p className="text-gray-400 text-sm mb-3">Prefer a quick chat?</p>
              <a
                href="https://www.linkedin.com/in/chibuokem-chizterem"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-cta"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold transition-colors"
              >
                Reach out on LinkedIn →
              </a>
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <div className="navy-card rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

              {submitted && (
                <div className="mb-6 bg-teal-600/20 border border-teal-600/40 text-teal-400 rounded-xl p-4 text-sm font-medium">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email-input" className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email-input"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/25 hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
