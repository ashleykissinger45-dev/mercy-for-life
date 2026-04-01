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
      <section className="py-28 relative overflow-hidden" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.97] via-white/[0.93] to-white/[0.97]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-8 bg-[#005999]/30" />
              <p className="text-[10.5px] font-semibold tracking-[0.3em] uppercase text-[#005999]/70">What We Stand For</p>
              <div className="h-px w-8 bg-[#005999]/30" />
            </div>
            <h2 className="font-serif text-3xl md:text-[2.75rem] font-light text-neutral-900 leading-tight">
              Our Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group text-center bg-white rounded-2xl shadow-sm border border-neutral-100 p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#005999]/[0.08] mb-5 group-hover:bg-[#005999]/[0.15] transition-colors">
                    <Icon className="h-5 w-5 text-[#005999]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2 text-[14.5px] tracking-tight">{value.title}</h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 relative overflow-hidden bg-[#005999] rounded-2xl p-10 md:p-14 text-center shadow-xl">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="relative">
              <span className="font-serif text-5xl text-white/20 leading-none block mb-4">†</span>
              <h3 className="font-serif text-2xl md:text-[1.85rem] font-light text-white mb-5">Our Vision</h3>
              <p className="text-white/75 max-w-2xl mx-auto leading-relaxed text-[15px]">
                Mercy for Life envisions a world where every human life is cherished and protected.
                Through the power of prayer, peaceful witness, and compassionate outreach, we strive
                to transform hearts and minds, building a culture that welcomes life at every stage.
                United with St. Thomas the Apostle Church, we stand as beacons of hope and defenders
                of the most vulnerable among us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
