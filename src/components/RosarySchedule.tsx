'use client';

import { MapPin, Calendar, Clock, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export type RosaryTime = { day: string; time: string };

export type SanityRosaryLocation = {
  _id: string;
  name: string;
  address: string;
  mapsQuery: string;
  times: RosaryTime[];
  parkingUrl?: string | null;
  parkingNote?: string | null;
};

type Props = {
  locations: SanityRosaryLocation[];
  whatToBring?: string;
};

export default function RosarySchedule({ locations, whatToBring }: Props) {

  return (
    <ScrollReveal>
      <section className="pt-24 pb-12 relative" style={{ backgroundImage: 'url(/pic2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/[0.93]" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-2">
              Weekly Rosaries Outside Abortion Facilities
            </h2>
            <p className="text-neutral-500 text-sm max-w-xl mx-auto">
              Every week we gather peacefully outside local abortion facilities to pray the Rosary for mothers, their babies, and those working inside.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-neutral-100/60 overflow-hidden flex flex-col"
              >
                <div className="px-8 py-7 flex-1">
                  <h3 className="font-semibold text-neutral-900 text-lg mb-1">{location.name}</h3>
                  <p className="text-neutral-400 text-sm flex items-center gap-1.5 mb-6">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    {location.address}
                  </p>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2 mb-3">
                    <Calendar className="h-3.5 w-3.5" /> Prayer Times
                  </p>
                  <div className="flex flex-col gap-0">
                    {location.times.map((time, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2.5 border-b border-neutral-100 last:border-0">
                        <span className="text-base text-neutral-700">{time.day}</span>
                        <span className="text-base font-semibold text-neutral-900 flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-neutral-400" />
                          {time.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  {location.parkingNote && (
                    <p className="text-sm text-neutral-500 leading-snug mt-4">
                      <span className="font-semibold text-neutral-700">Note: </span>{location.parkingNote}
                    </p>
                  )}
                </div>

                {/* Bottom: action buttons */}
                <div className="flex gap-3 px-8 py-5 border-t border-neutral-100">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-[#005999] hover:bg-[#004C82] text-white text-sm font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                  {location.parkingUrl && (
                    <a
                      href={location.parkingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 flex-1 text-neutral-600 hover:text-neutral-900 text-sm font-medium py-3 px-4 rounded-md border border-neutral-200 hover:border-neutral-300 transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      Parking
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-xl shadow-sm border border-neutral-100/60 px-6 py-5">
            <p className="text-sm text-neutral-500">
              <span className="font-semibold text-neutral-700">What to bring: </span>
              {whatToBring || 'Please bring your rosary and a peaceful spirit. We pray quietly and respectfully. All ages welcome.'}
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
