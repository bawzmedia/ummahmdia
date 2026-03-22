import Link from 'next/link';
import { SERVICES } from '@/lib/services';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <p className="font-cinzel text-white text-base tracking-widest uppercase mb-3">
              Ummah Media
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              South Edmonton's first Muslim-owned media company.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.route}
                    className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#' },
                { label: 'Work', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@ummahmedia.ca"
                  className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                >
                  hello@ummahmedia.ca
                </a>
              </li>
              <li>
                <a
                  href="tel:+17805550100"
                  className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
                >
                  (780) 555-0100
                </a>
              </li>
              <li>
                <span className="text-neutral-400 text-sm">South Edmonton, AB</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-4">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Facebook', href: '#' },
                { label: 'YouTube', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-neutral-500 text-xs hover:text-white transition-colors duration-200"
                >
                  {label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            &copy; 2026 Ummah Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-neutral-500 text-xs hover:text-white transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-neutral-500 text-xs hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
