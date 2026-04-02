'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLocale } from '@/lib/i18n'

// Real drinks data from nagoya.vitra.jp/wine.html
const PAIRING = [
  { key: 'alcoholPairing', price: '¥ 6,050', detail: { ja: '5種類の料理とペアリング', en: '5-course wine pairing', fr: 'Accord 5 plats avec vins' } },
  { key: 'freePairing', price: '¥ 4,950', detail: { ja: '5種類の料理とノンアルコールのペアリング', en: '5-course non-alcoholic pairing', fr: 'Accord 5 plats sans alcool' } },
]

const ALCOHOL = [
  { nameJP: 'グラス シャンパーニュ', nameEN: 'Glass Champagne', nameFR: 'Coupe de Champagne', price: '¥ 2,090〜', key: 'champagne' },
  { nameJP: 'グラス 白ワイン', nameEN: 'Glass White Wine', nameFR: 'Verre de Vin Blanc', price: '¥ 1,980〜', key: 'white' },
  { nameJP: 'グラス 赤ワイン', nameEN: 'Glass Red Wine', nameFR: 'Verre de Vin Rouge', price: '¥ 1,980〜', key: 'red' },
  { nameJP: 'グラス 貴腐ワイン', nameEN: 'Glass Sweet Wine', nameFR: 'Verre de Vin Liquoreux', price: '¥ 1,540〜', key: 'sweet' },
  { nameJP: 'クラフトビール', nameEN: 'Craft Beer', nameFR: 'Bière Artisanale', price: '¥ 990', key: 'beer' },
]

const NON_ALCOHOL = [
  { nameJP: 'ノンアルコール スパークリングジュース', nameEN: 'Alcohol-free Sparkling Juice', nameFR: 'Jus Pétillant Sans Alcool', price: '¥ 1,320', key: 'spark' },
  { nameJP: 'ガス入りミネラルウォーター', nameEN: 'Carbonated Mineral Water', nameFR: 'Eau Minérale Gazeuse', price: '¥ 880', key: 'water' },
  { nameJP: 'テ・ドール 各種', nameEN: "Thé d'Or (Assorted)", nameFR: "Thé d'Or (Assortiment)", price: '¥ 1,430', key: 'te' },
  { nameJP: 'ロイヤルブルーティー 各種', nameEN: 'Royal Blue Tea (Assorted)', nameFR: 'Royal Blue Tea (Assortiment)', price: '¥ 1,430', key: 'rbt' },
  { nameJP: '谷井農園 プレミアム温州みかんジュース', nameEN: 'Tanii Farm Premium Unshu Mandarin Juice', nameFR: 'Jus de Mandarine Premium Tanii Farm', price: '¥ 1,210', key: 'oj' },
  { nameJP: '愛媛県宇和島産 ブラッドオレンジジュース', nameEN: 'Ehime Uwajima Blood Orange Juice', nameFR: "Jus d'Orange Sanguine Uwajima (Ehime)", price: '¥ 1,210', key: 'boj' },
  { nameJP: 'ノンアルコールワイン シャルドネ', nameEN: 'Non-alcoholic Chardonnay', nameFR: 'Chardonnay Sans Alcool', price: '¥ 1,210', key: 'chardonnay' },
  { nameJP: 'ノンアルコールワイン ブラッククイーン', nameEN: 'Non-alcoholic Black Queen', nameFR: 'Black Queen Sans Alcool', price: '¥ 1,210', key: 'bq' },
  { nameJP: '長野県 ふじ品種 すりおろしりんごジュース', nameEN: 'Nagano Fuji Apple Juice', nameFR: 'Jus de Pomme Fuji du Nagano', price: '¥ 1,100', key: 'apple' },
  { nameJP: 'ノンアルコール ビール', nameEN: 'Non-alcoholic Beer', nameFR: 'Bière Sans Alcool', price: '¥ 880', key: 'nabeer' },
]

export default function WinePage() {
  const { locale, t } = useLocale()
  const w = t.winePage

  type Locale = typeof locale
  const nameKey: Record<Locale, 'nameJP' | 'nameEN' | 'nameFR'> = { ja: 'nameJP', en: 'nameEN', fr: 'nameFR' }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0f0e0c] pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
              {w.eyebrow}
            </p>
            <h1 className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
              {w.title}
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-[#FAF8F4] py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center flex flex-col gap-5">
            <p className="text-[#8c7e6a] text-sm leading-9"
              style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
              {w.intro}
            </p>
            <p className="text-[#8c7e6a] text-sm leading-9"
              style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
              {w.intro2}
            </p>
            <div>
              <a
                href="/wine_list.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#AA894D] text-[#AA894D] px-6 py-3 text-[0.65rem] tracking-[0.2em] uppercase hover:bg-[#AA894D] hover:text-[#0f0e0c] transition-all"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
              >
                ↓ {w.pdfLink}
              </a>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-[#1a1916] py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-3 divide-x divide-[#AA894D]/20 text-center">
              {[
                { num: '400+', label: { ja: 'ワイン銘柄', en: 'Wine Labels', fr: 'Références de Vin' } },
                { num: '60+', label: { ja: 'シャンパーニュ銘柄', en: 'Champagne Labels', fr: 'Références de Champagne' } },
                { num: '∞', label: { ja: 'ビオワイン', en: 'Biodynamic Wines', fr: 'Vins Biodynamiques' } },
              ].map((stat) => (
                <div key={stat.num} className="py-6 flex flex-col gap-2">
                  <p className="text-[#AA894D] text-4xl font-light"
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                    {stat.num}
                  </p>
                  <p className="text-[#FAF8F4]/40 text-[0.6rem] tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                    {stat.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pairing */}
        <section className="bg-[#F2EDE3] py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <p className="text-[#AA894D] tracking-[0.35em] text-[0.65rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
              {w.pairingTitle}
            </p>
            <h2 className="text-[#1a1916] text-3xl lg:text-4xl font-light mb-8"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
              {w.pairingTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PAIRING.map((item) => (
                <div key={item.key} className="bg-white border border-[#DABCA9] px-7 py-7 flex flex-col gap-3">
                  <p className="text-2xl font-light text-[#AA894D]"
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                    {item.price}
                  </p>
                  <p className="text-[#8c7e6a] text-sm leading-7"
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                    {item.detail[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drinks by category */}
        {[
          { title: w.alcoholTitle, items: ALCOHOL },
          { title: w.nonAlcoholTitle, items: NON_ALCOHOL },
        ].map(({ title, items }) => (
          <section key={title} className="bg-[#FAF8F4] py-12 lg:py-16 border-t border-[#DABCA9]/40">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
              <p className="text-[#AA894D] tracking-[0.3em] text-[0.65rem] uppercase mb-8"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                {title}
              </p>
              <div className="flex flex-col divide-y divide-[#DABCA9]/40">
                {items.map((item) => (
                  <div key={item.key} className="flex items-center justify-between py-4 gap-4">
                    <p className="text-[#1a1916] text-sm"
                      style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                      {item[nameKey[locale]]}
                    </p>
                    <p className="text-[#AA894D] text-base font-light shrink-0"
                      style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}
