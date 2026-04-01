'use client';

import { Calendar, Clock, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';
import { MapPin, Clock as ClockIcon } from 'lucide-react';

export type SanityEvent = {
  _id: string;
  title: string;
  status: 'upcoming' | 'previous';
  date: string;
  time?: string;
  location?: string;
  description?: string[];
  details?: string[];
  link?: string;
  linkText?: string;
};

type Props = {
  upcomingEvents: SanityEvent[];
  previousEvents: SanityEvent[];
};

// LEGACY FALLBACK — replaced by Sanity data passed from page
const _upcomingEvents = [
  {
    title: 'Good Friday Rosary',
    date: 'April 3, 2026',
    time: '11 AM',
    location: 'Planned Parenthood, 5771 W. Eugie Ave, Glendale 85304',
    description: [
      'Pray for one hour at Planned Parenthood where babies are brought to die.',
      'Join Bishop Emeritus Thomas J. Olmsted and hundreds of pro-lifers to pray for women about to have an abortion and those working in the industry.',
      '\u201cCome follow me.\u201d — Matthew 4:19',
    ],
    details: [
      'Park on public streets',
      'Bring water and umbrellas for shade',
    ],
  },
];

const _previousEvents = [
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

export default function Events({ upcomingEvents, previousEvents }: Props) {
  return (
    <ScrollReveal>
      <section className="py-24 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative space-y-20">
          {/* Upcoming Events */}
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-10">Upcoming Events</h2>
            {upcomingEvents.length === 0 ? (
              <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-100/60 px-8 py-12">
                <p className="text-neutral-400 text-sm">No upcoming events at this time. Check back soon!</p>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto space-y-8">
                {upcomingEvents.map((event) => (
                  <div key={event._id} className="bg-white rounded-2xl shadow-md border border-neutral-100/60 overflow-hidden">
                    <div className="bg-[#005999] px-8 py-5 text-center">
                      <p className="text-white/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-1">Upcoming</p>
                      <p className="text-white text-xl font-semibold">{event.date}</p>
                    </div>
                    <div className="px-8 py-8 text-center">
                      <h3 className="font-serif text-2xl font-light text-neutral-900 mb-5">{event.title}</h3>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-7">
                        {event.time && (
                          <span className="flex items-center gap-2 text-sm text-neutral-600">
                            <Clock className="h-4 w-4 text-[#005999] flex-shrink-0" />
                            {event.time}
                          </span>
                        )}
                        {event.location && (
                          <span className="flex items-center gap-2 text-sm text-neutral-600">
                            <MapPin className="h-4 w-4 text-[#005999] flex-shrink-0" />
                            {event.location}
                          </span>
                        )}
                      </div>
                      {event.description && event.description.length > 0 && (
                        <div className="space-y-3 mb-7 max-w-md mx-auto">
                          {event.description.map((line, i) => (
                            <p key={i} className={`text-sm leading-relaxed ${
                              i === event.description!.length - 1
                                ? 'text-[#005999] font-medium italic'
                                : 'text-neutral-600'
                            }`}>{line}</p>
                          ))}
                        </div>
                      )}
                      {event.details && event.details.length > 0 && (
                        <div className="inline-flex flex-col gap-1.5 bg-neutral-50 border border-neutral-100 rounded-lg px-5 py-3 text-xs text-neutral-500 mb-2">
                          {event.details.map((d, i) => (
                            <span key={i} className="flex items-center gap-2"><span className="text-[#005999]">·</span>{d}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Previous Events */}
          {previousEvents.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-8 text-center">Previous Events</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {previousEvents.map((event) => (
                  <div key={event._id} className="bg-white rounded-xl shadow-sm border border-neutral-100/60 overflow-hidden">
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
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                          <MapPin className="h-4 w-4 text-neutral-400 flex-shrink-0" />
                          {event.location}
                        </div>
                      )}
                    </div>
                    <div className="px-6 py-5 border-t border-neutral-100">
                      {event.description && (
                        <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                          {Array.isArray(event.description) ? event.description.join(' ') : event.description}
                        </p>
                      )}
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005999] hover:text-[#004C82] transition-colors"
                        >
                          {event.linkText || 'Learn More'}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
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
