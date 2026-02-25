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
            <svg width="140" height="180" viewBox="0 0 140 180" className="drop-shadow-lg">
              <defs>
                <linearGradient id="beadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#404040', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="mysteryBeadGradient" cx="30%" cy="30%">
                  <stop offset="0%" style={{ stopColor: '#3a3a3a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
                </radialGradient>
              </defs>
              
              {/* Heart-shaped rosary beads */}
              {/* Top of heart */}
              <circle cx="50" cy="30" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="90" cy="30" r="4" fill="url(#beadGradient)" opacity="0.9" />
              
              {/* Left curve */}
              <circle cx="38" cy="22" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="28" cy="18" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="18" cy="20" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="12" cy="28" r="6" fill="url(#mysteryBeadGradient)" />
              <circle cx="10" cy="40" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="12" cy="52" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="18" cy="64" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="26" cy="76" r="6" fill="url(#mysteryBeadGradient)" />
              <circle cx="36" cy="86" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="48" cy="94" r="4" fill="url(#beadGradient)" opacity="0.9" />
              
              {/* Right curve */}
              <circle cx="102" cy="22" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="112" cy="18" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="122" cy="20" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="128" cy="28" r="6" fill="url(#mysteryBeadGradient)" />
              <circle cx="130" cy="40" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="128" cy="52" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="122" cy="64" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="114" cy="76" r="6" fill="url(#mysteryBeadGradient)" />
              <circle cx="104" cy="86" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="92" cy="94" r="4" fill="url(#beadGradient)" opacity="0.9" />
              
              {/* Bottom point of heart */}
              <circle cx="70" cy="100" r="6" fill="url(#mysteryBeadGradient)" />
              <circle cx="60" cy="98" r="4" fill="url(#beadGradient)" opacity="0.9" />
              <circle cx="80" cy="98" r="4" fill="url(#beadGradient)" opacity="0.9" />
              
              {/* Strand going down to cross */}
              <circle cx="70" cy="110" r="3.5" fill="url(#beadGradient)" opacity="0.85" />
              <circle cx="70" cy="120" r="3.5" fill="url(#beadGradient)" opacity="0.85" />
              <circle cx="70" cy="130" r="3.5" fill="url(#beadGradient)" opacity="0.85" />
              
              {/* Cross */}
              <g transform="translate(70, 155)">
                <rect x="-2" y="-18" width="4" height="36" fill="#2a2a2a" rx="1" />
                <rect x="-12" y="-8" width="24" height="4" fill="#2a2a2a" rx="1" />
              </g>
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
