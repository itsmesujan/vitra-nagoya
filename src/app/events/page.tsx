'use client'

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

// Multilingual event data
const EVENTS = [
  {
    id: "spring-2026-special",
    date: "2026.05.10",
    month: "MAY",
    day: "10",
    category: "SPECIAL DINNER",
    tagKey: "open" as const,
    title: { ja: "春の特別コースディナー", en: "Spring Special Course Dinner", fr: "Dîner de Printemps Spécial" },
    description: {
      ja: "山菜・桜鯛・春キャベツなど、春の食材をふんだんに使った一夜限りの特別コース。シェフによる料理解説・ペアリングワイン付き。名古屋では滅多に食べられない特別な春の記憶をお届けします。",
      en: "A one-night-only special course featuring wild herbs, cherry sea bream, and spring cabbage. Chef commentary and wine pairing included. A spring memory you won't find elsewhere in Nagoya.",
      fr: "Un menu unique mettant à l'honneur les produits du printemps : légumes sauvages, dorade rose de cerisier, chou de printemps. Commentaires du chef et accord vin inclus.",
    },
    seats: { ja: "12席限定", en: "12 seats only", fr: "12 places uniquement" },
    price: "¥28,600",
    img: "/images/event-spring.jpg",
  },
  {
    id: "bourgogne-wine-2026",
    date: "2026.05.24",
    month: "MAY",
    day: "24",
    category: "WINE PAIRING",
    tagKey: "open" as const,
    title: { ja: "ブルゴーニュ ワインの夕べ", en: "An Evening of Burgundy Wines", fr: "Une Soirée Vins de Bourgogne" },
    description: {
      ja: "厳選ブルゴーニュワイン6種とシェフ渾身のマリアージュコース。ソムリエによるワイン解説と、ぶどう畑の物語が交わる特別な夜。ワイン好きの方のためのテーブルです。",
      en: "Six carefully selected Burgundy wines paired with the chef's bespoke tasting course. The sommelier narrates each vineyard's story — an evening crafted for wine lovers.",
      fr: "Six vins de Bourgogne soigneusement sélectionnés, accordés à un menu dégustation du chef. Le sommelier vous conte l'histoire de chaque vignoble.",
    },
    seats: { ja: "10席限定", en: "10 seats only", fr: "10 places uniquement" },
    price: "¥33,000",
    img: "/images/event-wine.jpg",
  },
  {
    id: "summer-party-2026",
    date: "2026.06.07",
    month: "JUN",
    day: "07",
    category: "PRIVATE PARTY",
    tagKey: "consult" as const,
    title: { ja: "プライベートパーティのご案内", en: "Private Party Reservation", fr: "Réservation d'Événement Privé" },
    description: {
      ja: "誕生日・記念日・ご接待・同窓会など、特別なシーンのためのプライベートパーティ。貸切・半個室でのご利用が可能です。お気軽にご相談ください。",
      en: "Birthday celebrations, anniversaries, business entertainment, reunions — private and semi-private rooms available. Please contact us to discuss your requirements.",
      fr: "Anniversaires, fêtes, réceptions d'affaires, retrouvailles — location privée ou semi-privée disponible. Contactez-nous pour discuter de vos besoins.",
    },
    seats: { ja: "応相談（最大30名）", en: "Up to 30 guests (please inquire)", fr: "Jusqu'à 30 personnes (nous contacter)" },
    price: { ja: "お見積もり", en: "Quote on request", fr: "Devis sur demande" },
    img: "/images/event-party.jpg",
  },
  {
    id: "autumn-truffle-2026",
    date: "2026.10.18",
    month: "OCT",
    day: "18",
    category: "SEASONAL DINNER",
    tagKey: "soon" as const,
    title: { ja: "秋のトリュフフルコースディナー", en: "Autumn Truffle Full Course Dinner", fr: "Dîner Gastronomique Truffe d'Automne" },
    description: {
      ja: "秋の訪れとともに届くフランス産黒トリュフを主役に添えた、一夜限りの特別フルコース。トリュフの薫香とシェフの技が交わる、秋の最も豊かな夜。",
      en: "A one-night-only full course placing French black truffle at the center of each dish. Where the aroma of truffle meets the chef's craft — the richest evening of autumn.",
      fr: "Un menu complet faisant la part belle à la truffe noire de France. Là où le parfum de la truffe rencontre le savoir-faire du chef — la plus riche des soirées d'automne.",
    },
    seats: { ja: "16席限定", en: "16 seats only", fr: "16 places uniquement" },
    price: "¥38,500",
    img: "/images/event-autumn.jpg",
  },
];

export default function EventsPage() {
  const { locale, t } = useLocale()
  const ev = t.eventsPage
  const events = EVENTS

  // Resolve locale-aware strings
  const loc = (obj: Record<Locale, string>) => obj[locale]
  const locPrice = (price: string | Record<Locale, string>) =>
    typeof price === 'string' ? price : price[locale]

  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative h-[40vh] min-h-[320px] bg-[#0f0e0c] flex items-end pb-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/events-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
            <p
              className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              {ev.eyebrow}
            </p>
            <h1
              className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              {ev.title}
            </h1>
          </div>
        </section>

        {/* Event grid */}
        <section className="bg-[#FAF8F4] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* Featured event */}
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden border border-[#DABCA9]">
                {/* Image */}
                <div className="img-hover-zoom aspect-[4/3] lg:aspect-auto bg-[#1a1916] overflow-hidden">
                  <div
                    className="w-full h-full min-h-[320px] bg-cover bg-center"
                    style={{ backgroundImage: `url('${events[0].img}')` }}
                  />
                </div>
                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-between gap-8 bg-[#0f0e0c]">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <span
                        className="px-3 py-1 border border-[#AA894D] text-[#AA894D] text-[0.6rem] tracking-[0.15em]"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                      >
                        {ev.tags[events[0].tagKey]}
                      </span>
                      <span
                        className="text-[#AA894D]/60 text-[0.65rem] tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                      >
                        {events[0].category}
                      </span>
                    </div>
                    <div>
                      <p
                        className="text-[#AA894D] tracking-[0.15em] text-sm mb-2"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                      >
                        {events[0].date}
                      </p>
                      <h2
                        className="text-[#FAF8F4] text-3xl lg:text-4xl font-light"
                        style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                      >
                        {loc(events[0].title)}
                      </h2>
                    </div>
                    <p
                      className="text-[#FAF8F4]/50 text-sm leading-8"
                      style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                    >
                      {loc(events[0].description)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="h-px bg-[#FAF8F4]/10" />
                    <div className="flex justify-between text-sm">
                      <span className="text-[#FAF8F4]/30" style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>{loc(events[0].seats)}</span>
                      <span className="text-[#AA894D] tracking-wider" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>{locPrice(events[0].price)}</span>
                    </div>
                    <Link
                      href="/reserve"
                      className="mt-4 w-full text-center py-4 bg-[#AA894D] text-[#0f0e0c] text-sm tracking-[0.2em] hover:bg-[#C9A96E] transition-colors"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      {ev.reserveEvent}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining events */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.slice(1).map((event) => (
                <Link
                  key={event.id}
                  href="/reserve"
                  className="group flex flex-col border border-[#DABCA9] overflow-hidden hover:border-[#AA894D] transition-colors"
                >
                  {/* Image */}
                  <div className="img-hover-zoom aspect-[3/2] bg-[#1a1916] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${event.img}')` }}
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1 bg-white">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[#AA894D]/60 text-[0.6rem] tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                      >
                        {event.category}
                      </span>
                    </div>
                    <p
                      className="text-[#AA894D] text-xs tracking-wider"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      {event.date}
                    </p>
                    <h3
                      className="text-[#1a1916] text-xl font-light group-hover:text-[#AA894D] transition-colors"
                      style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                    >
                      {loc(event.title)}
                    </h3>
                    <p
                      className="text-[#8c7e6a] text-xs leading-6 flex-1 line-clamp-3"
                      style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                    >
                      {loc(event.description)}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#DABCA9]">
                      <span
                        className="text-[#8c7e6a] text-xs"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                      >
                        {loc(event.seats)}
                      </span>
                      <span className="text-[#AA894D] text-sm group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
