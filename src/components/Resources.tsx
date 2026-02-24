'use client';

import { ExternalLink, Heart, Baby, Users, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Resources() {
  const resources = [
    {
      category: 'Pregnancy Support',
      icon: Baby,
      items: [
        {
          name: 'A Woman\'s Place Medical Clinic',
          description: 'Free pregnancy tests, ultrasounds, and life-affirming support',
          link: 'https://www.awpcaz.org',
        },
        {
          name: 'Birth Choice of Arizona',
          description: 'Compassionate pro-life pregnancy support and resources',
          link: 'https://www.birthchoiceaz.com',
        },
        {
          name: 'Maggie\'s Place',
          description: 'Residential support for pregnant and parenting women',
          link: 'https://www.maggiesplace.org',
        },
      ],
    },
    {
      category: 'Crisis Support',
      icon: Phone,
      items: [
        {
          name: 'Option Line',
          description: '24/7 Pro-Life Pregnancy Helpline: 1-800-712-HELP (4357)',
          link: 'tel:+18007124357',
        },
        {
          name: 'Heartbeat International',
          description: '24/7 Pregnancy Helpline: 1-800-395-HELP (4357)',
          link: 'tel:+18003954357',
        },
        {
          name: 'National Suicide Prevention Lifeline',
          description: '24/7 Crisis Support: 988',
          link: 'tel:988',
        },
      ],
    },
    {
      category: 'Pro-Life Organizations',
      icon: Heart,
      items: [
        {
          name: 'Arizona Right to Life',
          description: 'State pro-life advocacy and education',
          link: 'https://www.azrtl.org',
        },
        {
          name: '40 Days for Life',
          description: 'International pro-life prayer campaign',
          link: 'https://www.40daysforlife.com',
        },
      ],
    },
    {
      category: 'Catholic Resources',
      icon: Users,
      items: [
        {
          name: 'U.S. Conference of Catholic Bishops',
          description: 'Catholic teaching on life issues',
          link: 'https://www.usccb.org/prolife',
        },
      ],
    },
  ];

  return (
    <ScrollReveal>
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Helpful Resources</h2>
          <p className="section-subtitle">
            Organizations and services supporting life, families, and those in need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg border border-primary-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-lg p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-3" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gold-50 border-l-4 border-gold-500 rounded-r-lg p-6">
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">Need Help?</strong> If you or someone you know is facing an unexpected pregnancy 
            or needs support, please don't hesitate to reach out to these organizations. You are not alone.
          </p>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
