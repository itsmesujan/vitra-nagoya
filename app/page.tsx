import Link from 'next/link'
import type { Metadata } from 'next'
import { RESTAURANT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'RESTAURANT VITRA NAGOYA | フレンチ日本料理 覚王山',
  description:
    '愛知県名古屋市千種区覚王山にある完全予約制フレンチレストラン。記憶に残る一皿と、想い出に残る瞬間を。ディナーのみ営業。',
}

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center px-8 md:px-16 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-vitra-black via-vitra-black to-vitra-dark pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-px bg-vitra-gold" />
            <span className="text-[10px] tracking-[0.45em] text-vitra-gold font-display">
              KAKUOZAN · NAGOYA
            </span>
          </div>

          {/* Restaurant name */}
          <div className="mb-8">
            <div className="text-[10px] tracking-[0.5em] text-vitra-muted font-display mb-1">
              RESTAURANT
            </div>
            <h1 className="font-display text-[clamp(4rem,12vw,8rem)] leading-none text-vitra-cream tracking-wider">
              VITRA
            </h1>
            <div className="text-xs tracking-[0.7em] text-vitra-muted mt-1">NAGOYA</div>
          </div>

          {/* Gold rule */}
          <div className="w-14 h-px bg-vitra-gold my-8" />

          {/* Japanese tagline */}
          <p className="font-serif text-vitra-cream/90 text-xl md:text-2xl leading-[2] tracking-wider">
            記憶に残る一皿と、
          </p>
          <p className="font-serif text-vitra-cream/90 text-xl md:text-2xl leading-[2] tracking-wider">
            想い出に残る瞬間を。
          </p>

          {/* English subtitle */}
          <p className="font-display italic text-vitra-muted text-sm mt-3 leading-loose">
            A dish that stays in memory,
            <br />a moment that will remain a treasured memory.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-12">
            <Link
              href="/menu"
              className="border border-vitra-gold/60 text-vitra-gold text-[11px] tracking-[0.25em] px-8 py-3.5 hover:bg-vitra-gold hover:text-vitra-black hover:border-vitra-gold transition-all duration-300"
            >
              MENU
            </Link>
            <Link
              href="/reserve"
              className="bg-vitra-gold text-vitra-black text-[11px] tracking-[0.25em] px-8 py-3.5 hover:bg-vitra-gold-light transition-all duration-300 font-medium"
            >
              ご予約
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-8 md:left-16 flex flex-col items-center gap-3">
          <div className="w-px h-12 bg-gradient-to-b from-vitra-gold to-transparent" />
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="px-8 md:px-16 py-20 max-w-4xl">
        <div className="flex items-start gap-5 mb-12">
          <div className="w-px h-16 bg-vitra-gold shrink-0 mt-1" />
          <div>
            <div className="text-[9px] tracking-[0.5em] text-vitra-muted mb-1">OUR PHILOSOPHY</div>
            <div className="font-serif text-vitra-cream/50 text-xs tracking-widest">
              ヴィトラについて
            </div>
          </div>
        </div>

        <div className="space-y-7 font-serif text-vitra-cream/75 text-[15px] leading-[2.3] max-w-xl">
          <p>
            料理はすべて、生命をいただくという犠牲のもとに成り立っています。
            命をいただくこと、自然のめぐみに対する感謝を忘れず、
            その食材の持つ個性を最大限に引き出すことを心がけています。
          </p>
          <p>
            日本各地の生産者を直接訪ね、その方々の想いや哲学に触れた上で食材を仕入れています。
            フランス料理の技法をベースに、日本料理の繊細さと精神性を融合した
            「VITRA スタイル」を体現する一皿一皿をお届けします。
          </p>
          <p>
            ご予約をいただいた時点から、お帰りになられる時まで、ひとときひとときを大切に。
            特別な夜のすべてが、記憶に刻まれる体験となるよう、
            シェフとソムリエが心を込めておもてなしいたします。
          </p>
        </div>

        <Link
          href="/profile"
          className="inline-flex items-center gap-3 mt-10 text-[11px] tracking-[0.2em] text-vitra-gold hover:text-vitra-gold-light transition-colors"
        >
          シェフ・ソムリエのプロフィール
          <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
            <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="0.9" />
          </svg>
        </Link>
      </section>

      {/* ── Info cards ── */}
      <section className="px-8 md:px-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-vitra-border max-w-4xl">
          {/* Dining */}
          <div className="bg-vitra-dark p-8 flex flex-col">
            <div className="text-[9px] tracking-[0.35em] text-vitra-muted mb-4">DINNER COURSE</div>
            <div className="font-display italic text-3xl text-vitra-cream mb-2">¥9,900〜</div>
            <p className="text-vitra-muted text-xs font-serif leading-relaxed flex-1">
              全コース完全予約制
              <br />
              前日までにお電話にてご予約ください
            </p>
            <Link
              href="/menu"
              className="inline-block mt-6 text-[10px] tracking-widest text-vitra-gold hover:text-vitra-gold-light transition-colors"
            >
              メニューを見る →
            </Link>
          </div>

          {/* Wine */}
          <div className="bg-vitra-dark p-8 flex flex-col">
            <div className="text-[9px] tracking-[0.35em] text-vitra-muted mb-4">WINE CELLAR</div>
            <div className="font-display italic text-3xl text-vitra-cream mb-2">400+</div>
            <p className="text-vitra-muted text-xs font-serif leading-relaxed flex-1">
              シャンパーニュ 60銘柄以上
              <br />
              ソムリエによるペアリング
            </p>
            <Link
              href="/wine"
              className="inline-block mt-6 text-[10px] tracking-widest text-vitra-gold hover:text-vitra-gold-light transition-colors"
            >
              ワインリストを見る →
            </Link>
          </div>

          {/* Party */}
          <div className="bg-vitra-dark p-8 flex flex-col">
            <div className="text-[9px] tracking-[0.35em] text-vitra-muted mb-4">SPECIAL OCCASION</div>
            <div className="font-display italic text-2xl text-vitra-cream mb-2 leading-snug">
              Anniversary
              <br />& Parties
            </div>
            <p className="text-vitra-muted text-xs font-serif leading-relaxed flex-1">
              記念日・ウェディング
              <br />
              プライベートパーティにも対応
            </p>
            <Link
              href="/party"
              className="inline-block mt-6 text-[10px] tracking-widest text-vitra-gold hover:text-vitra-gold-light transition-colors"
            >
              詳しく見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Access strip ── */}
      <section className="px-8 md:px-16 pb-20">
        <div className="max-w-4xl border border-vitra-border p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="font-serif text-vitra-cream/70 text-sm leading-relaxed">
            <span className="block text-[9px] tracking-[0.35em] text-vitra-muted mb-2">ACCESS</span>
            {RESTAURANT.address.full}
            <br />
            <span className="text-vitra-muted text-xs">{RESTAURANT.station}</span>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href={RESTAURANT.phoneTel}
              className="border border-vitra-gold/50 text-vitra-gold text-[11px] tracking-widest px-5 py-2.5 hover:bg-vitra-gold hover:text-vitra-black transition-all duration-300"
            >
              {RESTAURANT.phone}
            </a>
            <Link
              href="/access"
              className="border border-vitra-border text-vitra-muted text-[11px] tracking-widest px-5 py-2.5 hover:border-vitra-gold/50 hover:text-vitra-gold transition-all duration-300"
            >
              地図を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
