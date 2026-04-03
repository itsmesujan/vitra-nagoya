import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ワイン',
  description:
    '400銘柄以上のワインセラー。シャンパーニュ60銘柄以上常備。ソムリエ 伊藤祐太によるペアリングをご提案。',
}

const drinksList = [
  { category: 'アルコールペアリング（5コース）', price: '¥6,050' },
  { category: 'ノンアルコールペアリング（5コース）', price: '¥4,950' },
  { category: 'グラス シャンパーニュ', price: '¥2,090〜' },
  { category: 'グラス 白ワイン', price: '¥1,980〜' },
  { category: 'グラス 赤ワイン', price: '¥1,980〜' },
  { category: 'ボトリティス（貴腐ワイン）', price: '¥1,540〜' },
  { category: 'クラフトビール', price: '¥990' },
  { category: 'ノンアルコールスパークリング', price: '¥1,320' },
  { category: 'ナチュラルウォーター（スパークリング）', price: '¥880' },
  { category: "プレミアムティー（The d'Or / Royal Blue Tea）", price: '¥1,430' },
  { category: 'プレミアムジュース（みかん・ブラッドオレンジ・りんご）', price: '¥1,100〜¥1,210' },
]

const origins = [
  'フランス（主軸）',
  'オーストラリア',
  'ニュージーランド',
  'ドイツ',
  'アメリカ',
  'ナチュラルワイン',
  'ビオディナミ',
]

export default function WinePage() {
  return (
    <div>
      <PageHeader
        title="Wine"
        titleJp="ワイン"
        subtitle="フランスを中心に世界各地のワインを取り揃え。ナチュラル・ビオディナミワインも豊富にご用意。"
      />

      <div className="px-8 md:px-16 pb-24 max-w-3xl">
        {/* Stats */}
        <section className="grid grid-cols-3 gap-px bg-vitra-border mb-16">
          {[
            { number: '400+', label: 'ラベル数', sub: 'Wine Labels' },
            { number: '60+', label: 'シャンパーニュ', sub: 'Champagne Labels' },
            { number: '1', label: 'ソムリエ', sub: 'Certified Sommelier' },
          ].map((stat) => (
            <div key={stat.label} className="bg-vitra-dark p-6 md:p-8 text-center">
              <div className="font-display italic text-3xl text-vitra-gold mb-1">{stat.number}</div>
              <div className="font-serif text-vitra-cream text-xs">{stat.label}</div>
              <div className="text-vitra-muted text-[9px] tracking-widest mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </section>

        {/* Cellar description */}
        <section className="mb-16">
          <h2 className="font-display italic text-2xl text-vitra-cream mb-1">Cellar</h2>
          <div className="text-[10px] tracking-[0.3em] text-vitra-muted mb-1">セラー</div>
          <div className="w-8 h-px bg-vitra-gold mb-8" />

          <p className="text-vitra-cream/70 text-sm font-serif leading-[2.2] mb-8">
            フランスを主軸に、オーストラリア、ニュージーランド、ドイツ、アメリカなど世界各国のワインを幅広く取り揃えています。
            ビオロジック・ビオディナミのナチュラルワインも充実しており、
            ソムリエが料理との相性を考えながら一杯一杯丁寧にご提案します。
          </p>

          <div className="flex flex-wrap gap-2">
            {origins.map((tag) => (
              <span
                key={tag}
                className="border border-vitra-border text-vitra-muted text-[10px] tracking-wider px-3 py-1.5 font-serif"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Drinks list */}
        <section className="mb-12">
          <h2 className="font-display italic text-2xl text-vitra-cream mb-1">Drinks List</h2>
          <div className="text-[10px] tracking-[0.3em] text-vitra-muted mb-1">ドリンクリスト</div>
          <div className="w-8 h-px bg-vitra-gold mb-8" />

          <div className="divide-y divide-vitra-border border border-vitra-border">
            {drinksList.map((item) => (
              <div
                key={item.category}
                className="flex items-center justify-between px-6 py-4 hover:bg-vitra-border/20 transition-colors"
              >
                <span className="text-vitra-cream/80 text-sm font-serif pr-4">{item.category}</span>
                <span className="font-display italic text-vitra-gold text-lg shrink-0">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Wine list PDF */}
        <a
          href="/wine_list.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-vitra-gold/50 text-vitra-gold text-[11px] tracking-widest px-6 py-3 hover:bg-vitra-gold hover:text-vitra-black transition-all duration-300"
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M8 1H2a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V6L8 1z" />
            <path d="M8 1v5h5" />
            <path d="M4 9h6M4 12h4" />
          </svg>
          ワインリスト PDF をダウンロード
        </a>
      </div>
    </div>
  )
}
