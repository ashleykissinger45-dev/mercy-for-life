'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#070e1a',
      }}
    >
      {/* Deep layered ambient glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 70% at 65% 35%, rgba(10,108,187,0.38) 0%, transparent 58%), radial-gradient(ellipse 55% 45% at 20% 75%, rgba(4,60,120,0.22) 0%, transparent 55%), radial-gradient(ellipse 70% 60% at 85% 80%, rgba(8,50,110,0.15) 0%, transparent 50%)' }} />
      {/* Bottom fade into white page */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-40 md:pt-40 md:pb-52 text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 mb-10">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-400" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-300">
            St. Thomas the Apostle Church · Phoenix, AZ
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-400" />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.25rem] font-light text-white leading-[1.08] tracking-wide mb-8">
          Defending Life,<br />
          <span className="text-primary-400">One Prayer</span> at a Time.
        </h1>

        <p className="text-[1.1rem] text-neutral-300/90 max-w-xl mx-auto leading-relaxed mb-12 font-light">
          A pro-life ministry united in peaceful prayer and advocacy
          for the protection of all human life — from conception to natural death.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white text-[13px] font-semibold px-9 py-4 rounded-lg transition-colors tracking-wide"
          >
            Get Involved
          </Link>
          <Link
            href="/prayer"
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/30 text-[13px] font-semibold px-9 py-4 rounded-lg transition-colors tracking-wide"
          >
            View Prayer Schedule
          </Link>
        </div>

        {/* Scripture */}
        <div className="mt-16">
          <p className="font-serif text-[1.15rem] font-light text-white/40 italic">
            &ldquo;Before I formed you in the womb I knew you.&rdquo;
          </p>
          <p className="mt-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-400/50">
            Jeremiah 1:5
          </p>
        </div>

      </div>
    </section>
  );
}

