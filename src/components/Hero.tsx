'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="bg-[#005492]"
      style={{ backgroundImage: 'url(/pic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-32 md:py-44 text-center">

        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/80 mb-12 flex items-center justify-center gap-3">
          <span className="w-6 h-px bg-white/40" />
          St. Thomas the Apostle Church &middot; Phoenix, AZ
          <span className="w-6 h-px bg-white/40" />
        </p>

        <h1 className="font-serif leading-[1.1] mb-7" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.3)' }}>
          <span className="block text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-light text-white tracking-wide">
            Defending Life,
          </span>
          <span className="block text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-light text-white/70 mt-1">
            One Prayer at a Time
          </span>
        </h1>

        <div className="w-10 h-px bg-white/30 mx-auto mb-8" />

        <p className="text-[1rem] text-white/75 max-w-md mx-auto leading-relaxed mb-12 font-light">
          A pro-life ministry united in peaceful prayer and advocacy
          for the protection of all human life.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/get-involved"
            className="bg-white text-[#005492] text-[13px] font-semibold px-9 py-3.5 rounded-md hover:bg-white/90 transition-all shadow-lg shadow-black/10"
          >
            Get Involved
          </Link>
          <Link
            href="/prayer"
            className="text-white text-[13px] font-semibold px-9 py-3.5 rounded-md border border-white/40 hover:bg-white/10 hover:border-white/70 transition-all backdrop-blur-sm"
          >
            Prayer Schedule
          </Link>
        </div>

      </div>

      <div className="border-t border-white/15 py-8">
        <p className="text-center font-serif text-base text-white/70 italic">
          &ldquo;Before I formed you in the womb I knew you.&rdquo;
          <span className="text-white/60 not-italic text-sm ml-3">Jeremiah 1:5</span>
        </p>
      </div>
    </section>
  );
}

