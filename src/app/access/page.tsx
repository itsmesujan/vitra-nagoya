'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLocale } from '@/lib/i18n'

// Real Google Maps embed for RESTAURANT VITRA NAGOYA
// 愛知県名古屋市千種区御棚町3-26 (Kakuozan area)
const MAPS_EMBED =
  'https://maps.google.com/maps?q=RESTAURANT+VITRA+NAGOYA+愛知県名古屋市千種区御棚町3-26&output=embed&z=17&hl=ja'

const MAPS_LINK =
  'https://maps.google.com/maps?q=RESTAURANT+VITRA+NAGOYA+愛知県名古屋市千種区御棚町3-26'

const GOOGLE_REVIEWS_LINK =
  'https://maps.google.com/maps?q=RESTAURANT+VITRA+NAGOYA+愛知県名古屋市千種区御棚町3-26#lrd=0x0:0x0,1'

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

export default function AccessPage() {
  const { t } = useLocale()
  const a = t.accessPage

  const details = [
    { labelKey: 'address' as const, value: a.address },
    { labelKey: 'tel' as const, value: a.tel, href: 'tel:0527595511' },
    { labelKey: 'hours' as const, value: a.hours },
    { labelKey: 'closed' as const, value: a.closed },
    { labelKey: 'access' as const, value: a.access },
    { labelKey: 'parking' as const, value: a.parking },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-[#0f0e0c] pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
              {a.eyebrow}
            </p>
            <h1 className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
              {a.title}
            </h1>
          </div>
        </section>

        {/* Map + Info */}
        <section className="bg-[#FAF8F4] py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Google Maps Embed */}
              <div className="flex flex-col gap-4">
                <div className="w-full aspect-[4/3] border border-[#DABCA9] overflow-hidden shadow-sm">
                  <iframe
                    src={MAPS_EMBED}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RESTAURANT VITRA NAGOYA — Google Maps"
                  />
                </div>

                {/* Map action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-[#1a1916] text-[#FAF8F4] text-[0.65rem] tracking-[0.2em] uppercase hover:bg-[#AA894D] hover:text-[#0f0e0c] transition-all duration-300"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {a.openMaps}
                  </a>
                  <a
                    href={GOOGLE_REVIEWS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-[#1a1916]/30 text-[#1a1916]/70 text-[0.65rem] tracking-[0.2em] uppercase hover:border-[#AA894D] hover:text-[#AA894D] transition-all duration-300"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    <GoogleG />
                    {a.googleReviewsLink}
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <h2 className="text-[#1a1916] text-3xl font-light"
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                    RESTAURANT VITRA NAGOYA
                  </h2>
                  <div className="h-px w-16 bg-[#AA894D]" />
                </div>

                <dl className="flex flex-col gap-7">
                  {details.map(({ labelKey, value, href }) => (
                    <div key={labelKey} className="grid grid-cols-[110px_1fr] gap-4">
                      <dt>
                        <p className="text-[#AA894D] tracking-[0.2em] text-[0.6rem] uppercase"
                          style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                          {a.labels[labelKey]}
                        </p>
                      </dt>
                      <dd className="text-sm text-[#1a1916] leading-7 whitespace-pre-line"
                        style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                        {href ? (
                          <a href={href}
                            className="hover:text-[#AA894D] transition-colors tracking-wider"
                            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                            {value}
                          </a>
                        ) : value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Google Maps rating callout */}
                <a
                  href={GOOGLE_REVIEWS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-[#DABCA9] px-5 py-4 hover:border-[#AA894D] transition-colors group"
                >
                  <GoogleG />
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-[#1a1916] font-light"
                        style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                        4.7
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} viewBox="0 0 20 20" fill="#FBBC05" className="w-3.5 h-3.5" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-[#8c7e6a] text-[0.65rem] group-hover:text-[#AA894D] transition-colors"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                      {a.googleReviewsLink} ↗
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sister restaurant */}
        <section className="bg-[#F2EDE3] py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#DABCA9]/50" />
            <a
              href="https://www.anges-nagoya.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AA894D] text-[0.6rem] tracking-[0.2em] uppercase hover:text-[#7a6235] transition-colors"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              KAKUOZAN CHAPELLE DES ANGES ↗
            </a>
            <div className="h-px flex-1 bg-[#DABCA9]/50" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
