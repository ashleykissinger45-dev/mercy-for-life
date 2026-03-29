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
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-neutral-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image 
              src="/Transparent logo (use).png" 
              alt="Mercy for Life" 
              width={240} 
              height={68}
              className="h-14 w-auto"
              priority
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                  isActive(item.href)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-150 ${
                  isActive(item.href)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
