import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "ACCESS | RESTAURANT VITRA NAGOYA",
  description: "名古屋市千種区覚王山 / RESTAURANT VITRA NAGOYAへのアクセス・地図・駐車場のご案内。",
};

export default function AccessPage() {
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
              ACCESS
            </p>
            <h1
              className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              アクセス
            </h1>
          </div>
        </section>

        {/* Map + Info */}
        <section className="bg-[#FAF8F4] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Map embed */}
              <div className="w-full aspect-[4/3] bg-[#F2EDE3] border border-[#DABCA9] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.7944660453383!2d136.9365!3d35.1566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA5JzIzLjgiTiAxMzbCsDU2JzExLjQiRQ!5e0!3m2!1sja!2sjp!4v1617000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RESTAURANT VITRA NAGOYA の地図"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <h2
                    className="text-[#1a1916] text-3xl font-light"
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                  >
                    RESTAURANT VITRA NAGOYA
                  </h2>
                  <div className="h-px w-16 bg-[#AA894D]" />
                </div>

                {/* Details table */}
                <dl className="flex flex-col gap-8">
                  {[
                    {
                      label: "ADDRESS",
                      labelJP: "住所",
                      value: "〒464-0835\n名古屋市千種区覚王山通3-26",
                    },
                    {
                      label: "TEL",
                      labelJP: "電話番号",
                      value: "052-759-5511",
                      href: "tel:0527595511",
                    },
                    {
                      label: "HOURS",
                      labelJP: "営業時間",
                      value: "17:30 – 20:30（L.O.）",
                    },
                    {
                      label: "CLOSED",
                      labelJP: "定休日",
                      value: "月曜日・第3日曜日",
                    },
                    {
                      label: "ACCESS",
                      labelJP: "交通案内",
                      value: "地下鉄東山線「覚王山」駅 1番出口より徒歩5分",
                    },
                    {
                      label: "PARKING",
                      labelJP: "駐車場",
                      value: "近隣のコインパーキングをご利用ください",
                    },
                  ].map(({ label, labelJP, value, href }) => (
                    <div key={label} className="grid grid-cols-[110px_1fr] gap-4">
                      <dt>
                        <p
                          className="text-[#AA894D] tracking-[0.2em] text-[0.65rem] uppercase"
                          style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-[#8c7e6a] text-[0.7rem] mt-0.5"
                          style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                        >
                          {labelJP}
                        </p>
                      </dt>
                      <dd
                        className="text-sm text-[#1a1916] leading-7 whitespace-pre-line"
                        style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                      >
                        {href ? (
                          <a
                            href={href}
                            className="hover:text-[#AA894D] transition-colors tracking-wider"
                            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Google Maps link */}
                <a
                  href="https://maps.google.com/?q=名古屋市千種区覚王山通3-26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[#AA894D] text-sm tracking-[0.2em] hover:text-[#7a6235] transition-colors mt-2"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  GOOGLE MAPS で開く
                  <span className="text-lg leading-none">↗</span>
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
