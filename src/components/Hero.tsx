'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="bg-[#005492]"
      style={{ backgroundImage: 'url(/pic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-36 md:py-48 text-center">

        <p className="text-[11px] tracking-[0.35em] uppercase text-white/60 mb-10">
          Mercy for Life
        </p>

        <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-light text-white leading-[1.1] mb-10" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.25)' }}>
          Defending Life<span className="text-white/50">,</span><br />
          One Prayer at a Time
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/get-involved"
            className="bg-white text-[#005492] text-[13px] font-semibold px-9 py-3.5 rounded-md hover:bg-white/90 transition-all"
          >
            Get Involved
          </Link>
          <Link
            href="/prayer"
            className="text-white text-[13px] font-semibold px-9 py-3.5 rounded-md border border-white/30 hover:bg-white/10 hover:border-white/60 transition-all"
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

