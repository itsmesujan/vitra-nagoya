import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Static data — replace with Sanity query
const courses = [
  {
    id: "lunch",
    season: "SPRING 2026",
    category: "DÉJEUNER",
    nameJP: "ランチコース",
    price: "¥6,600〜",
    tag: "平日限定",
    description:
      "春の野菜と鮮魚を中心に、彩り豊かな構成でお届けする昼のコース。フランス料理の技法で仕上げた季節の料理を、肩肘張らずにお楽しみいただけます。",
    courses: [
      "アミューズ・ブーシュ",
      "前菜",
      "スープ",
      "メイン（魚 or 肉）",
      "デザート",
      "コーヒー・お茶",
    ],
  },
  {
    id: "dinner",
    season: "SPRING 2026",
    category: "DÎNER",
    nameJP: "ディナーコース",
    price: "¥15,400〜",
    tag: "要予約",
    description:
      "生産者の想いを纏った食材を主役に、シェフがその日最高の一皿を表現するディナーコース。豊かな時間の中で、食の記憶を刻んでいただけるよう構成しています。",
    courses: [
      "アミューズ・ブーシュ × 2",
      "前菜 × 2",
      "スープ",
      "魚料理",
      "肉料理",
      "チーズ（オプション）",
      "デザート × 2",
      "コーヒー・お茶 & 小菓子",
    ],
  },
  {
    id: "special",
    season: "LIMITED",
    category: "CHEF'S SPECIAL",
    nameJP: "シェフズスペシャル",
    price: "¥22,000〜",
    tag: "数量限定",
    description:
      "その日届いた最上の食材のみでシェフが構成するおまかせコース。メニューはない。ただ、最善の一皿があるだけ。特別な夜にふさわしい、ヴィトラ最上のテーブル体験です。",
    courses: [
      "シェフのアミューズ × 3",
      "季節の前菜 × 3",
      "お椀/スープ",
      "中間料理",
      "魚料理",
      "肉料理",
      "プレデセール",
      "デザート × 2",
      "コーヒー & ミニャルディーズ",
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="relative h-[40vh] min-h-[320px] bg-[#0f0e0c] flex items-end pb-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/menu-hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">
            <p
              className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              MENU
            </p>
            <h1
              className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              料理とコース
            </h1>
          </div>
        </section>

        {/* Introductory note */}
        <section className="bg-[#FAF8F4] py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <p
              className="text-[#8c7e6a] text-sm leading-9"
              style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
            >
              コースの内容は食材の入荷状況により変わります。ご予約時にアレルギー・ご要望をお聞かせください。
              料金はすべてサービス料・税込み価格です。
            </p>
          </div>
        </section>

        {/* Courses */}
        {courses.map((course, i) => (
          <section
            key={course.id}
            id={course.id}
            className={`py-20 lg:py-28 ${i % 2 === 0 ? "bg-[#FAF8F4]" : "bg-[#F2EDE3]"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Image */}
                <div
                  className={`img-hover-zoom aspect-[4/3] bg-[#1a1916] overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/menu-${course.id}.jpg')` }}
                  />
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-6 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div>
                    <p
                      className="text-[#AA894D]/70 tracking-[0.3em] text-[0.65rem] uppercase mb-1"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      {course.season}
                    </p>
                    <p
                      className="text-[#AA894D] tracking-[0.25em] text-[0.8rem] uppercase mb-3"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      {course.category}
                    </p>
                    <h2
                      className="text-[#1a1916] text-3xl lg:text-4xl font-light"
                      style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                    >
                      {course.nameJP}
                    </h2>
                  </div>

                  <p
                    className="text-[#8c7e6a] text-sm leading-8"
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                  >
                    {course.description}
                  </p>

                  {/* Course items */}
                  <div className="border-t border-[#DABCA9] pt-6">
                    <p
                      className="text-[0.65rem] tracking-[0.2em] uppercase text-[#AA894D]/60 mb-4"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      COURSE CONTENTS
                    </p>
                    <ol className="flex flex-col gap-2">
                      {course.courses.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-[#8c7e6a]" style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                          <span className="text-[#AA894D]/40 text-[0.65rem] w-4 tabular-nums" style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Price & tag */}
                  <div className="flex items-center justify-between pt-2">
                    <p
                      className="text-2xl text-[#1a1916] tracking-wider"
                      style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                    >
                      {course.price}
                    </p>
                    <span
                      className="px-3 py-1 border border-[#AA894D] text-[#AA894D] text-[0.6rem] tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      {course.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
