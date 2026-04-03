import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'
import { RESTAURANT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'アクセス',
  description:
    '〒464-0835 名古屋市千種区御棚町3-26。地下鉄東山線覚王山駅4番出口より徒歩8分。TEL: 052-759-5511',
}

export default function AccessPage() {
  const mapsQuery = encodeURIComponent('愛知県名古屋市千種区御棚町3-26')

  return (
    <div>
      <PageHeader
        title="Access"
        titleJp="アクセス"
        subtitle="名古屋市千種区覚王山。覚王山ル・アンジェ教会の隣に佇む、隠れ家的レストランです。"
      />

      <div className="px-8 md:px-16 pb-24 max-w-4xl">
        <div className="grid md:grid-cols-[1fr_300px] gap-8 mb-10">
          {/* Info block */}
          <div className="space-y-10">
            {/* Address */}
            <div>
              <div className="text-[9px] tracking-[0.4em] text-vitra-muted mb-3">ADDRESS</div>
              <address className="not-italic font-serif text-vitra-cream/80 text-sm leading-[2]">
                〒{RESTAURANT.address.postal}
                <br />
                {RESTAURANT.address.prefecture}
                {RESTAURANT.address.city}
                {RESTAURANT.address.street}
                <br />
                <span className="text-vitra-muted text-xs">{RESTAURANT.address.note}</span>
              </address>
              <a
                href={`https://maps.google.com/?q=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-[11px] tracking-[0.2em] text-vitra-gold hover:text-vitra-gold-light transition-colors"
              >
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M6 0C3.79 0 2 1.79 2 4c0 3 4 10 4 10s4-7 4-10c0-2.21-1.79-4-4-4z" />
                  <circle cx="6" cy="4" r="1.5" />
                </svg>
                Google マップで開く
              </a>
            </div>

            {/* Phone */}
            <div>
              <div className="text-[9px] tracking-[0.4em] text-vitra-muted mb-3">PHONE</div>
              <a
                href={RESTAURANT.phoneTel}
                className="font-display italic text-vitra-gold text-2xl hover:text-vitra-gold-light transition-colors"
              >
                {RESTAURANT.phone}
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="text-[9px] tracking-[0.4em] text-vitra-muted mb-3">HOURS</div>
              <div className="font-serif text-vitra-cream/80 text-sm leading-[2]">
                ディナー {RESTAURANT.hours.display}
                <br />
                <span className="text-vitra-muted text-xs">{RESTAURANT.hours.closedDay}</span>
              </div>
            </div>

            {/* Train access */}
            <div>
              <div className="text-[9px] tracking-[0.4em] text-vitra-muted mb-3">BY TRAIN</div>
              <div className="font-serif text-vitra-cream/80 text-sm leading-[2]">
                名古屋市営地下鉄 東山線
                <br />
                <span className="text-vitra-gold">覚王山駅</span> 4番出口より
                <br />
                <span className="font-display italic text-vitra-muted">徒歩約8分</span>
              </div>
            </div>
          </div>

          {/* Quick-reference card */}
          <div className="bg-vitra-dark border border-vitra-border p-6 self-start">
            <div className="text-[9px] tracking-[0.35em] text-vitra-gold mb-5">
              RESTAURANT VITRA NAGOYA
            </div>
            <div className="divide-y divide-vitra-border text-xs font-serif">
              <div className="flex justify-between py-3">
                <span className="text-vitra-muted">住所</span>
                <span className="text-vitra-cream/80 text-right ml-4">
                  千種区御棚町3-26
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-vitra-muted">TEL</span>
                <a href={RESTAURANT.phoneTel} className="text-vitra-gold">
                  {RESTAURANT.phone}
                </a>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-vitra-muted">営業</span>
                <span className="text-vitra-cream/80">{RESTAURANT.hours.display}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-vitra-muted">定休</span>
                <span className="text-vitra-cream/80">火曜日（原則）</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-vitra-muted">最寄駅</span>
                <span className="text-vitra-cream/80 text-right ml-4">
                  覚王山駅より徒歩8分
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="w-full h-80 bg-vitra-dark border border-vitra-border overflow-hidden">
          <iframe
            src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) hue-rotate(180deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RESTAURANT VITRA NAGOYA 地図 — 名古屋市千種区御棚町3-26"
          />
        </div>
        <p className="text-vitra-muted text-[10px] tracking-wider mt-3 font-serif">
          © Google Maps — 名古屋市千種区御棚町3-26（覚王山ル・アンジェ教会 隣）
        </p>
      </div>
    </div>
  )
}
