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
            <svg width="160" height="200" viewBox="0 0 160 200" className="drop-shadow-2xl">
              <defs>
                <linearGradient id="beadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#2ea3f2', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="mysteryBeadGradient" cx="30%" cy="30%">
                  <stop offset="0%" style={{ stopColor: '#ff6b6f', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#e21f25', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#b81519', stopOpacity: 1 }} />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Connecting string/thread through beads */}
              <path 
                d="M 55 35 Q 35 25 25 35 Q 15 45 18 60 Q 22 80 35 95 Q 50 110 80 125 Q 110 110 125 95 Q 138 80 142 60 Q 145 45 135 35 Q 125 25 105 35 Q 90 40 80 35 Q 70 40 55 35 M 80 125 L 80 170"
                stroke="#176fb9"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              
              {/* Left side of heart - evenly spaced */}
              <circle cx="55" cy="35" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="40" cy="30" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="28" cy="32" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="20" cy="40" r="7" fill="url(#mysteryBeadGradient)" filter="url(#glow)" />
              <circle cx="16" cy="52" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="18" cy="65" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="24" cy="78" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="33" cy="90" r="7" fill="url(#mysteryBeadGradient)" filter="url(#glow)" />
              <circle cx="45" cy="100" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="60" cy="110" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              
              {/* Right side of heart - evenly spaced */}
              <circle cx="105" cy="35" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="120" cy="30" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="132" cy="32" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="140" cy="40" r="7" fill="url(#mysteryBeadGradient)" filter="url(#glow)" />
              <circle cx="144" cy="52" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="142" cy="65" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="136" cy="78" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="127" cy="90" r="7" fill="url(#mysteryBeadGradient)" filter="url(#glow)" />
              <circle cx="115" cy="100" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="100" cy="110" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              
              {/* Top center of heart */}
              <circle cx="80" cy="35" r="5" fill="url(#beadGradient)" filter="url(#glow)" />
              
              {/* Bottom point */}
              <circle cx="80" cy="125" r="7" fill="url(#mysteryBeadGradient)" filter="url(#glow)" />
              
              {/* Strand beads going down */}
              <circle cx="80" cy="140" r="4.5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="80" cy="152" r="4.5" fill="url(#beadGradient)" filter="url(#glow)" />
              <circle cx="80" cy="164" r="4.5" fill="url(#beadGradient)" filter="url(#glow)" />
              
              {/* Cross with gradient */}
              <defs>
                <linearGradient id="crossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#e21f25', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#b81519', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <g transform="translate(80, 185)" filter="url(#glow)">
                <rect x="-2.5" y="-20" width="5" height="40" fill="url(#crossGradient)" rx="1.5" />
                <rect x="-14" y="-8" width="28" height="5" fill="url(#crossGradient)" rx="1.5" />
                {/* Center medallion on cross */}
                <circle cx="0" cy="-3" r="4" fill="url(#mysteryBeadGradient)" />
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
