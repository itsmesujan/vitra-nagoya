import Link from 'next/link'
import { RESTAURANT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-vitra-border mt-24 px-8 md:px-16 py-12">
      <div className="max-w-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-[9px] tracking-[0.35em] text-vitra-muted mb-2 font-display">RESTAURANT</div>
            <div className="font-display text-vitra-gold text-xl tracking-widest">VITRA</div>
            <div className="text-[10px] tracking-[0.25em] text-vitra-muted mt-0.5">NAGOYA</div>
            <div className="w-6 h-px bg-vitra-gold mt-4" />
          </div>

          {/* Address & contact */}
          <div>
            <div className="text-[9px] tracking-[0.3em] text-vitra-muted mb-3 uppercase">Information</div>
            <address className="not-italic text-vitra-cream/70 text-xs leading-relaxed font-serif">
              {RESTAURANT.address.full}
              <br />
              <a
                href={RESTAURANT.phoneTel}
                className="text-vitra-gold hover:text-vitra-gold-light transition-colors mt-1 block"
              >
                TEL: {RESTAURANT.phone}
              </a>
            </address>
          </div>

          {/* Hours & sister venue */}
          <div>
            <div className="text-[9px] tracking-[0.3em] text-vitra-muted mb-3 uppercase">Hours</div>
            <div className="text-vitra-cream/70 text-xs leading-relaxed font-serif">
              <div>Dinner {RESTAURANT.hours.display}</div>
              <div className="text-vitra-muted mt-1">{RESTAURANT.hours.closedDay}</div>
            </div>
            <div className="mt-5">
              <div className="text-[9px] tracking-[0.3em] text-vitra-muted mb-2 uppercase">Sister Venue</div>
              <a
                href={RESTAURANT.sisterVenue.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest text-vitra-muted hover:text-vitra-gold transition-colors"
              >
                CHAPELLE DES ANGES
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vitra-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-[10px] tracking-widest text-vitra-muted">
            © RESTAURANT VITRA NAGOYA ALL RIGHTS RESERVED
          </div>
          <Link
            href="/reserve"
            className="text-[10px] tracking-[0.2em] text-vitra-gold hover:text-vitra-gold-light transition-colors"
          >
            ご予約はこちら →
          </Link>
        </div>
      </div>
    </footer>
  )
}
