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
            <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-lg">
              {/* Rosary beads forming heart shape - crisp black */}
              {(() => {
                // Heart curve coordinates matching reference
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
                  <circle key={i} cx={bead.x} cy={bead.y} r="6" fill="#000000" />
                ));
              })()}
              
              {/* Cross in center - crisp black */}
              <g>
                {/* Vertical beam */}
                <rect x="85" y="70" width="10" height="50" rx="1" fill="#000000" />
                {/* Horizontal beam */}
                <rect x="70" y="87" width="40" height="10" rx="1" fill="#000000" />
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
