'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center bg-[#003A63]"
      style={{ backgroundImage: 'url(/pic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-[#003A63]/30" />

      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 py-32 md:py-44 text-center flex-1 flex flex-col items-center justify-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="h-px w-8 bg-white/30" />
          <p className="text-[10.5px] tracking-[0.35em] uppercase text-white/60 font-medium">
            St. Thomas the Apostle &middot; Phoenix, AZ
          </p>
          <div className="h-px w-8 bg-white/30" />
        </div>

        <h1
          className="font-serif text-[2.75rem] md:text-[3.75rem] lg:text-[4.75rem] font-light text-white leading-[1.1] mb-7 tracking-tight"
          style={{ textShadow: '0 4px 60px rgba(0,0,0,0.4)' }}
        >
          Defending Life,<br />
          <em className="not-italic text-white/90">One Prayer at a Time</em>
        </h1>

        {/* Divider */}
        <div className="w-12 h-[2px] bg-white/30 rounded-full mx-auto mb-7" />

        <p className="text-[15.5px] text-white/75 max-w-lg mx-auto leading-relaxed mb-12">
          A Catholic pro-life ministry devoted to peaceful prayer
          and advocacy for the protection of every human life.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/get-involved"
            className="bg-white text-[#005999] text-[13px] font-semibold px-9 py-3.5 rounded-md hover:bg-white/95 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
          >
            Get Involved
          </Link>
          <Link
            href="/prayers"
            className="text-white text-[13px] font-medium px-9 py-3.5 rounded-md border border-white/35 hover:bg-white/15 hover:border-white/60 transition-all backdrop-blur-sm"
          >
            Rosary Schedule
          </Link>
        </div>

      </div>

      {/* Scripture bar */}
      <div className="relative border-t border-white/10 py-6 bg-black/20 backdrop-blur-sm">
        <p className="text-center font-serif text-[14.5px] text-white/55 italic tracking-wide">
          &ldquo;Before I formed you in the womb I knew you.&rdquo;
          <span className="text-white/40 not-italic text-[13px] ml-3 font-light">— Jeremiah 1:5</span>
        </p>
      </div>
    </section>
  );
}

