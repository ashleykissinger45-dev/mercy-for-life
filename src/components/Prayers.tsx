'use client';

import { BookOpen, Shield, Cross, Church, Baby } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Prayers() {
  return (
    <ScrollReveal>
      <section className="pt-12 pb-24 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-2">
              Prayers We Use in Our Ministry
            </h2>
            <p className="text-neutral-500 text-sm max-w-xl mx-auto">
              Prayers used by our group that you can read and pray along with from anywhere.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100/60 p-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-4">
              Daily Prayer to End Abortion
            </h2>
            <p className="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
              A daily prayer committing to speak and act on behalf of the unborn, by Fr. Frank Pavone.
            </p>
            <a
              href="https://www.priestsforlife.org/novenas/novena.aspx?id=10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#005999] hover:bg-[#004C82] text-white text-sm font-medium px-7 py-3 rounded-md transition-colors shadow"
            >
              Read the Prayer
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
