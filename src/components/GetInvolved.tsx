'use client';

import { HandHeart, Share2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function GetInvolved() {
  const ways = [
    {
      icon: HandHeart,
      title: 'Join Us in Prayer',
      description: 'Attend our weekly rosary vigils. Your peaceful presence makes a powerful difference in defending life.',
      action: 'See Prayer Times',
      href: '#rosary',
      color: 'primary',
    },
    {
      icon: Share2,
      title: 'Spread Awareness',
      description: 'Share our mission on social media, invite friends to join our prayer vigils, and help build a culture of life.',
      action: 'Join Email List',
      href: '#email-signup',
      color: 'primary',
    },
  ];

  return (
    <ScrollReveal>
      <section id="involved" className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Get Involved</h2>
          <p className="section-subtitle text-primary-100">
            There are many ways to support our mission and make a difference for life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ways.map((way, index) => {
            const Icon = way.icon;
            const bgColor = way.color === 'primary' ? 'bg-primary-600' : 'bg-gold-500';
            const hoverColor = way.color === 'primary' ? 'hover:bg-primary-700' : 'hover:bg-gold-600';
            const borderColor = way.color === 'primary' ? 'border-primary-100' : 'border-gold-100';
            const gradientFrom = way.color === 'primary' ? 'from-primary-50' : 'from-gold-50';

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${bgColor} rounded-full mb-6`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {way.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {way.description}
                </p>
                
                <a
                  href={way.href}
                  className={`inline-block ${bgColor} ${hoverColor} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  {way.action}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-10 text-center text-white shadow-2xl border border-white/30">
          <h3 className="text-3xl font-bold mb-4">
            Every Action Counts
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Whether through prayer or spreading awareness, your participation 
            helps build a culture of life and brings hope to those who need it most.
          </p>
        </div>
      </div>
      </section>
    </ScrollReveal>
  );
}
