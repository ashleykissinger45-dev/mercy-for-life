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
          <div className="relative heartbeat-animation">
            <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-xl">
              <defs>
                {/* Sophisticated gradient */}
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#2d8cd4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Subtle inner glow */}
                <radialGradient id="innerGlow" cx="50%" cy="40%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                </radialGradient>
              </defs>
              
              {/* Clean, modern heart */}
              <path
                d="M 70 45
                   C 70 45, 60 30, 45 30
                   C 25 30, 20 45, 20 55
                   C 20 75, 70 110, 70 110
                   C 70 110, 120 75, 120 55
                   C 120 45, 115 30, 95 30
                   C 80 30, 70 45, 70 45 Z"
                fill="url(#heartGrad)"
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.95"
              />
              
              {/* Inner glow overlay */}
              <path
                d="M 70 45
                   C 70 45, 60 30, 45 30
                   C 25 30, 20 45, 20 55
                   C 20 75, 70 110, 70 110
                   C 70 110, 120 75, 120 55
                   C 120 45, 115 30, 95 30
                   C 80 30, 70 45, 70 45 Z"
                fill="url(#innerGlow)"
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
