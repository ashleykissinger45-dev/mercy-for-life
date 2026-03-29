'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white to-rose-50/40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 inline-block"></span>
            St. Thomas the Apostle Church · Phoenix, AZ
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-neutral-900 leading-[1.1] mb-6 tracking-tight">
            Defending Life,<br />
            <span className="text-primary-600">One Prayer</span><br />
            at a Time.
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10">
            Mercy for Life is a pro-life ministry united in peaceful prayer and advocacy for the protection of all human life — from conception to natural death.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/get-involved" className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-sm text-sm">
              Get Involved
            </Link>
            <Link href="/prayer" className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm">
              View Prayer Schedule
            </Link>
          </div>
        </div>

        {/* Scripture quote card */}
        <div className="mt-16 md:mt-20 max-w-xl bg-white border border-neutral-200 rounded-xl px-8 py-6 shadow-sm">
          <p className="font-serif text-lg text-neutral-700 italic leading-relaxed">
            "Before I formed you in the womb I knew you."
          </p>
          <p className="mt-2 text-sm text-neutral-500 font-medium">— Jeremiah 1:5</p>
        </div>
      </div>
    </section>
  );
}
