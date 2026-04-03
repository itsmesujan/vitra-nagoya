import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'メニュー',
  description:
    'ディナーコースメニュー。¥9,900〜¥19,800。季節の食材を使ったフレンチ日本料理のコースをご用意しています。',
}

const courses = [
  {
    name: 'Menu A',
    nameJp: 'メニュー A',
    price: '¥9,900',
    desc: '旬の食材をふんだんに取り入れた、季節の恵みを味わうコース。',
  },
  {
    name: 'Menu B',
    nameJp: 'メニュー B',
    price: '¥14,300',
    desc: 'スタンダードな季節のテイスティングコース。「少しずつ、多彩な味わいを」。',
  },
  {
    name: 'Menu V',
    nameJp: 'アニバーサリーコース',
    price: '¥16,500',
    desc: 'ウェルカムシャンパンとアニバーサリーケーキが付いた特別コース。',
  },
  {
    name: 'Menu C',
    nameJp: 'おまかせコース',
    price: '¥19,800',
    desc: 'シェフ完全おまかせ。ライブクッキングのプレゼンテーションも体験できる最上位コース。',
  },
]

const anniversaryItems = [
  'ウェルカムシャンパン',
  'キャビア "コンパレゾン"',
  '季節の味わいのアンサンブル',
  '仔牛のブランケット',
  '冷製コーンスープ',
  'タチウオ、活車海老、柑橘のエキューム',
  'いいのす農苑 いちじく酢のグラニテ',
  '和牛二種 ―― 伊万里牛フィレ & 黒毛和牛サーロイン',
  '郡上天然鮎のご飯 "アマゾンファゾン"',
  'アニバーサリーケーキ',
  '季節のフルーツデザート',
  'VITRA スタイル 季節のデザート',
  'ミニャルディーズ',
  'パン',
  'コーヒー・紅茶・フレッシュハーブティー',
]

export default function MenuPage() {
  return (
    <div>
      <PageHeader
        title="Menu"
        titleJp="メニュー"
        subtitle="季節の恵みと生産者の想いを、一皿に込めて。全コース完全予約制・ディナーのみ営業。"
      />

      <div className="px-8 md:px-16 pb-24 max-w-4xl">
        {/* Course overview */}
        <section className="mb-20">
          <h2 className="font-display italic text-2xl text-vitra-cream mb-1">Dinner Courses</h2>
          <div className="text-[10px] tracking-[0.3em] text-vitra-muted mb-6">ディナーコース</div>
          <div className="w-8 h-px bg-vitra-gold mb-8" />

          <div className="divide-y divide-vitra-border border border-vitra-border">
            {courses.map((course) => (
              <div
                key={course.name}
                className="grid md:grid-cols-[1fr_auto] gap-4 p-6 md:p-8 hover:bg-vitra-border/20 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-display italic text-vitra-cream text-xl">{course.name}</span>
                    <span className="text-vitra-muted text-xs font-serif">{course.nameJp}</span>
                  </div>
                  <p className="text-vitra-cream/60 text-sm font-serif leading-relaxed">
                    {course.desc}
                  </p>
                </div>
                <div className="shrink-0">
                  <div className="font-display italic text-vitra-gold text-2xl">{course.price}</div>
                  <div className="text-vitra-muted text-[10px] tracking-wider text-right">税込</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-vitra-muted text-xs font-serif mt-6 leading-relaxed border-l-2 border-vitra-border pl-4">
            ご予算やお好みに合わせたカスタムメニューも承ります。
            お気軽にお申し付けください。
          </p>
        </section>

        {/* Anniversary menu detail */}
        <section>
          <h2 className="font-display italic text-2xl text-vitra-cream mb-1">Menu Anniversary</h2>
          <div className="text-[10px] tracking-[0.3em] text-vitra-muted mb-1">
            アニバーサリーメニュー詳細
          </div>
          <div className="w-8 h-px bg-vitra-gold mb-8" />

          <div className="bg-vitra-dark border border-vitra-border p-8 md:p-10">
            <div className="flex items-baseline justify-between mb-10">
              <div className="font-display italic text-3xl text-vitra-cream">Menu Anniversary</div>
              <div className="text-right">
                <div className="font-display italic text-vitra-gold text-2xl">¥16,500</div>
                <div className="text-vitra-muted text-[10px] tracking-wider">税込</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {anniversaryItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-3 border-b border-vitra-border/40"
                >
                  <span className="text-vitra-gold/40 font-display italic text-sm shrink-0 mt-0.5 w-6 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-vitra-cream/80 text-sm font-serif">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
