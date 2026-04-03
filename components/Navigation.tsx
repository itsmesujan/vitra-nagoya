'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NAV_ITEMS, RESTAURANT } from '@/lib/constants'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* ── Mobile header (top bar) ── */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-vitra-black/95 backdrop-blur border-b border-vitra-border flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setIsOpen(false)}
        >
          <span className="text-[10px] tracking-[0.35em] text-vitra-muted font-display">RESTAURANT</span>
          <span className="text-base tracking-[0.25em] text-vitra-gold font-display">VITRA</span>
        </Link>

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
          className="flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block w-6 h-px bg-vitra-cream transition-transform duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[9px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-vitra-cream transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-vitra-cream transition-transform duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
          />
        </button>
      </header>

      {/* ── Mobile overlay menu ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-vitra-black/98 flex flex-col items-center justify-center gap-6 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex flex-col items-center gap-0.5 group"
              >
                <span
                  className={`text-base tracking-[0.08em] font-serif transition-colors duration-200 ${
                    isActive ? 'text-vitra-gold' : 'text-vitra-cream group-hover:text-vitra-gold-light'
                  }`}
                >
                  {item.label}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-vitra-muted">{item.sublabel}</span>
              </Link>
            )
          })}
        </nav>

        <a
          href={RESTAURANT.phoneTel}
          className="mt-4 border border-vitra-gold/50 text-vitra-gold font-display italic text-xl px-8 py-3 hover:bg-vitra-gold hover:text-vitra-black transition-all duration-300"
        >
          {RESTAURANT.phone}
        </a>
      </div>

      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-60 bg-vitra-dark border-r border-vitra-border flex-col z-40 overflow-y-auto">
        {/* Logo */}
        <Link
          href="/"
          className="block px-8 py-8 border-b border-vitra-border hover:bg-vitra-border/20 transition-colors"
        >
          <div className="text-[9px] tracking-[0.4em] text-vitra-muted mb-0.5 font-display">RESTAURANT</div>
          <div className="text-2xl tracking-[0.25em] text-vitra-cream font-display">VITRA</div>
          <div className="text-[10px] tracking-[0.3em] text-vitra-muted mt-0.5">NAGOYA</div>
        </Link>

        {/* Navigation links */}
        <nav className="flex-1 py-6">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex flex-col px-8 py-3.5 transition-colors duration-200 ${
                  isActive ? 'bg-vitra-border/40' : 'hover:bg-vitra-border/20'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-vitra-gold" />
                )}
                <span
                  className={`text-[13px] tracking-[0.06em] font-serif transition-colors duration-200 ${
                    isActive
                      ? 'text-vitra-gold'
                      : 'text-vitra-cream/90 group-hover:text-vitra-gold-light'
                  }`}
                >
                  {item.label}
                </span>
                <span className="text-[10px] tracking-[0.18em] text-vitra-muted mt-0.5">
                  {item.sublabel}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Sidebar phone CTA */}
        <div className="px-8 py-6 border-t border-vitra-border">
          <div className="text-[9px] tracking-[0.3em] text-vitra-muted mb-1.5">RESERVATION</div>
          <a
            href={RESTAURANT.phoneTel}
            className="block text-vitra-gold font-display italic text-base hover:text-vitra-gold-light transition-colors"
          >
            {RESTAURANT.phone}
          </a>
          <div className="text-[10px] text-vitra-muted mt-2 leading-relaxed font-serif">
            {RESTAURANT.hours.display}
            <br />
            <span className="text-[9px]">火曜定休</span>
          </div>
        </div>
      </aside>
    </>
  )
}
