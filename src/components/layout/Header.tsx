'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale, type Locale } from '@/lib/i18n'

const LOCALE_LABELS: Record<Locale, string> = { ja: 'JA', en: 'EN', fr: 'FR' }

export default function Header() {
  const { locale, setLocale, t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '/', label: t.nav.about },
    { href: '/menu', label: t.nav.menu },
    { href: '/wine', label: t.nav.wine },
    { href: '/events', label: t.nav.events },
    { href: '/gallery', label: t.nav.gallery },
    { href: '/access', label: t.nav.access },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-[#0f0e0c]/95 backdrop-blur-sm shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group" onClick={() => setMenuOpen(false)}>
              <span
                className="text-[#FAF8F4] text-xs tracking-[0.4em] uppercase group-hover:text-[#AA894D] transition-colors duration-300"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
              >
                RESTAURANT
              </span>
              <span
                className="text-[#AA894D] text-xl tracking-[0.25em] font-light group-hover:text-[#C9A96E] transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              >
                VITRA NAGOYA
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[#FAF8F4]/80 hover:text-[#AA894D] text-[0.65rem] tracking-[0.25em] uppercase transition-colors duration-300"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right: Lang switcher + Reserve CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language switcher */}
              <div className="flex items-center gap-1" role="group" aria-label="Language selector">
                {(['ja', 'en', 'fr'] as Locale[]).map((l, i) => (
                  <span key={l} className="flex items-center gap-1">
                    <button
                      onClick={() => setLocale(l)}
                      className={`text-[0.6rem] tracking-[0.2em] transition-colors duration-200 hover:text-[#AA894D] ${
                        locale === l ? 'text-[#AA894D]' : 'text-[#FAF8F4]/50'
                      }`}
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                      aria-label={`Switch to ${LOCALE_LABELS[l]}`}
                      aria-pressed={locale === l}
                    >
                      {LOCALE_LABELS[l]}
                    </button>
                    {i < 2 && <span className="text-[#FAF8F4]/20 text-[0.5rem]">/</span>}
                  </span>
                ))}
              </div>

              {/* Reserve CTA */}
              <Link
                href="/reserve"
                className="px-6 py-2.5 border border-[#AA894D] text-[#AA894D] text-[0.6rem] tracking-[0.25em] uppercase hover:bg-[#AA894D] hover:text-[#0f0e0c] transition-all duration-300"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
              >
                {t.shared.reserve}
              </Link>
            </div>

            {/* Mobile: lang + hamburger */}
            <div className="flex lg:hidden items-center gap-4">
              <div className="flex items-center gap-1">
                {(['ja', 'en', 'fr'] as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLocale(l)}
                    className={`text-[0.55rem] tracking-[0.15em] px-1 transition-colors ${
                      locale === l ? 'text-[#AA894D]' : 'text-[#FAF8F4]/40'
                    }`}
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    aria-pressed={locale === l}
                  >
                    {LOCALE_LABELS[l]}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                <span className={`block w-5 h-px bg-[#FAF8F4] transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block w-5 h-px bg-[#FAF8F4] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-px bg-[#FAF8F4] transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#0f0e0c] flex flex-col transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-8 pt-24">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[#FAF8F4]/80 hover:text-[#AA894D] text-[0.75rem] tracking-[0.4em] uppercase transition-colors duration-300"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              {label}
            </Link>
          ))}

          <div className="w-10 h-px bg-[#AA894D]/40 my-2" />

          <Link
            href="/reserve"
            onClick={() => setMenuOpen(false)}
            className="px-10 py-3 border border-[#AA894D] text-[#AA894D] text-[0.65rem] tracking-[0.3em] uppercase hover:bg-[#AA894D] hover:text-[#0f0e0c] transition-all duration-300"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {t.shared.reserve}
          </Link>
        </div>

        {/* Mobile footer info */}
        <div className="pb-10 text-center">
          <p
            className="text-[#FAF8F4]/30 text-[0.6rem] tracking-[0.2em]"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            TEL: 052-759-5511
          </p>
        </div>
      </div>
    </>
  )
}
