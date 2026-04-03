'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RESTAURANT } from '@/lib/constants'

export default function FloatingReserveCTA() {
  const pathname = usePathname()

  if (pathname === '/reserve') return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
      <a
        href={RESTAURANT.phoneTel}
        aria-label={`電話予約: ${RESTAURANT.phone}`}
        className="flex items-center gap-2 bg-vitra-dark/90 border border-vitra-gold/50 backdrop-blur text-vitra-gold text-[11px] tracking-widest px-4 py-2.5 hover:bg-vitra-gold hover:text-vitra-black transition-all duration-300 shadow-2xl"
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
        </svg>
        {RESTAURANT.phone}
      </a>

      <Link
        href="/reserve"
        className="bg-vitra-gold text-vitra-black text-[11px] tracking-[0.22em] px-5 py-2.5 hover:bg-vitra-gold-light transition-all duration-300 shadow-2xl font-medium"
      >
        ご予約
      </Link>
    </div>
  )
}
