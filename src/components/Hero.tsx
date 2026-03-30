'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#005492]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-32 md:py-44 text-center">

        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-neutral-500 mb-10">
          St. Thomas the Apostle Church &middot; Phoenix, AZ
        </p>

        <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-light text-white leading-[1.12] mb-7">
          Defending Life,<br />
          One Prayer at a Time
        </h1>

        <p className="text-[1.05rem] text-neutral-400 max-w-lg mx-auto leading-relaxed mb-12">
          A pro-life ministry united in peaceful prayer and advocacy
          for the protection of all human life.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/get-involved"
            className="bg-white text-[#005492] text-[13px] font-semibold px-8 py-3.5 rounded-md hover:bg-neutral-100 transition-colors"
          >
            Get Involved
          </Link>
          <Link
            href="/prayer"
            className="text-white text-[13px] font-semibold px-8 py-3.5 rounded-md border border-white/20 hover:border-white/40 transition-colors"
          >
            Prayer Schedule
          </Link>
        </div>

      </div>

      <div className="border-t border-white/[0.06] py-8">
        <p className="text-center font-serif text-base text-white/30 italic">
          &ldquo;Before I formed you in the womb I knew you.&rdquo;
          <span className="text-white/20 not-italic text-sm ml-3">Jeremiah 1:5</span>
        </p>
      </div>
    </section>
  );
}

