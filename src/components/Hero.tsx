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
            <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-2xl">
              <defs>
                {/* Modern bead gradient - sophisticated blue */}
                <radialGradient id="beadGrad" cx="35%" cy="35%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.9 }} />
                  <stop offset="60%" style={{ stopColor: '#5ba3d0', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                </radialGradient>
                
                {/* Cross gradient - elegant silver-blue */}
                <linearGradient id="crossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8fa3b8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#b8c5d3', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#8fa3b8', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Subtle shadow */}
                <filter id="softShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
                  <feOffset dx="0" dy="1" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.15"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Rosary beads forming heart shape */}
              {(() => {
                // Perfect heart curve coordinates - evenly distributed beads
                const heartBeads = [
                  // Top left curve
                  {x: 75, y: 55}, {x: 62, y: 48}, {x: 50, y: 48}, {x: 40, y: 53},
                  {x: 32, y: 62}, {x: 30, y: 73}, {x: 32, y: 85},
                  // Left side down
                  {x: 38, y: 97}, {x: 48, y: 108}, {x: 60, y: 118}, {x: 72, y: 127},
                  // Bottom point
                  {x: 84, y: 135}, {x: 90, y: 138},
                  // Right side up
                  {x: 96, y: 135}, {x: 108, y: 127}, {x: 120, y: 118}, {x: 132, y: 108},
                  // Top right curve
                  {x: 142, y: 97}, {x: 148, y: 85}, {x: 150, y: 73}, {x: 148, y: 62},
                  {x: 140, y: 53}, {x: 130, y: 48}, {x: 118, y: 48}, {x: 105, y: 55},
                  // Top center
                  {x: 90, y: 50}
                ];
                
                return heartBeads.map((bead, i) => (
                  <g key={i} filter="url(#softShadow)">
                    <circle cx={bead.x} cy={bead.y} r="5.5" fill="url(#beadGrad)" />
                    {/* Highlight */}
                    <circle cx={bead.x - 1.5} cy={bead.y - 1.5} r="2" fill="#ffffff" opacity="0.6" />
                  </g>
                ));
              })()}
              
              {/* Cross in center */}
              <g filter="url(#softShadow)">
                {/* Vertical beam */}
                <rect x="87" y="70" width="6" height="50" rx="3" fill="url(#crossGrad)" />
                {/* Horizontal beam */}
                <rect x="70" y="87" width="40" height="6" rx="3" fill="url(#crossGrad)" />
                
                {/* Highlights on cross */}
                <rect x="88" y="70" width="2" height="50" rx="1" fill="#ffffff" opacity="0.25" />
                <rect x="70" y="88" width="40" height="2" rx="1" fill="#ffffff" opacity="0.25" />
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
