'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLocale } from '@/lib/i18n'

const COURSES = [
  {
    id: 'menu-a',
    label: 'Menu A',
    price: '¥ 9,900',
    img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=900&q=85&auto=format&fit=crop',
    category: { ja: 'DÉJEUNER / DÎNER', en: 'DÉJEUNER / DÎNER', fr: 'DÉJEUNER / DÎNER' },
    tag: { ja: 'スタンダード', en: 'Standard', fr: 'Standard' },
    name: { ja: '季節の旬のコース', en: 'Seasonal Course', fr: 'Menu Saisonnier' },
    desc: {
      ja: '旬の素材を活かした、心温まるスタンダードコース。フレンチをベースに日本のおもてなしの心が息づくVITRAスタイルで、季節の一皿をお届けします。',
      en: 'A heartwarming standard course celebrating the best seasonal ingredients. Delivered in VITRA style — French technique infused with Japanese hospitality.',
      fr: "Un menu standard chaleureux célébrant les meilleurs ingrédients de saison. Dans le style VITRA — technique française imprégnée de l'hospitalité japonaise.",
    },
    items: {
      ja: ['アミューズ・ブーシュ', '旬の前菜', 'スープ', '魚料理 または 肉料理', 'グラニテ', 'デザート', '食後のお楽しみ', 'パン', 'コーヒー・紅茶 または フレッシュハーブティー'],
      en: ['Amuse-Bouche', 'Seasonal Appetizer', 'Soup', 'Fish or Meat', 'Granité', 'Dessert', 'Post-course Petits Fours', 'Bread', 'Coffee, Tea or Fresh Herb Tea'],
      fr: ['Amuse-Bouche', 'Entrée de saison', 'Soupe', 'Poisson ou viande', 'Granité', 'Dessert', 'Mignardises', 'Pain', 'Café, thé ou infusion fraîche'],
    },
  },
  {
    id: 'menu-b',
    label: 'Menu B',
    price: '¥ 14,300',
    img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900&q=85&auto=format&fit=crop',
    category: { ja: 'DÎNER', en: 'DÎNER', fr: 'DÎNER' },
    tag: { ja: '少しずつ多種類', en: 'Small Tastes, Many Varieties', fr: 'Petites Portions Variées' },
    name: { ja: '季節と旬を楽しむコース', en: 'Seasonal Tasting Course', fr: 'Menu Dégustation Saisonnier' },
    desc: {
      ja: '少しずつたくさんの種類をお楽しみいただけるスタンダードコース。季節の彩りを存分にご堪能いただける構成です。',
      en: 'The standard course allowing you to enjoy many small tastes — arranged to let you savor the full spectrum of seasonal flavors.',
      fr: 'Le menu standard permettant de profiter de nombreuses petites saveurs. Conçu pour savourer tout le spectre saisonnier.',
    },
    items: {
      ja: ['キャヴィア「コンパレゾン」', '旬の味覚　アンサンブル', '仔牛のブランケット', 'トウモロコシの冷たいスープ', 'タチウオ　活車海老　柑橘のエキューム', '飯尾醸造　無花果酢のグラニテ', '和牛2種の味わい', '郡上産　天然鮎御飯「アマファソン」', '旬フルーツの小さなデセール', '旬のデセール「ヴィトラ　スタイル」', '食後の愉しみ', 'パン', 'コーヒー・紅茶 または フレッシュハーブティー'],
      en: ['Caviar "Comparaison"', 'Seasonal Tastes Ensemble', 'Blanquette of Veal', 'Cold Corn Soup', 'Tachiuo, Live Kuruma Shrimp, Citrus Écume', 'Iio Jozo Fig Vinegar Granité', 'Two Wagyu Tastings', 'Wild Ayu Rice from Gujo "Amafa Son"', 'Small Seasonal Fruit Dessert', 'Seasonal Dessert "VITRA Style"', 'Post-course Pleasures', 'Bread', 'Coffee, Tea or Fresh Herb Tea'],
      fr: ['Caviar « Comparaison »', 'Ensemble de saveurs saisonnières', 'Blanquette de veau', 'Soupe froide de maïs', "Tachiuo, Crevette kuruma vivante, Écume d'agrumes", 'Granité au vinaigre de figue Iio Jozo', 'Deux dégustations de wagyu', "Riz à l'ayu sauvage de Gujo « Amafa Son »", 'Petit dessert aux fruits de saison', 'Dessert de saison « Style VITRA »', 'Mignardises', 'Pain', 'Café, thé ou infusion fraîche'],
    },
  },
  {
    id: 'menu-v',
    label: 'Menu V ★',
    price: '¥ 16,500',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=85&auto=format&fit=crop',
    category: { ja: 'ANNIVERSARY', en: 'ANNIVERSARY', fr: 'ANNIVERSAIRE' },
    tag: { ja: '★ 人気No.1 / 記念日おすすめ', en: '★ Most Popular / For Celebrations', fr: '★ Le Plus Populaire / Pour les célébrations' },
    name: { ja: 'アニバーサリーコース', en: 'Anniversary Course', fr: 'Menu Anniversaire' },
    badge: { ja: '人気No.1', en: 'Most Popular', fr: 'Le Plus Populaire' },
    desc: {
      ja: 'お誕生日・結婚記念日など各種お祝いにおすすめのコース。ウェルカムシャンパーニュとアニヴァーサリーケーキが付いた、特別な夜のためのコース。',
      en: 'Recommended for birthdays, anniversaries, and all celebrations. With welcome Champagne and anniversary cake — a special course for a special evening.',
      fr: "Recommandé pour les anniversaires et toutes les célébrations. Avec Champagne de bienvenue et gâteau — un menu spécial pour une soirée spéciale.",
    },
    items: {
      ja: ['ウェルカムシャンパーニュ', 'キャヴィア「コンパレゾン」', '旬の味覚　アンサンブル', '仔牛のブランケット', 'トウモロコシの冷たいスープ', 'タチウオ　活車海老　柑橘のエキューム', '飯尾醸造　無花果酢のグラニテ', '2種のあじわい　伊万里牛フィレ肉と黒毛和牛サーロイン', '郡上産　天然鮎御飯「アマファソン」', 'アニヴァーサリーケーキ', '旬フルーツの小さなデセール', '季節のデセール「ヴィトラ　スタイル」', '食後のお愉しみ', 'パン', 'コーヒー・紅茶 または フレッシュハーブティー'],
      en: ['Welcome Champagne', 'Caviar "Comparaison"', 'Seasonal Tastes Ensemble', 'Blanquette of Veal', 'Cold Corn Soup', 'Tachiuo, Live Kuruma Shrimp, Citrus Écume', 'Iio Jozo Fig Vinegar Granité', 'Two Tastings: Imari Beef Fillet & Kuroge Wagyu Sirloin', 'Wild Ayu Rice from Gujo "Amafa Son"', 'Anniversary Cake', 'Small Seasonal Fruit Dessert', 'Seasonal Dessert "VITRA Style"', 'Post-course Pleasures', 'Bread', 'Coffee, Tea or Fresh Herb Tea'],
      fr: ['Champagne de bienvenue', 'Caviar « Comparaison »', 'Ensemble de saveurs saisonnières', 'Blanquette de veau', 'Soupe froide de maïs', "Tachiuo, Crevette kuruma vivante, Écume d'agrumes", 'Granité au vinaigre de figue Iio Jozo', 'Deux dégustations : filet de bœuf Imari & aloyau Kuroge wagyu', "Riz à l'ayu sauvage de Gujo « Amafa Son »", "Gâteau d'anniversaire", 'Petit dessert aux fruits de saison', "Dessert de saison « Style VITRA »", 'Mignardises', 'Pain', 'Café, thé ou infusion fraîche'],
    },
  },
  {
    id: 'menu-c',
    label: 'Menu C',
    price: '¥ 19,800',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=85&auto=format&fit=crop',
    category: { ja: "CHEF'S OMAKASE", en: "CHEF'S OMAKASE", fr: 'OMAKASE DU CHEF' },
    tag: { ja: 'シェフおまかせ', en: "Chef's Selection", fr: 'Sélection du Chef' },
    name: { ja: 'シェフおまかせフルコース', en: "Chef's Omakase Full Course", fr: "Menu Omakase du Chef" },
    desc: {
      ja: 'シェフの感性と、その日最上の食材で組み上げるおまかせのフルコース。ライブ感あふれる特別な夜のためのVITRA最上のテーブル体験。',
      en: "A full omakase course composed from the chef's sensibility and the finest ingredients of the day. VITRA's highest table experience.",
      fr: "Un menu omakase complet composé selon la sensibilité du chef et les meilleurs ingrédients du jour. L'expérience de table la plus élevée de VITRA.",
    },
    items: {
      ja: ['シェフのアミューズ × 3', '旬の前菜 × 2', 'キャヴィア「コンパレゾン」', 'お椀 / スープ', '中間料理', '魚料理', '飯尾醸造　無花果酢のグラニテ', '肉料理（伊万里牛または黒毛和牛）', '郡上産　天然鮎御飯「アマファソン」', '旬フルーツの小さなデセール', '季節のデセール「ヴィトラ　スタイル」', '食後のお愉しみ（ミニャルディーズ）', 'パン', 'コーヒー・紅茶 または フレッシュハーブティー'],
      en: ["Chef's Amuse-Bouche × 3", 'Seasonal Appetizers × 2', 'Caviar "Comparaison"', 'Soup / Broth', 'Intermezzo', 'Fish Course', 'Iio Jozo Fig Vinegar Granité', 'Meat Course (Imari Beef or Kuroge Wagyu)', 'Wild Ayu Rice from Gujo "Amafa Son"', 'Small Seasonal Fruit Dessert', 'Seasonal Dessert "VITRA Style"', 'Post-course Pleasures (Mignardises)', 'Bread', 'Coffee, Tea or Fresh Herb Tea'],
      fr: ["Amuse-bouches du chef × 3", 'Entrées saisonnières × 2', 'Caviar « Comparaison »', 'Potage / Bouillon', 'Intermezzo', 'Poisson', 'Granité au vinaigre de figue Iio Jozo', 'Viande (bœuf Imari ou Kuroge wagyu)', "Riz à l'ayu sauvage de Gujo « Amafa Son »", 'Petit dessert aux fruits de saison', "Dessert de saison « Style VITRA »", 'Mignardises', 'Pain', 'Café, thé ou infusion fraîche'],
    },
  },
]

export default function MenuPage() {
  const { locale, t } = useLocale()
  const m = t.menuPage

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[45vh] min-h-[340px] bg-[#0f0e0c] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=85&auto=format&fit=crop"
              alt="VITRA NAGOYA menus"
              fill
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
            <p className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
              {m.eyebrow}
            </p>
            <h1 className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
              {m.title}
            </h1>
          </div>
        </section>

        {/* Note */}
        <section className="bg-[#FAF8F4] py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <p className="text-[#8c7e6a] text-sm leading-9"
              style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
              {m.note}
            </p>
          </div>
        </section>

        {/* Wine pairing strip */}
        <section className="bg-[#1a1916] py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 flex-wrap">
              <p className="text-[#AA894D] text-[0.6rem] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                {m.pairingTitle}
              </p>
              {[m.pairingAlcohol, m.pairingFree].map((p) => (
                <p key={p} className="text-[#FAF8F4]/60 text-[0.75rem] tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                  {p}
                </p>
              ))}
              <Link href="/wine"
                className="text-[#AA894D] text-[0.65rem] tracking-[0.2em] uppercase hover:text-[#C9A96E] transition-colors flex items-center gap-1"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                {m.wineLink} →
              </Link>
            </div>
          </div>
        </section>

        {/* Course sections */}
        {COURSES.map((course, i) => {
          const isEven = i % 2 === 0
          return (
            <section
              key={course.id}
              id={course.id}
              className={`py-20 lg:py-28 ${isEven ? 'bg-[#FAF8F4]' : 'bg-[#F2EDE3]'}`}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Image */}
                  <div className={`img-hover-zoom relative aspect-[4/3] overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                    <Image
                      src={course.img}
                      alt={course.name[locale]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {'badge' in course && course.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#AA894D] text-[#0f0e0c] text-[0.55rem] tracking-[0.15em] uppercase z-10"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                        {(course.badge as Record<string, string>)[locale]}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col gap-6 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <p className="text-[#AA894D]/60 tracking-[0.3em] text-[0.6rem] uppercase mb-1"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                        {course.category[locale]}
                      </p>
                      <p className="text-[#AA894D] tracking-[0.2em] text-[0.8rem] uppercase mb-3"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                        {course.label}
                      </p>
                      <h2 className="text-[#1a1916] text-3xl lg:text-4xl font-light"
                        style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                        {course.name[locale]}
                      </h2>
                    </div>

                    <span className="inline-block px-3 py-1 border border-[#AA894D]/50 text-[#8c7e6a] text-[0.6rem] tracking-[0.15em] self-start"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                      {course.tag[locale]}
                    </span>

                    <p className="text-[#8c7e6a] text-sm leading-8"
                      style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                      {course.desc[locale]}
                    </p>

                    {/* Course items */}
                    <div className="border-t border-[#DABCA9] pt-6">
                      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#AA894D]/50 mb-4"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                        {m.courseContents}
                      </p>
                      <ol className="flex flex-col gap-2">
                        {course.items[locale].map((item, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm text-[#8c7e6a]"
                            style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                            <span className="text-[#AA894D]/35 text-[0.6rem] w-5 tabular-nums shrink-0"
                              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                              {String(j + 1).padStart(2, '0')}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-3xl text-[#1a1916] tracking-wider"
                        style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                        {course.price}
                      </p>
                      <Link href="/reserve"
                        className="px-6 py-3 bg-[#AA894D] text-[#0f0e0c] text-[0.6rem] tracking-[0.2em] uppercase hover:bg-[#C9A96E] transition-colors"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                        {t.shared.reserve}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* Footer notes */}
        <section className="bg-[#F2EDE3] py-12">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 flex flex-col gap-3">
            {[m.seasonal, m.note2].map((note, i) => (
              <p key={i} className="text-[#8c7e6a] text-[0.75rem] leading-8"
                style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                {note}
              </p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
