'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Prayer Times', href: '#rosary' },
    { name: 'About', href: '#about' },
    { name: 'Get Involved', href: '#involved' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-xl shadow-sm fixed w-full top-0 z-50 border-b border-primary-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#home" className="flex items-center hover:opacity-90 transition-all duration-300 hover:scale-105">
            <Image 
              src="/Transparent logo (use).png" 
              alt="Mercy for Life - St. Thomas the Apostle" 
              width={280} 
              height={80}
              className="h-16 w-auto drop-shadow-sm"
              priority
              style={{ imageRendering: '-webkit-optimize-contrast' }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-5 py-2.5 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/80 rounded-full font-medium transition-all duration-200 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-primary-100/50">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-5 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50/80 rounded-full font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
