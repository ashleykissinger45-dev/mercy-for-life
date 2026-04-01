'use client';

import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#005999]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <Image 
              src="/logo-footer.png" 
              alt="Mercy for Life" 
              width={200} 
              height={56}
              className="h-16 w-auto mb-5"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
            <p className="text-white/75 text-sm leading-relaxed">
              A pro-life ministry dedicated to defending the sanctity of human life 
              through prayer, peaceful witness, and compassionate action.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Prayers', href: '/prayers' },
                { label: 'About Us', href: '/about' },
                { label: 'Get Involved', href: '/get-involved' },
                { label: 'Events', href: '/events' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-5">Connect</h4>
            <div className="space-y-4">
              <a
                href="mailto:mercyforlife@staphx.org"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                mercyforlife@staphx.org
              </a>
              <a
                href="https://www.instagram.com/stamercyforlife"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
                </svg>
                @stamercyforlife
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Mercy for Life &middot; St. Thomas the Apostle Church
          </p>
          <p className="font-serif text-xs text-white/25 italic">"Before I formed you in the womb I knew you." — Jer. 1:5</p>
        </div>
      </div>
    </footer>
  );
}
