'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/lib/i18n'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0e0c]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&auto=format&fit=crop"
          alt="RESTAURANT VITRA NAGOYA — fine dining interior"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c]/60 via-[#0f0e0c]/20 to-[#0f0e0c]/80" />
      </div>

      {/* Gold horizontal lines — decorative */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#AA894D]/15 to-transparent -translate-y-32 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <p
          className="text-[#AA894D] tracking-[0.5em] text-[0.65rem] uppercase"
          style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
        >
          RESTAURANT VITRA NAGOYA
        </p>

        {/* Main headline */}
        <h1
          className="text-[#FAF8F4] text-5xl sm:text-6xl lg:text-8xl font-light leading-tight tracking-[0.03em]"
          style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
        >
          <span className="block">{t.hero.tagline}</span>
          <span className="block text-[#AA894D] italic">{t.hero.tagline2}</span>
        </h1>

        {/* Gold rule */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#AA894D] to-transparent" />

        {/* Sub */}
        <p
          className="text-[#FAF8F4]/60 text-[0.7rem] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
        >
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/reserve"
            className="px-10 py-4 bg-[#AA894D] text-[#0f0e0c] text-[0.65rem] tracking-[0.3em] uppercase font-medium hover:bg-[#C9A96E] transition-colors duration-300"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {t.hero.ctaReserve}
          </Link>
          <Link
            href="/menu"
            className="px-10 py-4 border border-[#FAF8F4]/40 text-[#FAF8F4]/80 text-[0.65rem] tracking-[0.3em] uppercase hover:border-[#AA894D] hover:text-[#AA894D] transition-all duration-300"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {t.hero.ctaMenu}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#AA894D]/60" />
        <div className="w-1 h-1 rounded-full bg-[#AA894D]/60" />
      </div>
    </section>
  )
}
