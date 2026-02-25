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
            <svg width="280" height="280" viewBox="0 0 280 280" className="drop-shadow-2xl">
              <defs>
                {/* Premium gradient with depth */}
                <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#4a9fd8', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0d5a94', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Soft accent gradient */}
                <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#87ceeb', stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: '#5ba3d0', stopOpacity: 0.9 }} />
                </linearGradient>
                
                {/* Premium glow */}
                <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                  <feOffset dx="0" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Subtle inner glow */}
                <filter id="innerGlow">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur"/>
                  <feComposite in="blur" in2="SourceGraphic" operator="in" result="innerGlow"/>
                </filter>
                
                {/* Highlight gradient */}
                <linearGradient id="highlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              
              {/* Main icon container with soft background glow */}
              <g transform="translate(140, 140)">
                {/* Soft circular glow behind icon */}
                <circle cx="0" cy="0" r="85" fill="url(#accentGradient)" opacity="0.12" />
                <circle cx="0" cy="0" r="70" fill="url(#accentGradient)" opacity="0.08" />
                
                {/* Modern heart shape - clean geometric style */}
                <g filter="url(#iconGlow)">
                  <path
                    d="M 0 -35
                       C -25 -55, -50 -45, -50 -20
                       C -50 5, -25 30, 0 55
                       C 25 30, 50 5, 50 -20
                       C 50 -45, 25 -55, 0 -35
                       Z"
                    fill="url(#primaryGradient)"
                    strokeWidth="0"
                  />
                  
                  {/* Highlight overlay for 3D effect */}
                  <path
                    d="M -12 -42
                       C -30 -50, -45 -42, -45 -20
                       C -45 0, -25 20, -8 35
                       L -8 -42
                       Z"
                    fill="url(#highlight)"
                    opacity="0.5"
                  />
                </g>
                
                {/* Elegant cross integrated into design - subtle and refined */}
                <g filter="url(#iconGlow)">
                  {/* Vertical bar with soft gradient */}
                  <rect 
                    x="-2.5" 
                    y="-15" 
                    width="5" 
                    height="35" 
                    rx="2.5"
                    fill="#ffffff"
                    opacity="0.95"
                  />
                  
                  {/* Horizontal bar */}
                  <rect 
                    x="-15" 
                    y="-2.5" 
                    width="30" 
                    height="5" 
                    rx="2.5"
                    fill="#ffffff"
                    opacity="0.95"
                  />
                  
                  {/* Subtle center emphasis */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="4" 
                    fill="#ffffff"
                    opacity="0.85"
                  />
                </g>
                
                {/* Delicate prayer hands silhouette at bottom - minimalist */}
                <g transform="translate(0, 35)" opacity="0.25" filter="url(#innerGlow)">
                  <path
                    d="M -8 0 L -8 -12 C -8 -15, -6 -16, -4 -16 L -4 -8 L 0 -10 L 4 -8 L 4 -16 C 6 -16, 8 -15, 8 -12 L 8 0 C 8 3, 6 5, 3 5 L -3 5 C -6 5, -8 3, -8 0 Z"
                    fill="#ffffff"
                  />
                </g>
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
