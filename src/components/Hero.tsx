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
            <svg width="280" height="300" viewBox="0 0 280 300" className="drop-shadow-2xl" style={{ filter: 'drop-shadow(0 8px 32px rgba(23, 111, 185, 0.12))' }}>
              <defs>
                {/* Premium gradient for main beads */}
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#2d8cd4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Glossy highlight overlay */}
                <radialGradient id="gloss" cx="30%" cy="25%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
                  <stop offset="40%" style={{ stopColor: '#ffffff', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                </radialGradient>
                
                {/* Accent beads with warmer tone */}
                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3d9ed8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#5eb3e4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3d9ed8', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Premium shadow */}
                <filter id="premiumShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
                  <feOffset dx="0" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.15"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Connecting thread with gradient */}
                <linearGradient id="threadGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#176fb9', stopOpacity: 0.15 }} />
                  <stop offset="50%" style={{ stopColor: '#176fb9', stopOpacity: 0.25 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 0.15 }} />
                </linearGradient>
              </defs>
              
              {/* Elegant connecting thread through beads */}
              <path 
                d="M 125 65 Q 95 52 72 68 Q 48 85 50 112 Q 55 148 82 176 Q 112 205 140 225 Q 168 205 198 176 Q 225 148 230 112 Q 232 85 208 68 Q 185 52 155 65 Q 143 72 140 65 Q 137 72 125 65 M 140 225 L 140 270"
                stroke="url(#threadGrad)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Helper function to create bead with shadow and highlight */}
              {(() => {
                const createBead = (cx: number, cy: number, size: number, isAccent: boolean = false) => (
                  <g filter="url(#premiumShadow)">
                    {/* Main bead */}
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={size} 
                      fill={isAccent ? "url(#accentGradient)" : "url(#mainGradient)"} 
                    />
                    {/* Glossy highlight */}
                    <circle 
                      cx={cx - size * 0.25} 
                      cy={cy - size * 0.25} 
                      r={size * 0.55} 
                      fill="url(#gloss)" 
                    />
                    {/* Inner shadow for depth */}
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={size} 
                      fill="none" 
                      stroke="#ffffff" 
                      strokeWidth="0.5" 
                      opacity="0.2" 
                    />
                  </g>
                );
                
                const beads: Array<{ x: number; y: number; size: number; accent?: boolean }> = [
                  // Left curve of heart
                  { x: 125, y: 65, size: 9 },
                  { x: 103, y: 58, size: 9 },
                  { x: 83, y: 62, size: 9 },
                  { x: 66, y: 72, size: 11, accent: true },
                  { x: 54, y: 88, size: 9 },
                  { x: 49, y: 106, size: 9 },
                  { x: 50, y: 125, size: 9 },
                  { x: 58, y: 144, size: 11, accent: true },
                  { x: 72, y: 162, size: 9 },
                  { x: 90, y: 178, size: 9 },
                  { x: 110, y: 195, size: 9 },
                  
                  // Right curve of heart
                  { x: 155, y: 65, size: 9 },
                  { x: 177, y: 58, size: 9 },
                  { x: 197, y: 62, size: 9 },
                  { x: 214, y: 72, size: 11, accent: true },
                  { x: 226, y: 88, size: 9 },
                  { x: 231, y: 106, size: 9 },
                  { x: 230, y: 125, size: 9 },
                  { x: 222, y: 144, size: 11, accent: true },
                  { x: 208, y: 162, size: 9 },
                  { x: 190, y: 178, size: 9 },
                  { x: 170, y: 195, size: 9 },
                  
                  // Top center
                  { x: 140, y: 65, size: 9 },
                  
                  // Bottom point
                  { x: 140, y: 225, size: 11, accent: true },
                  
                  // Strand beads
                  { x: 140, y: 243, size: 8 },
                  { x: 140, y: 258, size: 8 },
                ];
                
                return beads.map((bead, i) => 
                  <g key={i}>{createBead(bead.x, bead.y, bead.size, bead.accent)}</g>
                );
              })()}
              
              {/* Ultra-modern cross with refined details */}
              <defs>
                <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#2d8cd4', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2d8cd4', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              <g transform="translate(140, 285)" filter="url(#premiumShadow)">
                {/* Cross base with rounded edges */}
                <rect x="-2.5" y="-24" width="5" height="48" fill="url(#crossGrad)" rx="2.5" />
                <rect x="-18" y="-10.5" width="36" height="5" fill="url(#crossGrad)" rx="2.5" />
                
                {/* Highlight edges */}
                <rect x="-2" y="-24" width="2" height="48" fill="#ffffff" opacity="0.25" rx="1.5" />
                <rect x="-18" y="-10" width="36" height="2" fill="#ffffff" opacity="0.25" rx="1.5" />
                
                {/* Center accent */}
                <circle cx="0" cy="-5.5" r="3.5" fill="url(#accentGradient)" />
                <circle cx="0" cy="-5.5" r="1.5" fill="url(#gloss)" />
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
