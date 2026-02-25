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
            <svg width="200" height="220" viewBox="0 0 200 220" className="drop-shadow-2xl">
              <defs>
                {/* Sophisticated gradient for beads */}
                <radialGradient id="premiumBead" cx="35%" cy="35%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
                  <stop offset="40%" style={{ stopColor: '#5ba3d0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                </radialGradient>
                
                {/* Accent bead gradient */}
                <radialGradient id="accentBead" cx="35%" cy="35%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
                  <stop offset="40%" style={{ stopColor: '#87ceeb', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#4a9fd8', stopOpacity: 1 }} />
                </radialGradient>
                
                {/* Subtle glow filter */}
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Elegant shine effect */}
                <radialGradient id="shine" cx="30%" cy="30%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                </radialGradient>
              </defs>
              
              {/* Delicate connecting thread */}
              <path 
                d="M 85 45 Q 60 35 45 48 Q 30 60 32 80 Q 36 105 55 125 Q 75 145 100 158 Q 125 145 145 125 Q 164 105 168 80 Q 170 60 155 48 Q 140 35 115 45 Q 105 50 100 45 Q 95 50 85 45 M 100 158 L 100 195"
                stroke="#176fb9"
                strokeWidth="1.5"
                fill="none"
                opacity="0.15"
                strokeLinecap="round"
              />
              
              {/* Left side - perfectly symmetrical */}
              <g filter="url(#softGlow)">
                <circle cx="85" cy="45" r="6" fill="url(#premiumBead)" />
                <circle cx="85" cy="45" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="68" cy="40" r="6" fill="url(#premiumBead)" />
                <circle cx="68" cy="40" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="52" cy="42" r="6" fill="url(#premiumBead)" />
                <circle cx="52" cy="42" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="40" cy="52" r="8" fill="url(#accentBead)" />
                <circle cx="40" cy="52" r="3.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="33" cy="68" r="6" fill="url(#premiumBead)" />
                <circle cx="33" cy="68" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="32" cy="85" r="6" fill="url(#premiumBead)" />
                <circle cx="32" cy="85" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="38" cy="102" r="6" fill="url(#premiumBead)" />
                <circle cx="38" cy="102" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="50" cy="118" r="8" fill="url(#accentBead)" />
                <circle cx="50" cy="118" r="3.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="68" cy="132" r="6" fill="url(#premiumBead)" />
                <circle cx="68" cy="132" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="85" cy="145" r="6" fill="url(#premiumBead)" />
                <circle cx="85" cy="145" r="2.5" fill="url(#shine)" />
              </g>
              
              {/* Right side - mirror symmetry */}
              <g filter="url(#softGlow)">
                <circle cx="115" cy="45" r="6" fill="url(#premiumBead)" />
                <circle cx="115" cy="45" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="132" cy="40" r="6" fill="url(#premiumBead)" />
                <circle cx="132" cy="40" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="148" cy="42" r="6" fill="url(#premiumBead)" />
                <circle cx="148" cy="42" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="160" cy="52" r="8" fill="url(#accentBead)" />
                <circle cx="160" cy="52" r="3.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="167" cy="68" r="6" fill="url(#premiumBead)" />
                <circle cx="167" cy="68" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="168" cy="85" r="6" fill="url(#premiumBead)" />
                <circle cx="168" cy="85" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="162" cy="102" r="6" fill="url(#premiumBead)" />
                <circle cx="162" cy="102" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="150" cy="118" r="8" fill="url(#accentBead)" />
                <circle cx="150" cy="118" r="3.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="132" cy="132" r="6" fill="url(#premiumBead)" />
                <circle cx="132" cy="132" r="2.5" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="115" cy="145" r="6" fill="url(#premiumBead)" />
                <circle cx="115" cy="145" r="2.5" fill="url(#shine)" />
              </g>
              
              {/* Top center */}
              <g filter="url(#softGlow)">
                <circle cx="100" cy="45" r="6" fill="url(#premiumBead)" />
                <circle cx="100" cy="45" r="2.5" fill="url(#shine)" />
              </g>
              
              {/* Bottom point */}
              <g filter="url(#softGlow)">
                <circle cx="100" cy="158" r="8" fill="url(#accentBead)" />
                <circle cx="100" cy="158" r="3.5" fill="url(#shine)" />
              </g>
              
              {/* Strand beads */}
              <g filter="url(#softGlow)">
                <circle cx="100" cy="172" r="5" fill="url(#premiumBead)" />
                <circle cx="100" cy="172" r="2" fill="url(#shine)" />
              </g>
              
              <g filter="url(#softGlow)">
                <circle cx="100" cy="184" r="5" fill="url(#premiumBead)" />
                <circle cx="100" cy="184" r="2" fill="url(#shine)" />
              </g>
              
              {/* Modern minimalist cross */}
              <defs>
                <linearGradient id="crossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#5ba3d0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <g transform="translate(100, 205)" filter="url(#softGlow)">
                <rect x="-1.5" y="-18" width="3" height="36" fill="url(#crossGradient)" rx="1.5" />
                <rect x="-12" y="-7.5" width="24" height="3" fill="url(#crossGradient)" rx="1.5" />
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
