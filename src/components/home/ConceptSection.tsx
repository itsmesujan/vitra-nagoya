'use client'

import Image from 'next/image'
import { useLocale } from '@/lib/i18n'

export default function ConceptSection() {
  const { t } = useLocale()

  const cols = [
    { title: t.concept.col1_title, body: t.concept.col1_body, num: '01' },
    { title: t.concept.col2_title, body: t.concept.col2_body, num: '02' },
    { title: t.concept.col3_title, body: t.concept.col3_body, num: '03' },
  ]

  return (
    <section className="bg-[#FAF8F4] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Two-column: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">

          {/* Text */}
          <div className="flex flex-col gap-8">
            <div>
              <p
                className="text-[#AA894D] tracking-[0.35em] text-[0.65rem] uppercase mb-4"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
              >
                {t.concept.eyebrow}
              </p>
              <h2
                className="text-[#1a1916] text-4xl lg:text-5xl font-light tracking-[0.03em] leading-snug"
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              >
                {t.concept.title}
              </h2>
            </div>

            <div className="w-10 h-px bg-[#AA894D]" />

            <div className="flex flex-col gap-5">
              {[t.concept.p1, t.concept.p2, t.concept.p3].map((p, i) => (
                <p
                  key={i}
                  className="text-[#8c7e6a] text-sm leading-9"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden img-hover-zoom">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85&auto=format&fit=crop"
              alt="Chef plating a dish at VITRA NAGOYA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Decorative gold frame offset */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#AA894D]/30 pointer-events-none" />
          </div>

        </div>

        {/* Gold divider */}
        <div className="divider-gold mb-24 lg:mb-32" />

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cols.map(({ title, body, num }) => (
            <div key={num} className="flex flex-col gap-5">
              <p
                className="text-[#AA894D]/30 text-5xl font-light leading-none"
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              >
                {num}
              </p>
              <div className="w-8 h-px bg-[#AA894D]" />
              <h3
                className="text-[#1a1916] text-xl font-light"
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
              >
                {title}
              </h3>
              <p
                className="text-[#8c7e6a] text-sm leading-8"
                style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
