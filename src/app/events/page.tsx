import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "EVENTS | RESTAURANT VITRA NAGOYA",
  description: "VITRA NAGOYAのイベント・スペシャルディナー・ワインの夕べなどのお知らせ。",
};

// Static data — replace with Sanity fetch
const events = [
  {
    id: "spring-2026-special",
    date: "2026.05.10",
    month: "MAY",
    day: "10",
    year: "2026",
    dayJP: "日",
    category: "SPECIAL DINNER",
    tag: "受付中",
    title: "春の特別コースディナー",
    description:
      "山菜・桜鯛・春キャベツなど、春の食材をふんだんに使った一夜限りの特別コース。シェフによる料理解説・ペアリングワイン付き。名古屋では滅多に食べられない特別な春の記憶をお届けします。",
    seats: "12席限定",
    price: "¥28,600（税・サービス料込）",
    img: "/images/event-spring.jpg",
  },
  {
    id: "bourgogne-wine-2026",
    date: "2026.05.24",
    month: "MAY",
    day: "24",
    year: "2026",
    dayJP: "日",
    category: "WINE PAIRING",
    tag: "受付中",
    title: "ブルゴーニュ ワインの夕べ",
    description:
      "厳選ブルゴーニュワイン6種とシェフ渾身のマリアージュコース。ソムリエによるワイン解説と、ぶどう畑の物語が交わる特別な夜。ワイン好きの方のためのテーブルです。",
    seats: "10席限定",
    price: "¥33,000（税・サービス料込）",
    img: "/images/event-wine.jpg",
  },
  {
    id: "summer-party-2026",
    date: "2026.06.07",
    month: "JUN",
    day: "07",
    year: "2026",
    dayJP: "日",
    category: "PRIVATE PARTY",
    tag: "要相談",
    title: "プライベートパーティのご案内",
    description:
      "誕生日・記念日・ご接待・同窓会など、特別なシーンのためのプライベートパーティ。貸切・半個室でのご利用が可能です。お気軽にご相談ください。",
    seats: "応相談（最大30名）",
    price: "お見積もり",
    img: "/images/event-party.jpg",
  },
  {
    id: "autumn-truffle-2026",
    date: "2026.10.18",
    month: "OCT",
    day: "18",
    year: "2026",
    dayJP: "日",
    category: "SEASONAL DINNER",
    tag: "近日公開",
    title: "秋のトリュフフルコースディナー",
    description:
      "秋の訪れとともに届くフランス産黒トリュフを主役に添えた、一夜限りの特別フルコース。トリュフの薫香とシェフの技が交わる、秋の最も豊かな夜。",
    seats: "16席限定",
    price: "¥38,500（税・サービス料込）",
    img: "/images/event-autumn.jpg",
  },
];

export default function EventsPage() {
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
              EVENTS & OFFERS
            </p>
            <h1
              className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              イベント・お知らせ
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
                        {events[0].tag}
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
                        {events[0].date}（{events[0].dayJP}）
                      </p>
                      <h2
                        className="text-[#FAF8F4] text-3xl lg:text-4xl font-light"
                        style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                      >
                        {events[0].title}
                      </h2>
                    </div>
                    <p
                      className="text-[#FAF8F4]/50 text-sm leading-8"
                      style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                    >
                      {events[0].description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="h-px bg-[#FAF8F4]/10" />
                    <div className="flex justify-between text-sm">
                      <span className="text-[#FAF8F4]/30" style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>{events[0].seats}</span>
                      <span className="text-[#AA894D] tracking-wider" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>{events[0].price}</span>
                    </div>
                    <Link
                      href={`/events/${events[0].id}`}
                      className="mt-4 w-full text-center py-4 bg-[#AA894D] text-[#0f0e0c] text-sm tracking-[0.2em] hover:bg-[#C9A96E] transition-colors"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      詳細・ご予約
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
                  href={`/events/${event.id}`}
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
                      {event.title}
                    </h3>
                    <p
                      className="text-[#8c7e6a] text-xs leading-6 flex-1 line-clamp-3"
                      style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                    >
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#DABCA9]">
                      <span
                        className="text-[#8c7e6a] text-xs"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                      >
                        {event.seats}
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
