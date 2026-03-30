'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="bg-[#005999]"
      style={{ backgroundImage: 'url(/pic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-32 md:py-44 text-center">

        <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-6">
          St. Thomas the Apostle &middot; Phoenix, AZ
        </p>

        <h1 className="font-serif text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-light text-white leading-[1.15] mb-6" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.2)' }}>
          Defending Life,<br />
          One Prayer at a Time
        </h1>

        <p className="text-[15px] text-white/70 max-w-lg mx-auto leading-relaxed mb-10">
          We are a Catholic pro-life ministry devoted to peaceful prayer
          and advocacy for the protection of every human life.
        </p>

        <div className="flex flex-wrap gap-3.5 justify-center">
          <Link
            href="/get-involved"
            className="bg-white text-[#005999] text-[13px] font-medium px-8 py-3 rounded-md hover:bg-white/90 transition-all"
          >
            Get Involved
          </Link>
          <Link
            href="/prayer"
            className="text-white/90 text-[13px] font-medium px-8 py-3 rounded-md border border-white/25 hover:bg-white/10 hover:border-white/50 transition-all"
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

