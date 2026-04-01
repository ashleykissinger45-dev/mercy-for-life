'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Rosaries', href: '/rosaries' },
    { name: 'Prayers', href: '/prayers' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 h-[76px] shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo — left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Transparent logo (use).png"
              alt="Mercy for Life"
              width={200}
              height={56}
              className="h-10 w-auto"
              priority
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </Link>

          {/* Nav links — center */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[12px] font-medium tracking-[0.06em] transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'text-[#005999]'
                    : 'text-neutral-400 hover:text-neutral-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA — right */}
          <div className="hidden md:flex flex-shrink-0">
            <Link
              href="/contact"
              className="text-[11.5px] font-bold tracking-[0.1em] uppercase px-6 py-2.5 rounded-md bg-[#005999] text-white hover:bg-[#004C82] transition-colors duration-150"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-[76px] inset-x-0 bg-white border-b border-neutral-100 shadow-lg">
          <div className="px-6 py-5 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2.5 text-[12px] font-medium tracking-[0.06em] rounded transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'text-[#005999] bg-[#005999]/5'
                    : 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block text-center px-3 py-2.5 text-[11.5px] font-bold tracking-[0.1em] uppercase bg-[#005999] text-white rounded-md hover:bg-[#004C82] transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

