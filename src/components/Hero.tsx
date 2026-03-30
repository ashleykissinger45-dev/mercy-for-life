'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 md:py-36 text-center">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary-500 mb-6">
          St. Thomas the Apostle Church · Phoenix, AZ
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 leading-[1.1] tracking-wide mb-6">
          Defending Life,<br />
          <span className="text-primary-500">One Prayer</span> at a Time.
        </h1>

        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Mercy for Life is a pro-life ministry united in peaceful prayer and advocacy
          for the protection of all human life — from conception to natural death.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center bg-neutral-900 hover:bg-neutral-700 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            Get Involved
          </Link>
          <Link
            href="/prayer"
            className="inline-flex items-center justify-center bg-transparent hover:bg-neutral-100 text-neutral-800 border border-neutral-800 text-sm font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            View Prayer Schedule
          </Link>
        </div>

        {/* Divider + scripture */}
        <div className="mt-16 pt-10 border-t border-neutral-200">
          <p className="font-serif text-lg text-neutral-500 italic">
            &ldquo;Before I formed you in the womb I knew you.&rdquo;
          </p>
          <p className="mt-2 text-xs font-semibold tracking-widest uppercase text-neutral-400">
            Jeremiah 1:5
          </p>
        </div>

      </div>
    </section>
  );
}

