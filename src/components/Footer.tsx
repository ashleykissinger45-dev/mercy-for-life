'use client';

import { Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image 
                src="/Transparent logo (use).png" 
                alt="Mercy for Life - St. Thomas the Apostle" 
                width={240} 
                height={70}
                className="h-14 w-auto opacity-95"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
              A pro-life ministry dedicated to defending the sanctity of human life 
              through prayer, peaceful witness, and compassionate action.
            </p>
            <p className="text-sm text-neutral-500 italic font-serif">
              "Before I formed you in the womb I knew you" - Jeremiah 1:5
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#rosary" className="link-underline hover:text-primary-400 transition-colors inline-block">
                  Prayer Schedule
                </a>
              </li>
              <li>
                <a href="#about" className="link-underline hover:text-primary-400 transition-colors inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#involved" className="link-underline hover:text-primary-400 transition-colors inline-block">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="#resources" className="link-underline hover:text-primary-400 transition-colors inline-block">
                  Resources
                </a>
              </li>
              <li>
                <a href="#contact" className="link-underline hover:text-primary-400 transition-colors inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold mb-5 text-lg">Connect</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <a
                  href="mailto:mercyforlife@staphx.org"
                  className="link-underline hover:text-primary-400 transition-colors text-sm inline-block"
                >
                  mercyforlife@staphx.org
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/stamercyforlife"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 p-3 rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/stamercyforlife"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm hover:text-primary-400 transition-colors inline-block"
              >
                Follow our Instagram!
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            © {currentYear} Mercy for Life. All rights reserved. | Affiliated with St. Thomas the Apostle Church
          </p>
        </div>
      </div>
    </footer>
  );
}
