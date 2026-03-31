'use client';

import { BookOpen, Heart, Shield, Cross, Church, Baby } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Prayers() {
  const categories = [
    {
      title: 'The Rosary',
      icon: Cross,
      prayers: [
        {
          name: 'How to Pray the Rosary',
          description: 'A complete guide to praying the Holy Rosary with all mysteries.',
          link: 'https://www.usccb.org/how-to-pray-the-rosary',
        },
        {
          name: 'Mysteries of the Rosary',
          description: 'Joyful, Sorrowful, Glorious, and Luminous Mysteries.',
          link: 'https://www.rosarycenter.org/homepage-2/rosary/the-mysteries-of-the-rosary/',
        },
      ],
    },
    {
      title: 'Pro-Life Prayers',
      icon: Baby,
      prayers: [
        {
          name: 'Priests for Life Call to Prayer',
          description: 'A daily prayer committing to speak and act on behalf of the unborn, by Fr. Frank Pavone.',
          link: 'https://www.priestsforlife.org/novenas/novena.aspx?id=10',
        },
        {
          name: 'Prayer to End Abortion',
          description: 'A prayer asking God to protect the unborn and change hearts.',
          link: 'https://www.usccb.org/prayers/prayer-end-abortion',
        },
        {
          name: 'Prayer for Life',
          description: 'USCCB prayer for the protection of all human life from conception to natural death.',
          link: 'https://www.usccb.org/prayers/prayer-life',
        },
        {
          name: 'Spiritual Adoption Prayer',
          description: 'A nine-month prayer commitment to pray for an unborn child in danger of abortion.',
          link: 'https://www.spiritualadoption.org',
        },
      ],
    },
    {
      title: 'Prayers of Protection',
      icon: Shield,
      prayers: [
        {
          name: 'Prayer to St. Michael the Archangel',
          description: 'A powerful prayer of protection against evil and spiritual warfare.',
          link: 'https://www.usccb.org/prayers/prayer-st-michael-archangel',
        },
        {
          name: 'Prayer to Our Lady of Guadalupe',
          description: 'Patroness of the unborn and of the Americas.',
          link: 'https://www.usccb.org/prayers/prayer-our-lady-guadalupe',
        },
      ],
    },
    {
      title: 'Daily Prayers',
      icon: Church,
      prayers: [
        {
          name: 'Morning Offering',
          description: 'Consecrate your day to God each morning.',
          link: 'https://www.usccb.org/prayers/morning-offering',
        },
        {
          name: 'Act of Spiritual Communion',
          description: 'For when you cannot receive the Eucharist in person.',
          link: 'https://www.usccb.org/prayers/prayer-spiritual-communion',
        },
        {
          name: 'Divine Mercy Chaplet',
          description: 'Prayed on ordinary rosary beads, asking for God\'s mercy on the whole world.',
          link: 'https://www.thedivinemercy.org/message/devotions/pray-the-chaplet',
        },
      ],
    },
  ];

  return (
    <ScrollReveal>
      <section className="py-24 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">

          <div className="space-y-12">
            {categories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <div key={catIndex}>
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className="h-5 w-5 text-[#005999]" strokeWidth={1.5} />
                    <h2 className="font-serif text-xl md:text-2xl font-light text-neutral-900">
                      {category.title}
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.prayers.map((prayer, prayerIndex) => (
                      <a
                        key={prayerIndex}
                        href={prayer.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-xl shadow-sm border border-neutral-100/60 p-5 hover:shadow-md hover:border-neutral-200 transition-all duration-200"
                      >
                        <h3 className="font-semibold text-neutral-900 text-[15px] mb-1.5 group-hover:text-[#005999] transition-colors">
                          {prayer.name}
                        </h3>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                          {prayer.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[#005999] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          Open link &rarr;
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </ScrollReveal>
  );
}
