'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/lib/i18n'

const events = [
  {
    id: 'spring-2026-special',
    date: '2026.05.10',
    month: 'MAY',
    day: '10',
    category: 'SPECIAL DINNER',
    tagKey: 'open' as const,
    title: { ja: '春の特別コースディナー', en: 'Spring Special Course Dinner', fr: 'Dîner Spécial de Printemps' },
    description: {
      ja: '山菜・桜鯛・春キャベツなど、春の食材をふんだんに使った一夜限りの特別コース。シェフによる料理解説・ペアリングワイン付き。',
      en: 'A one-night special course celebrating spring ingredients — wild vegetables, cherry sea bream, spring cabbage. Includes chef commentary and wine pairing.',
      fr: "Un menu spécial d'une nuit célébrant les ingrédients du printemps — légumes sauvages, daurade cerise, chou printanier. Avec commentaires du chef et accord mets-vins.",
    },
    seats: { ja: '12席限定', en: '12 seats', fr: '12 places' },
    price: '¥28,600',
    img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'bourgogne-wine-2026',
    date: '2026.05.24',
    month: 'MAY',
    day: '24',
    category: 'WINE PAIRING',
    tagKey: 'open' as const,
    title: { ja: 'ブルゴーニュ ワインの夕べ', en: 'Burgundy Wine Evening', fr: 'Soirée Vins de Bourgogne' },
    description: {
      ja: '厳選ブルゴーニュワイン6種とシェフ渾身のマリアージュコース。ソムリエによるワイン解説と、ぶどう畑の物語が交わる特別な夜。',
      en: 'Six selected Burgundy wines paired with the chef\'s crafted tasting menu. The sommelier narrates each vineyard\'s story through the evening.',
      fr: "Six vins de Bourgogne sélectionnés accompagnés d'un menu dégustation élaboré par le chef. Le sommelier raconte l'histoire de chaque domaine.",
    },
    seats: { ja: '10席限定', en: '10 seats', fr: '10 places' },
    price: '¥33,000',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'autumn-truffle-2026',
    date: '2026.10.18',
    month: 'OCT',
    day: '18',
    category: 'SEASONAL DINNER',
    tagKey: 'soon' as const,
    title: { ja: '秋のトリュフフルコースディナー', en: 'Autumn Truffle Full Course', fr: "Dîner Truffe d'Automne" },
    description: {
      ja: '秋の訪れとともに届くフランス産黒トリュフを主役に添えた、一夜限りのフルコース。トリュフの薫香とシェフの技が交わる、秋の最も豊かな夜。',
      en: "A full course celebrating French black truffle delivered at autumn's arrival. The fragrance of truffle and the chef's technique create autumn's most sumptuous evening.",
      fr: "Un menu complet célébrant la truffe noire française à l'arrivée de l'automne. Le parfum de la truffe et la technique du chef créent la soirée la plus somptueuse de l'automne.",
    },
    seats: { ja: '16席限定', en: '16 seats', fr: '16 places' },
    price: '¥38,500',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=85&auto=format&fit=crop',
  },
]

export default function EventsPreview() {
  const { locale, t } = useLocale()

  const tagLabel = (key: 'open' | 'consult' | 'soon') => t.eventsPage.tags[key]

  return (
    <section className="bg-[#FAF8F4] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4">
            <p
              className="text-[#AA894D] tracking-[0.4em] text-[0.65rem] uppercase"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              {t.eventsPage.eyebrow}
            </p>
            <h2
              className="text-[#1a1916] text-4xl lg:text-5xl font-light"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              {t.eventsPage.title}
            </h2>
          </div>
          <Link
            href="/events"
            className="text-[#AA894D] text-[0.65rem] tracking-[0.25em] uppercase hover:text-[#7a6235] transition-colors flex items-center gap-2 shrink-0"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {t.shared.seeAll} <span>→</span>
          </Link>
        </div>

        {/* Events list */}
        <div className="flex flex-col gap-px bg-[#DABCA9]/30">
          {events.map((event) => (
            <article
              key={event.id}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] overflow-hidden bg-[#FAF8F4] hover:bg-[#F2EDE3] transition-colors duration-300 group"
            >
              {/* Date column */}
              <div className="relative aspect-[16/7] lg:aspect-auto overflow-hidden img-hover-zoom bg-[#1a1916]">
                <Image
                  src={event.img}
                  alt={event.title[locale]}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 200px"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <span
                    className="text-[#AA894D] text-[0.55rem] tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    {event.month}
                  </span>
                  <span
                    className="text-[#FAF8F4] text-4xl font-light leading-none"
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  >
                    {event.day}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-4 justify-center">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-[#AA894D] text-[0.6rem] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    {event.category}
                  </span>
                  <span
                    className="px-2 py-0.5 border border-[#AA894D]/50 text-[#AA894D] text-[0.55rem] tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    {tagLabel(event.tagKey)}
                  </span>
                </div>

                <h3
                  className="text-[#1a1916] text-2xl lg:text-3xl font-light"
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                >
                  {event.title[locale]}
                </h3>

                <p
                  className="text-[#8c7e6a] text-[0.8rem] leading-7 line-clamp-2"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                >
                  {event.description[locale]}
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <p
                    className="text-[#1a1916] text-xl font-light"
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  >
                    {event.price}
                    <span
                      className="text-[#8c7e6a] text-[0.7rem] ml-2 tracking-[0.05em]"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      {event.seats[locale]}
                    </span>
                  </p>
                  <Link
                    href="/reserve"
                    className="text-[#AA894D] text-[0.65rem] tracking-[0.2em] uppercase hover:text-[#7a6235] transition-colors flex items-center gap-1.5"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    {t.eventsPage.reserveEvent} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
