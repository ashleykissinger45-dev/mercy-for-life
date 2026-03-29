'use client';

import { Church, Users, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const highlights = [
  {
    icon: Church,
    title: 'Parish Affiliation',
    description:
      'Proudly affiliated with St. Thomas the Apostle Church, we draw strength from our Catholic faith and community.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description:
      'Welcoming volunteers of all ages who share our commitment to protecting life through prayer and peaceful witness.',
  },
  {
    icon: BookOpen,
    title: 'Education & Advocacy',
    description:
      'Promoting pro-life education and supporting those in need through compassionate outreach and resources.',
  },
];

export default function About() {
  return (
    <ScrollReveal>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — text */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 mb-6 tracking-tight">
                About Mercy for Life
              </h2>
              <div className="space-y-5 text-neutral-600 leading-relaxed">
                <p>
                  Mercy for Life is a pro-life ministry affiliated with{' '}
                  <strong className="text-neutral-900 font-semibold">St. Thomas the Apostle Church</strong> in Phoenix, Arizona.
                  We are a community of faithful Catholics and friends united in our commitment to defend
                  and celebrate the gift of human life.
                </p>
                <p>
                  Through peaceful prayer vigils, we gather weekly outside facilities that perform
                  abortions, offering our rosaries as a spiritual witness to the sanctity of life.
                  We pray for the conversion of hearts, for mothers facing difficult decisions,
                  and for an end to abortion.
                </p>
                <p>
                  Our ministry is grounded in love, compassion, and hope. We believe that every
                  prayer offered, every rosary prayed, and every peaceful presence makes a difference
                  in building a culture of life.
                </p>
              </div>
            </div>

            {/* Right — feature cards */}
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4 p-6 bg-white rounded-xl border border-neutral-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1 text-[15px]">{title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
