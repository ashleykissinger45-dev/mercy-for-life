'use client';

import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

export default function Events() {
  const events = [
    {
      title: '2026 AZ March For Life',
      date: 'February 28th',
      time: 'Starting at 10:00am',
      location: 'Wesley Bolin Memorial Plaza',
      description:
        'Thank you to everyone who joined us at the 2026 March for Life! To see photos from the event, view our Instagram.',
      link: 'https://www.instagram.com/stamercyforlife',
      linkText: 'View Our Instagram',
    },
    {
      title: '40 Days For Life 2026 Spring Campaign',
      date: 'February 18th – March 29th',
      time: '',
      location: '4141 N. 32nd Street',
      description:
        'For the first time the Forty Days for Life Spring Campaign will include Camelback Family Planning — the abortion facility right in our back yard.',
      link: 'http://www.40daysforlife.com/eastphoenix',
      linkText: 'Sign Up Here',
    },
  ];

  return (
    <ScrollReveal>
      <section className="py-24 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-neutral-100/60 overflow-hidden">
                <div className="px-6 py-5 border-b border-neutral-100">
                  <h3 className="font-semibold text-neutral-900 text-base leading-snug">{event.title}</h3>
                </div>

                <div className="px-6 py-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Calendar className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                    {event.date}
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <Clock className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                      {event.time}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                    {event.location}
                  </div>
                </div>

                <div className="px-6 py-5 border-t border-neutral-100">
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">{event.description}</p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005999] hover:text-[#004C82] transition-colors"
                  >
                    {event.linkText}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-sm mb-5">Stay updated on all our events.</p>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center bg-[#005999] text-white text-sm font-medium px-7 py-3 rounded-md hover:bg-[#004C82] transition-colors"
            >
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
