'use client';

import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function RosarySchedule() {
  const locations = [
    {
      name: 'Camelback Family Planning',
      address: '4141 N 32nd Street, Phoenix, AZ',
      mapsQuery: '4141+N+32nd+Street+Phoenix+AZ',
      times: [
        { day: 'Wednesday', time: '9:30am' },
        { day: 'Thursday', time: '8:30am' },
        { day: 'Saturday', time: '8:00am' },
      ],
      parkingUrl:
        'https://www.google.com/maps/dir/?api=1&destination=3214+E+Indian+School+Rd+Phoenix+AZ+85018',
    },
    {
      name: 'Planned Parenthood',
      address: '4715 N 15th Street, Phoenix, AZ',
      mapsQuery: '4715+N+15th+Street+Phoenix+AZ',
      times: [{ day: 'Friday', time: '9:30am' }],
      parkingUrl: null,
    },
  ];

  return (
    <ScrollReveal>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl overflow-hidden"
              >
                {/* Card header */}
                <div className="bg-neutral-900 px-6 py-5">
                  <h3 className="font-semibold text-white text-lg">{location.name}</h3>
                  <p className="text-neutral-400 text-sm mt-1 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {location.address}
                  </p>
                </div>

                {/* Times */}
                <div className="px-6 py-5 space-y-3 border-b border-neutral-200">
                  <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" /> Prayer Times
                  </p>
                  {location.times.map((time, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0"
                    >
                      <span className="text-sm font-medium text-neutral-700">{time.day}</span>
                      <span className="text-sm font-semibold text-primary-500 flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {time.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="px-6 py-4 flex flex-col gap-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-neutral-900 hover:bg-neutral-700 text-white text-sm font-semibold py-2.5 rounded transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                  {location.parkingUrl && (
                    <a
                      href={location.parkingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full border border-neutral-700 hover:bg-neutral-100 text-neutral-700 text-sm font-semibold py-2.5 rounded transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      Parking
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4">
            <p className="text-sm text-neutral-600">
              <span className="font-semibold text-neutral-800">What to Bring:</span> Please bring your rosary and a peaceful spirit. We pray quietly and respectfully. All ages welcome.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
