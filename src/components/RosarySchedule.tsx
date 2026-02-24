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
    },
    {
      name: 'Planned Parenthood',
      address: '4715 N 15th Street, Phoenix, AZ',
      mapsQuery: '4715+N+15th+Street+Phoenix+AZ',
      times: [
        { day: 'Friday', time: '9:30am' },
      ],
    },
  ];

  return (
    <ScrollReveal>
    <section id="rosary" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Join Us in Prayer</h2>
          <p className="section-subtitle">
            Please join us for our weekly pro-life rosaries. All are welcome to stand peacefully in prayer for the unborn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-primary-100"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="font-semibold">Prayer Times:</span>
                </div>
                
                {location.times.map((time, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200"
                  >
                    <span className="font-semibold text-gray-800">{time.day}</span>
                    <div className="flex items-center text-primary-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="font-bold">{time.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Navigation className="h-5 w-5 mr-2" />
                Get Directions
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gold-50 border-l-4 border-gold-500 rounded-r-lg p-6">
          <p className="text-gray-700 text-lg">
            <strong className="text-gray-900">What to Bring:</strong> Please bring your rosary and a peaceful spirit. We pray quietly and respectfully. All ages welcome.
          </p>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
