'use client';

import { BookOpen, Heart, Shield, Cross, Church, Baby } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Prayers() {
  return (
    <ScrollReveal>
      <section className="py-24 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-xl mx-auto px-6 lg:px-8 relative">
          <div className="bg-white rounded-xl shadow-sm border border-neutral-100/60 p-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-4 flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-[#005999]" strokeWidth={1.5} />
              Priests for Life Call to Prayer
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
