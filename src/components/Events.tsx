'use client';

import { Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';

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
              <div className={upcomingEvents.length === 1 ? 'max-w-[620px] mx-auto w-full' : 'grid md:grid-cols-2 gap-6'}>
                {upcomingEvents.map((event) => (
                  <div key={event._id} className="bg-white rounded-2xl shadow-md border border-neutral-100/60 overflow-hidden">
                    <div className="bg-[#005999] px-8 py-5 text-center">
                      <p className="text-white/70 text-[10px] font-bold tracking-[0.25em] uppercase mb-1">Upcoming</p>
                      <p className="text-white text-xl font-semibold">{event.date}</p>
                    </div>
                    <div className="px-8 py-8 text-center">
                      <h3 className="font-serif text-2xl font-light text-neutral-900 mb-5">{event.title}</h3>
                      {(event.time || event.location) && (
                        <div className={`flex flex-col gap-2 mb-7 ${upcomingEvents.length === 1 ? 'items-center' : 'text-left'}`}>
                          {event.time && (
                            <span className="flex items-center gap-2 text-sm text-neutral-600">
                              <Clock className="h-4 w-4 text-[#005999] flex-shrink-0" />
                              {event.time}
                            </span>
                          )}
                          {event.location && (
                            <span className={`flex gap-2 text-sm text-neutral-600 ${upcomingEvents.length === 1 ? 'items-center text-center' : 'items-start'}`}>
                              <MapPin className={`h-4 w-4 text-[#005999] flex-shrink-0 ${upcomingEvents.length !== 1 ? 'mt-[2px]' : ''}`} />
                              {event.location}
                            </span>
                          )}
                        </div>
                      )}
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
              <div className="flex flex-col gap-6">
                {previousEvents.map((event) => (
                  <div key={event._id} className="bg-white rounded-xl shadow-sm border border-neutral-100/60 overflow-hidden">
                    <div className="px-8 py-7">
                      <h3 className="font-semibold text-neutral-900 text-lg mb-4">{event.title}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
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
                      {event.description && (
                        <p className="text-sm text-neutral-500 leading-relaxed">
                          {Array.isArray(event.description) ? event.description.join(' ') : event.description}
                        </p>
                      )}
                    </div>
                    {event.link && (
                      <div className="px-8 py-5 border-t border-neutral-100">
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#005999] hover:text-[#004C82] transition-colors"
                        >
                          {event.linkText || 'Learn More'}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    )}
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
