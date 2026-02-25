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
            <svg width="240" height="260" viewBox="0 0 240 260" className="drop-shadow-2xl">
              <defs>
                {/* Premium pearl bead with realistic lighting */}
                <radialGradient id="pearlBead" cx="30%" cy="30%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="30%" style={{ stopColor: '#f8f9fa', stopOpacity: 1 }} />
                  <stop offset="60%" style={{ stopColor: '#e3e8ed', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#c5d3e0', stopOpacity: 1 }} />
                </radialGradient>
                
                {/* Soft shadow for depth */}
                <radialGradient id="beadShadow" cx="50%" cy="50%">
                  <stop offset="70%" style={{ stopColor: '#176fb9', stopOpacity: 0 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 0.15 }} />
                </radialGradient>
                
                {/* Highlight shine */}
                <radialGradient id="highlight" cx="28%" cy="28%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.95 }} />
                  <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                </radialGradient>
                
                {/* Premium accent bead */}
                <radialGradient id="accentPearl" cx="30%" cy="30%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="35%" style={{ stopColor: '#d4e4f0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#a8c5db', stopOpacity: 1 }} />
                </radialGradient>
                
                {/* Modern clean filter */}
                <filter id="premiumGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                  <feOffset dx="0" dy="1" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.2"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Metallic cross gradient */}
                <linearGradient id="metalCross" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#b8c5d3', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#8fa3b8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#a8b9ca', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Delicate thread */}
                <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#c5d3e0', stopOpacity: 0.3 }} />
                  <stop offset="50%" style={{ stopColor: '#a8b9ca', stopOpacity: 0.5 }} />
                  <stop offset="100%" style={{ stopColor: '#c5d3e0', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              
              {/* Refined connecting thread */}
              <path 
                d="M 105 55 Q 78 45 60 58 Q 42 72 44 95 Q 48 125 70 148 Q 95 172 120 188 Q 145 172 170 148 Q 192 125 196 95 Q 198 72 180 58 Q 162 45 135 55 Q 125 60 120 55 Q 115 60 105 55 M 120 188 L 120 230"
                stroke="url(#threadGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Bead component with shadow + pearl + highlight */}
              {[
                // Left side
                {cx: 105, cy: 55, r: 7.5},
                {cx: 85, cy: 50, r: 7.5},
                {cx: 68, cy: 53, r: 7.5},
                {cx: 54, cy: 64, r: 9.5, accent: true},
                {cx: 45, cy: 80, r: 7.5},
                {cx: 43, cy: 98, r: 7.5},
                {cx: 48, cy: 116, r: 7.5},
                {cx: 60, cy: 133, r: 9.5, accent: true},
                {cx: 78, cy: 148, r: 7.5},
                {cx: 98, cy: 162, r: 7.5},
                
                // Right side
                {cx: 135, cy: 55, r: 7.5},
                {cx: 155, cy: 50, r: 7.5},
                {cx: 172, cy: 53, r: 7.5},
                {cx: 186, cy: 64, r: 9.5, accent: true},
                {cx: 195, cy: 80, r: 7.5},
                {cx: 197, cy: 98, r: 7.5},
                {cx: 192, cy: 116, r: 7.5},
                {cx: 180, cy: 133, r: 9.5, accent: true},
                {cx: 162, cy: 148, r: 7.5},
                {cx: 142, cy: 162, r: 7.5},
                
                // Top and bottom
                {cx: 120, cy: 55, r: 7.5},
                {cx: 120, cy: 188, r: 9.5, accent: true},
                
                // Strand
                {cx: 120, cy: 204, r: 6.5},
                {cx: 120, cy: 218, r: 6.5},
              ].map((bead, i) => (
                <g key={i} filter="url(#premiumGlow)">
                  {/* Shadow layer */}
                  <circle cx={bead.cx} cy={bead.cy + 0.5} r={bead.r + 0.5} fill="url(#beadShadow)" opacity="0.3" />
                  {/* Pearl base */}
                  <circle cx={bead.cx} cy={bead.cy} r={bead.r} fill={bead.accent ? "url(#accentPearl)" : "url(#pearlBead)"} />
                  {/* Highlight */}
                  <circle cx={bead.cx - bead.r * 0.15} cy={bead.cy - bead.r * 0.15} r={bead.r * 0.5} fill="url(#highlight)" />
                </g>
              ))}
              
              {/* Ultra-modern cross with depth */}
              <g transform="translate(120, 245)" filter="url(#premiumGlow)">
                {/* Shadow */}
                <rect x="-2" y="-21" width="4.5" height="42" fill="#000000" opacity="0.08" rx="2" />
                <rect x="-15" y="-9.5" width="30.5" height="4.5" fill="#000000" opacity="0.08" rx="2" />
                
                {/* Main cross */}
                <rect x="-2" y="-20" width="4" height="40" fill="url(#metalCross)" rx="2" />
                <rect x="-15" y="-9" width="30" height="4" fill="url(#metalCross)" rx="2" />
                
                {/* Highlights on cross */}
                <rect x="-1.5" y="-20" width="1.5" height="40" fill="#ffffff" opacity="0.3" rx="1" />
                <rect x="-15" y="-8.5" width="30" height="1.5" fill="#ffffff" opacity="0.3" rx="1" />
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
