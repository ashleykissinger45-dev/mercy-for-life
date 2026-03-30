'use client';

import { Target, Users, Heart, Church } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Mission() {
  const values = [
    {
      icon: Heart,
      title: 'Sanctity of Life',
      description: 'We believe every human life is sacred from conception to natural death.',
    },
    {
      icon: Church,
      title: 'Faith-Centered',
      description: 'Rooted in Catholic teaching and guided by prayer, scripture, and the sacraments.',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Supporting mothers, families, and all those facing difficult decisions.',
    },
    {
      icon: Target,
      title: 'Peaceful Advocacy',
      description: 'Witnessing to the truth through peaceful prayer and compassionate action.',
    },
  ];

  return (
    <ScrollReveal>
      <section className="py-24 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-neutral-400 mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-[2.5rem] font-light text-neutral-900 leading-tight">
              Our Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl shadow-sm border border-neutral-100/60 p-6">
                  <Icon className="h-6 w-6 text-[#005999] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-neutral-900 mb-2 text-[15px]">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-xl p-10 md:p-12 text-center shadow-sm border border-neutral-100/80">
            <h3 className="font-serif text-2xl md:text-[1.75rem] font-light text-neutral-900 mb-4">Our Vision</h3>
            <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Mercy for Life envisions a world where every human life is cherished and protected.
              Through the power of prayer, peaceful witness, and compassionate outreach, we strive
              to transform hearts and minds, building a culture that welcomes life at every stage.
              United with St. Thomas the Apostle Church, we stand as beacons of hope and defenders
              of the most vulnerable among us.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
