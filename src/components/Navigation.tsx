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
    { name: 'Prayer Schedule', href: '/prayer' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-[#FFFBF5] shadow-sm fixed w-full top-0 z-50 h-[68px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-8">

          {/* Logo — left */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Transparent logo (use).png"
              alt="Mercy for Life"
              width={200}
              height={56}
              className="h-11 w-auto"
              priority
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </Link>

          {/* Nav links — center */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-1.5 text-[13.5px] font-medium tracking-wide rounded transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'text-neutral-900 bg-neutral-100'
                    : 'text-neutral-500 hover:text-neutral-900'
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
              className={`text-[13.5px] font-semibold tracking-wide px-5 py-2 rounded border transition-colors duration-150 ${
                pathname === '/contact'
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'border-neutral-800 text-neutral-800 hover:bg-neutral-900 hover:text-white'
              }`}
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
        <div className="md:hidden absolute top-[68px] inset-x-0 bg-[#FFFBF5] shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2.5 text-sm font-medium rounded transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'text-neutral-900 bg-neutral-100'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2.5 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

