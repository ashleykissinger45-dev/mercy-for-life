'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/40 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-400/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="mb-10 flex justify-center animate-fade-in">
          <div className="relative">
            <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-xl">
              <defs>
                {/* Vibrant elegant red gradient */}
                <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Soft inner glow */}
                <radialGradient id="heartHighlight" cx="30%" cy="30%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.3 }} />
                  <stop offset="50%" style={{ stopColor: '#ef4444', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
                </radialGradient>
              </defs>
              
              {/* Heart shape */}
              <path
                d="M 90 145 C 90 145 25 105 25 70 C 25 50 40 40 55 40 C 70 40 85 55 90 65 C 95 55 110 40 125 40 C 140 40 155 50 155 70 C 155 105 90 145 90 145 Z"
                fill="url(#heartGradient)"
                className="drop-shadow-lg"
              />
              
              {/* Subtle highlight overlay */}
              <ellipse
                cx="75"
                cy="70"
                rx="35"
                ry="30"
                fill="url(#heartHighlight)"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-8 leading-tight drop-shadow-sm animate-fade-in-up stagger-1">
          Defending Life,
          <br />
          <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text">One Prayer at a Time</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
          Join Mercy for Life in peaceful prayer and advocacy for the protection of all human life from conception to natural death.
        </p>
        
        <div className="glass-effect max-w-2xl mx-auto rounded-2xl p-6 mb-12 shadow-lg animate-fade-in-up stagger-3">
          <p className="text-lg text-neutral-700 italic font-serif">
            "Before I formed you in the womb I knew you" - Jeremiah 1:5
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up stagger-3">
          <a href="#email-signup" className="btn-primary">
            Join Our Mission
          </a>
          <a href="#rosary" className="btn-secondary">
            Prayer Schedule
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
