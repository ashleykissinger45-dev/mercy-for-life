'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative bg-[#070e1a]"
      style={{ backgroundImage: 'url(/backgroun.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-28 md:py-40 text-center">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary-300 mb-8">
          St. Thomas the Apostle Church · Phoenix, AZ
        </p>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-[5rem] font-light text-white leading-[1.1] tracking-wide mb-8">
          Defending Life,<br />
          <span className="text-primary-400">One Prayer</span> at a Time.
        </h1>

        <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Mercy for Life is a pro-life ministry united in peaceful prayer and advocacy
          for the protection of all human life — from conception to natural death.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Get Involved
          </Link>
          <Link
            href="/prayer"
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white/40 text-sm font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            View Prayer Schedule
          </Link>
        </div>

        {/* Scripture */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="font-serif text-xl font-light text-white/60 italic">
            &ldquo;Before I formed you in the womb I knew you.&rdquo;
          </p>
          <p className="mt-3 text-xs font-semibold tracking-widest uppercase text-primary-400/70">
            Jeremiah 1:5
          </p>
        </div>

      </div>
    </section>
  );
}

