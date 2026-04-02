'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/i18n'

export default function ReservationCTA() {
  const { t } = useLocale()
  const r = t.reserveCTA

  return (
    <section className="relative bg-[#0f0e0c] py-24 lg:py-36 overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #AA894D 0px,
            #AA894D 1px,
            transparent 1px,
            transparent 60px
          )`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8">
        <p
          className="text-[#AA894D]/60 tracking-[0.45em] text-[0.6rem] uppercase"
          style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
        >
          {r.eyebrow}
        </p>

        <h2
          className="text-[#FAF8F4] text-4xl sm:text-5xl lg:text-7xl font-light leading-tight"
          style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
        >
          {r.title}
        </h2>

        <div className="divider-gold w-full max-w-[200px]" style={{ height: '1px' }} />

        <p
          className="text-[#FAF8F4]/50 text-sm leading-8 whitespace-pre-line"
          style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
        >
          {r.sub}
        </p>

        <p
          className="text-[#AA894D]/70 text-[0.65rem] tracking-[0.2em]"
          style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
        >
          {r.hours}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/reserve"
            className="px-10 py-4 bg-[#AA894D] text-[#0f0e0c] text-[0.65rem] tracking-[0.3em] uppercase font-medium hover:bg-[#C9A96E] transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {r.cta}
          </Link>
          <a
            href="tel:0527595511"
            className="px-10 py-4 border border-[#FAF8F4]/30 text-[#FAF8F4]/70 text-[0.65rem] tracking-[0.3em] uppercase hover:border-[#AA894D] hover:text-[#AA894D] transition-all duration-300"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {r.phone}：052-759-5511
          </a>
        </div>
      </div>
    </section>
  )
}
