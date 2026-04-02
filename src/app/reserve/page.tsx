import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "RESERVATION | RESTAURANT VITRA NAGOYA",
  description: "RESTAURANT VITRA NAGOYAのご予約・お問い合わせフォーム。",
};

export default function ReservePage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-[#0f0e0c] pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p
              className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              RESERVATION
            </p>
            <h1
              className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              ご予約
            </h1>
          </div>
        </section>

        {/* Form section */}
        <section className="bg-[#FAF8F4] py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            {/* Intro */}
            <div className="flex flex-col gap-5 mb-14 text-center">
              <p
                className="text-[#8c7e6a] text-sm leading-9"
                style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
              >
                ご予約はお電話（{" "}
                <a href="tel:0527595511" className="text-[#AA894D] hover:underline" style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                  052-759-5511
                </a>
                {" "}）またはウェブフォームより承っております。
                アレルギー・ご要望がある場合は、フォームのご要望欄にご記入ください。
              </p>
              <p
                className="text-[#DABCA9] text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
              >
                受付時間：17:30 – 20:30 ／ 定休：月曜・第3日曜日
              </p>
            </div>

            {/* Reservation form */}
            <form
              action="/"
              method="POST"
              className="flex flex-col gap-8"
              aria-label="予約フォーム"
            >
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="last-name"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    お名前（姓）<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] placeholder:text-[#DABCA9] focus:outline-none focus:border-[#AA894D] transition-colors"
                    placeholder="山田"
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="first-name"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    お名前（名）<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] placeholder:text-[#DABCA9] focus:outline-none focus:border-[#AA894D] transition-colors"
                    placeholder="太郎"
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                  />
                </div>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="date"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    ご来店日<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] focus:outline-none focus:border-[#AA894D] transition-colors"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="guests"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    人数<span className="text-red-400 ml-1">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] focus:outline-none focus:border-[#AA894D] transition-colors appearance-none"
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                  >
                    <option value="">お選びください</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n}名</option>
                    ))}
                    <option value="9+">9名以上（要相談）</option>
                  </select>
                </div>
              </div>

              {/* Course */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="course"
                  className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  ご希望コース
                </label>
                <select
                  id="course"
                  name="course"
                  className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] focus:outline-none focus:border-[#AA894D] transition-colors appearance-none"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                >
                  <option value="">お選びください（未定可）</option>
                  <option value="lunch">ランチコース（平日限定）¥6,600〜</option>
                  <option value="dinner">ディナーコース ¥15,400〜</option>
                  <option value="special">シェフズスペシャル ¥22,000〜</option>
                  <option value="undecided">未定・相談したい</option>
                </select>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    メールアドレス<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] placeholder:text-[#DABCA9] focus:outline-none focus:border-[#AA894D] transition-colors"
                    placeholder="example@email.com"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    電話番号
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] placeholder:text-[#DABCA9] focus:outline-none focus:border-[#AA894D] transition-colors"
                    placeholder="090-0000-0000"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  ご要望・アレルギー等
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] placeholder:text-[#DABCA9] focus:outline-none focus:border-[#AA894D] transition-colors resize-none"
                  placeholder="アレルギー情報、記念日のご相談、その他ご要望があればご記入ください。"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col items-center gap-4 mt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-16 py-4 bg-[#1a1916] text-[#FAF8F4] text-sm tracking-[0.25em] hover:bg-[#AA894D] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  送信する
                </button>
                <p
                  className="text-[#DABCA9] text-[0.65rem] tracking-widest text-center"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  ※ ご確認のメールをお送りします。24時間以内にご連絡がない場合はお電話ください。
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
