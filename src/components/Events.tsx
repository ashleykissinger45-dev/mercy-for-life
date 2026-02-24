'use client';

import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: '2026 AZ March For Life',
      date: 'February 28th',
      time: 'Starting at 10:00am',
      location: 'Wesley Bolin Memorial Plaza',
      description: 'Come join thousands of Pro-Lifers from Arizona for the 2026 March for Life.',
      note: 'Our group will be meeting up on site, at the March, due to complications we will not have a bus leaving from the Parish. We will have more details soon on where exactly to meet if you would like to march with our parish group.',
      link: 'http://www.chooselifeaz.org/azmarchforlife',
      linkText: 'More Information'
    },
    {
      title: '40 Days For Life 2026 Spring Campaign at Camelback Family Planning',
      date: 'February 18th - March 29th',
      time: '',
      location: '4141 N. 32nd Street',
      description: 'For the first time the Forty Days for Life Spring Campaign will include Camelback Family Planning. This is the Abortion Mill right in our back yard at 4141 N. 32nd Street.',
      link: 'http://www.40daysforlife.com/eastphoenix',
      linkText: 'Sign Up Here'
    },
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gold-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join us for special gatherings, educational opportunities, and community events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-800">Date</p>
                    <p className="text-neutral-600">{event.date}</p>
                  </div>
                </div>
                
                {event.time && (
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-800">Time</p>
                      <p className="text-neutral-600">{event.time}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-800">Location</p>
                    <p className="text-neutral-600">{event.location}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-neutral-700 leading-relaxed mb-4">{event.description}</p>
                  {event.note && (
                    <div className="bg-primary-50 border-l-4 border-primary-600 p-4 mb-4 rounded">
                      <p className="text-sm text-neutral-700"><strong>Note:</strong> {event.note}</p>
                    </div>
                  )}
                  <a 
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    {event.linkText}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Stay updated on all our events by joining our email list
          </p>
          <a href="#email-signup" className="btn-primary">
            Subscribe for Updates
          </a>
        </div>
      </div>
    </section>
  );
}
