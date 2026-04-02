'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLocale()

  const navLinks = [
    { href: '/', label: t.nav.about },
    { href: '/menu', label: t.nav.menu },
    { href: '/wine', label: t.nav.wine },
    { href: '/events', label: t.nav.events },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/reserve', label: t.nav.reserve },
    { href: '/access', label: t.nav.access },
  ]

  return (
    <footer className="bg-[#0f0e0c] text-[#FAF8F4]/60">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#AA894D] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div>
              <p
                className="text-[#FAF8F4]/30 text-[0.6rem] tracking-[0.4em] uppercase mb-1"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
              >
                RESTAURANT
              </p>
              <p
                className="text-[#AA894D] text-2xl tracking-[0.2em] font-light"
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              >
                VITRA NAGOYA
              </p>
            </div>
            <p
              className="text-[#FAF8F4]/40 text-[0.75rem] leading-7 italic"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              記憶に残る一皿と、想い出に残る瞬間を。
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[#AA894D] text-[0.6rem] tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              INFO
            </p>
            <dl className="flex flex-col gap-3 text-[0.75rem]">
              {[
                { label: t.accessPage.labels.address, value: '〒464-0835 愛知県名古屋市千種区御棚町3-26' },
                { label: t.accessPage.labels.tel, value: '052-759-5511', href: 'tel:0527595511' },
                { label: t.accessPage.labels.hours, value: t.accessPage.hours },
                { label: t.accessPage.labels.closed, value: t.accessPage.closed },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-3">
                  <dt
                    className="text-[#AA894D]/60 w-16 shrink-0 text-[0.6rem] tracking-[0.15em] pt-0.5"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    {label}
                  </dt>
                  <dd style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                    {href ? (
                      <a href={href} className="hover:text-[#AA894D] transition-colors">
                        {value}
                      </a>
                    ) : value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <p
              className="text-[#AA894D] text-[0.6rem] tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              NAVIGATION
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#FAF8F4]/50 hover:text-[#AA894D] text-[0.7rem] tracking-[0.15em] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#FAF8F4]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[0.6rem] tracking-[0.2em] text-[#FAF8F4]/25"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            © {new Date().getFullYear()} RESTAURANT VITRA NAGOYA. ALL RIGHTS RESERVED.
          </p>
          <a
            href="https://www.anges-nagoya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6rem] tracking-[0.15em] text-[#FAF8F4]/30 hover:text-[#AA894D] transition-colors"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {t.shared.sister}: KAKUOZAN CHAPELLE DES ANGES ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
