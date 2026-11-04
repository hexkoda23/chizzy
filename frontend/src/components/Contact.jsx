import { useState } from 'react';
import content from '../data/content.json';
import { ArrowRight, ArrowUpRight } from './ui';

const { contact, profile } = content;

const contactDetails = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, id: 'contact-email' },
  { label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}`, id: 'contact-phone' },
  { label: 'LinkedIn', value: contact.linkedinLabel, href: contact.linkedinUrl, id: 'contact-linkedin', external: true },
  { label: 'Location', value: profile.location, href: null, id: 'contact-location' },
];

const fieldClass =
  'w-full bg-transparent border-b border-paper/25 py-3 text-paper placeholder-paper/40 focus:outline-none focus:border-clay-light transition-colors';
const labelClass = 'block text-xs font-semibold uppercase tracking-[0.14em] text-paper/60 mb-1';

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

  // The site has no mail server, so this hands the message to the visitor's email app.
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="page-width pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="animate-on-scroll mb-14 sm:mb-20">
          <p className="eyebrow-on-dark mb-5">{contact.eyebrow}</p>
          <h1 className="display-heading">{contact.heading}</h1>
          <p className="mt-6 text-lg sm:text-xl text-paper/70 max-w-2xl">{contact.subheading}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT: Contact details */}
          <div className="animate-on-scroll border-b border-paper/10">
            {contactDetails.map((detail) => {
              const row = (
                <>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-paper/60 mb-1.5">{detail.label}</span>
                    <span className="block font-display font-light text-xl sm:text-2xl break-words">{detail.value}</span>
                  </span>
                  {detail.href && <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-paper/50 transition-colors group-hover:text-clay-light" />}
                </>
              );
              const rowClass = 'group flex items-center justify-between gap-4 py-6 border-t border-paper/10';

              if (!detail.href) {
                return (
                  <div key={detail.id} id={detail.id} className={rowClass}>
                    {row}
                  </div>
                );
              }

              return (
                <a
                  key={detail.id}
                  id={detail.id}
                  href={detail.href}
                  target={detail.external ? '_blank' : undefined}
                  rel={detail.external ? 'noopener noreferrer' : undefined}
                  className={`${rowClass} hover:text-clay-light transition-colors`}
                >
                  {row}
                </a>
              );
            })}
          </div>

          {/* RIGHT: Contact form */}
          <div className="animate-on-scroll animate-on-scroll-delay-2 bg-ink-raised rounded-2xl p-7 sm:p-10">
            <h2 className="font-display font-light text-3xl mb-8">Send a Message</h2>

            {submitted && (
              <p className="mb-8 rounded-xl border border-clay-light/40 p-4 text-sm leading-relaxed text-paper/85" role="status">
                Your email app should now be open with this message ready to send. If it didn't open, write directly to{' '}
                <a href={`mailto:${contact.email}`} className="underline underline-offset-2">
                  {contact.email}
                </a>
                .
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>Name</label>
                  <input id="contact-name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-email-input" className={labelClass}>Email</label>
                  <input id="contact-email-input" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                <input id="contact-subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="What's this about?" className={fieldClass} />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea id="contact-message" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Tell me about the opportunity or project..." className={`${fieldClass} resize-none`} />
              </div>

              <button type="submit" id="contact-submit" className="btn-light w-full">
                Send Message
                <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
