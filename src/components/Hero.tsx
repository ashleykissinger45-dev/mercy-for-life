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
            <svg width="200" height="240" viewBox="0 0 200 240" className="drop-shadow-2xl">
              <defs>
                {/* Candle body gradient - elegant blue */}
                <linearGradient id="candleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#0d4d7d', stopOpacity: 1 }} />
                  <stop offset="20%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#2d8cd4', stopOpacity: 1 }} />
                  <stop offset="80%" style={{ stopColor: '#176fb9', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#0d4d7d', stopOpacity: 1 }} />
                </linearGradient>
                
                {/* Flame gradient - warm to bright */}
                <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ff6b35', stopOpacity: 1 }} />
                  <stop offset="30%" style={{ stopColor: '#ffa726', stopOpacity: 1 }} />
                  <stop offset="60%" style={{ stopColor: '#ffeb3b', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#fff9e6', stopOpacity: 0.95 }} />
                </linearGradient>
                
                {/* Inner flame - bright white/yellow */}
                <radialGradient id="innerFlame" cx="50%" cy="60%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="40%" style={{ stopColor: '#ffeb3b', stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: '#ffa726', stopOpacity: 0 }} />
                </radialGradient>
                
                {/* Glow effect for flame */}
                <filter id="flameGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Shadow for candle */}
                <filter id="candleShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                  <feOffset dx="0" dy="3" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.2"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                {/* Candle highlight */}
                <linearGradient id="candleHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                  <stop offset="30%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
                  <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0.25 }} />
                  <stop offset="70%" style={{ stopColor: '#ffffff', stopOpacity: 0.15 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              
              {/* Candle body */}
              <g filter="url(#candleShadow)">
                {/* Main candle cylinder */}
                <rect 
                  x="70" 
                  y="90" 
                  width="60" 
                  height="130" 
                  rx="6" 
                  fill="url(#candleGradient)"
                />
                
                {/* Candle top (melted wax effect) */}
                <ellipse 
                  cx="100" 
                  cy="90" 
                  rx="30" 
                  ry="8" 
                  fill="url(#candleGradient)"
                />
                
                {/* Highlight on candle */}
                <rect 
                  x="75" 
                  y="95" 
                  width="35" 
                  height="120" 
                  rx="4" 
                  fill="url(#candleHighlight)"
                />
                
                {/* Wick */}
                <rect 
                  x="98" 
                  y="75" 
                  width="4" 
                  height="18" 
                  rx="2" 
                  fill="#2c2416"
                />
              </g>
              
              {/* Heart-shaped flame */}
              <g filter="url(#flameGlow)">
                {/* Outer flame (heart shape) */}
                <path
                  d="M 100 45
                     C 100 45, 90 35, 80 35
                     C 65 35, 60 45, 60 55
                     C 60 70, 100 95, 100 95
                     C 100 95, 140 70, 140 55
                     C 140 45, 135 35, 120 35
                     C 110 35, 100 45, 100 45 Z"
                  fill="url(#flameGradient)"
                  opacity="0.95"
                />
                
                {/* Inner bright glow */}
                <ellipse 
                  cx="100" 
                  cy="60" 
                  rx="18" 
                  ry="22" 
                  fill="url(#innerFlame)"
                />
                
                {/* Highlight sparkle */}
                <ellipse 
                  cx="95" 
                  cy="52" 
                  rx="6" 
                  ry="8" 
                  fill="#ffffff" 
                  opacity="0.7"
                />
              </g>
              
              {/* Soft ambient glow around flame */}
              <ellipse 
                cx="100" 
                cy="65" 
                rx="45" 
                ry="35" 
                fill="url(#flameGradient)" 
                opacity="0.08"
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
