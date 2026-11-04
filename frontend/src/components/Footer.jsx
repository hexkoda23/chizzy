import { Link } from 'react-router-dom';
import content from '../data/content.json';

const { profile, contact, footer } = content;

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-paper/10">
      <div className="page-width py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <Link to="/" className="font-display text-3xl tracking-tight hover:text-clay-light transition-colors">
            {profile.firstName} {profile.lastName}
          </Link>
          <p className="mt-2 text-sm text-paper/60">{footer.tagline}</p>
        </div>

        <div className="md:text-right">
          <div className="flex md:justify-end items-center gap-6 mb-3">
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="text-sm font-medium hover:text-clay-light transition-colors"
            >
              LinkedIn
            </a>
            <a href={`mailto:${contact.email}`} id="footer-email" className="text-sm font-medium hover:text-clay-light transition-colors">
              Email
            </a>
          </div>
          <p className="text-sm text-paper/60">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
