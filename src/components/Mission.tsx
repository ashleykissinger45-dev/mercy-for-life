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
      <section className="py-20 bg-primary-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-3 tracking-wide">
              Our Mission
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Building a culture of life through prayer, education, and peaceful witness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-7 shadow-sm text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-5">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
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

          <div className="mt-10 bg-[#0A1628] rounded-xl p-10 text-white text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">Our Vision</h3>
            <p className="text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light">
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
