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
      <section className="py-20 bg-primary-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {ways.map((way, index) => {
              const Icon = way.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-lg mb-2">{way.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">{way.description}</p>
                  <Link
                    href={way.href}
                    className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                  >
                    {way.action}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="bg-[#0A1628] rounded-xl px-10 py-8 text-center text-white">
            <h3 className="font-serif text-2xl font-light mb-3">Every Action Counts</h3>
            <p className="text-neutral-300 max-w-xl mx-auto text-sm leading-relaxed font-light">
              Whether through prayer or spreading awareness, your participation
              helps build a culture of life and brings hope to those who need it most.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
