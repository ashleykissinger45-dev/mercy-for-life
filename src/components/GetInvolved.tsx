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
        'Attend our weekly rosary vigils. Your peaceful presence makes a powerful difference in defending life.',
      action: 'See Prayer Times',
      href: '/prayer',
    },
    {
      icon: Share2,
      title: 'Spread Awareness',
      description:
        'Share our mission on social media, invite friends to join our prayer vigils, and help build a culture of life.',
      action: 'Join Email List',
      href: '#email-signup',
    },
  ];

  return (
    <ScrollReveal>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-neutral-400 mb-3">
              Make a Difference
            </p>
            <h2 className="font-serif text-3xl md:text-[2.5rem] font-light text-neutral-900 leading-tight">
              Get Involved
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-lg border border-neutral-100"
                >
                  <Icon className="h-6 w-6 text-primary-600 mb-5" strokeWidth={1.5} />
                  <h3 className="font-semibold text-neutral-900 text-lg mb-2">{way.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">{way.description}</p>
                  <Link
                    href={way.href}
                    className="inline-flex items-center justify-center bg-[#0A1628] hover:bg-[#0d1e36] text-white text-sm font-medium px-6 py-2.5 rounded-md transition-colors"
                  >
                    {way.action}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="bg-neutral-50 rounded-lg px-10 py-10 text-center">
            <h3 className="font-serif text-xl font-light text-neutral-900 mb-3">Every Action Counts</h3>
            <p className="text-neutral-500 max-w-lg mx-auto text-sm leading-relaxed">
              Whether through prayer or spreading awareness, your participation
              helps build a culture of life and brings hope to those who need it most.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
