'use client';

import { HandHeart, Share2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

export default function GetInvolved() {
  const ways = [
    {
      icon: HandHeart,
      title: 'Join Us in Prayer',
      description:
        'Attend our weekly rosary vigils outside local abortion facilities. Your peaceful presence makes a powerful difference.',
      action: 'See Rosary Schedule',
      href: '/prayers',
    },
    {
      icon: Share2,
      title: 'Spread Awareness',
      description:
        'Share our mission on social media and invite others to join our prayer vigils to help build a culture of life.',
      action: 'Follow on Instagram',
      href: 'https://www.instagram.com/stamercyforlife',
    },
  ];

  return (
    <ScrollReveal>
      <section className="pt-0 pb-24 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <p className="text-center text-[11px] font-medium tracking-[0.25em] uppercase text-neutral-400 mb-8">Other Ways to Help</p>
          <div className="grid md:grid-cols-2 gap-6">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <div
                  key={index}
                  className="p-7 bg-white rounded-xl shadow-sm border border-neutral-100/60 flex flex-col"
                >
                  <Icon className="h-5 w-5 text-[#005999] mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-neutral-900 text-base mb-1.5">{way.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">{way.description}</p>
                  <Link
                    href={way.href}
                    className="inline-flex items-center justify-center border border-[#005999] text-[#005999] hover:bg-[#005999] hover:text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
                  >
                    {way.action}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
