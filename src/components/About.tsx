'use client';

import { Church, Users, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Mercy for Life
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Mercy for Life is a pro-life ministry affiliated with{' '}
                <strong className="text-primary-600">St. Thomas the Apostle Church</strong> in Phoenix, Arizona. 
                We are a community of faithful Catholics and friends united in our commitment to defend 
                and celebrate the gift of human life.
              </p>
              <p>
                Through peaceful prayer vigils, we gather weekly outside facilities that perform 
                abortions, offering our rosaries as a spiritual witness to the sanctity of life. 
                We pray for the conversion of hearts, for mothers facing difficult decisions, 
                and for an end to abortion.
              </p>
              <p>
                Our ministry is grounded in love, compassion, and hope. We believe that every 
                prayer offered, every rosary prayed, and every peaceful presence makes a difference 
                in building a culture of life.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg border border-primary-100">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                  <Church className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Parish Affiliation
                  </h3>
                  <p className="text-gray-600">
                    Proudly affiliated with St. Thomas the Apostle Church, we draw strength 
                    from our Catholic faith and community.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-8 shadow-lg border border-gold-100">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 p-3 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Community Driven
                  </h3>
                  <p className="text-gray-600">
                    Welcoming volunteers of all ages who share our commitment to protecting 
                    life through prayer and peaceful witness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg border border-primary-100">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 p-3 rounded-lg flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Education & Advocacy
                  </h3>
                  <p className="text-gray-600">
                    Promoting pro-life education and supporting those in need through 
                    compassionate outreach and resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
