'use client';

import { Target, Users, Heart, Church } from 'lucide-react';

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
    <section id="mission" className="py-20 bg-gradient-to-br from-primary-50 via-white to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            Building a culture of life through prayer, education, and peaceful witness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-10 border border-primary-100">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Vision
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
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
