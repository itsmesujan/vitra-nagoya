import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import type { Metadata } from 'next'
import { RESTAURANT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'パーティ',
  description:
    'ウェディング披露宴・記念日・プライベートパーティのご案内。覚王山ル・アンジェ教会と提携した特別なひとときを。',
}

const partyTypes = [
  { label: '記念日', sub: 'Anniversary' },
  { label: '誕生日', sub: 'Birthday' },
  { label: '接待', sub: 'Business' },
  { label: '同窓会', sub: 'Reunion' },
]

const weddingFeatures = [
  '教会挙式後の披露宴会場として',
  'ウェディングコース（要相談・完全オーダーメイド）',
  'シャンパーニュ・ウェルカムドリンク',
  'ウェディングケーキ手配可能',
  'プライベート空間での貸切対応',
]

export default function PartyPage() {
  return (
    <div>
      <PageHeader
        title="Party"
        titleJp="パーティ"
        subtitle="結婚式の披露宴から記念日のプライベートディナーまで、大切なひとときをヴィトラが彩ります。"
      />

      <div className="px-8 md:px-16 pb-24 max-w-4xl">
        {/* Wedding */}
        <section className="mb-20">
          <div className="flex items-start gap-5 mb-10">
            <div className="w-px h-12 bg-vitra-gold shrink-0 mt-1" />
            <div>
              <h2 className="font-display italic text-2xl text-vitra-cream">Wedding Reception</h2>
              <div className="text-[10px] tracking-[0.3em] text-vitra-muted mt-1">ウェディング披露宴</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="space-y-5 text-vitra-cream/70 text-sm font-serif leading-[2.2] mb-8">
                <p>
                  レストラン ヴィトラ ナゴヤは、徒歩数歩の距離にある「覚王山ル・アンジェ教会」と連携し、
                  挙式後の披露宴会場として多くのカップルに選ばれています。
                </p>
                <p>
                  シェフ渾身のウェディングコース、ソムリエ厳選のシャンパーニュ、
                  そしてプライベートな空間が、人生最良の日の食事を彩ります。
                </p>
              </div>

              <div className="bg-vitra-dark border border-vitra-border p-6">
                <div className="text-[9px] tracking-[0.35em] text-vitra-muted mb-3">
                  ウェディングのお問合せ
                </div>
                <div className="font-serif text-vitra-cream/80 text-sm mb-2">
                  覚王山ル・アンジェ教会 コンシェルジュ
                </div>
                <a
                  href={RESTAURANT.sisterVenue.phoneTel}
                  className="font-display italic text-vitra-gold text-2xl hover:text-vitra-gold-light transition-colors block"
                >
                  {RESTAURANT.sisterVenue.phone}
                </a>
                <div className="mt-5 pt-5 border-t border-vitra-border">
                  <a
                    href={RESTAURANT.sisterVenue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-widest text-vitra-muted hover:text-vitra-gold transition-colors"
                  >
                    {RESTAURANT.sisterVenue.name} →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-vitra-dark border border-vitra-border p-8">
              <div className="text-[9px] tracking-[0.4em] text-vitra-gold mb-6">
                CEREMONY &amp; RECEPTION
              </div>
              <ul className="space-y-4">
                {weddingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-serif text-vitra-cream/80">
                    <span className="text-vitra-gold/60 mt-1 shrink-0">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Private parties */}
        <section>
          <div className="flex items-start gap-5 mb-10">
            <div className="w-px h-12 bg-vitra-gold shrink-0 mt-1" />
            <div>
              <h2 className="font-display italic text-2xl text-vitra-cream">Private Parties</h2>
              <div className="text-[10px] tracking-[0.3em] text-vitra-muted mt-1">プライベートパーティ</div>
            </div>
          </div>

          <p className="text-vitra-cream/70 text-sm font-serif leading-[2.2] mb-10 max-w-xl">
            記念日のお祝い、誕生日パーティ、接待、同窓会など、
            特別な夜のご要望に合わせてお席をご用意いたします。
            メニューやデコレーションについてもご相談ください。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-vitra-border mb-10">
            {partyTypes.map((item) => (
              <div key={item.label} className="bg-vitra-dark p-6 text-center">
                <div className="font-serif text-vitra-cream text-sm">{item.label}</div>
                <div className="text-vitra-muted text-[10px] tracking-wider mt-1">{item.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={RESTAURANT.phoneTel}
              className="flex items-center gap-2 bg-vitra-gold text-vitra-black text-[11px] tracking-widest px-6 py-3 hover:bg-vitra-gold-light transition-all duration-300 font-medium"
            >
              <svg
                width="14"
                height="14"
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
              className="border border-vitra-border text-vitra-cream/70 text-[11px] tracking-widest px-6 py-3 hover:border-vitra-gold/50 hover:text-vitra-gold transition-all duration-300"
            >
              お問合せフォーム →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
