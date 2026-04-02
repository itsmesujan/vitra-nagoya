'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/lib/i18n'

const MENU_IMAGES = [
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=700&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=85&auto=format&fit=crop',
]

export default function MenuPreview() {
  const { t } = useLocale()

  const menus = [
    { ...t.menuPreview.menuA, img: MENU_IMAGES[0], accent: false },
    { ...t.menuPreview.menuB, img: MENU_IMAGES[1], accent: false },
    { ...t.menuPreview.menuV, img: MENU_IMAGES[2], accent: true },
    { ...t.menuPreview.menuC, img: MENU_IMAGES[3], accent: false },
  ]

  return (
    <section className="bg-[#0f0e0c] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16 lg:mb-20">
          <p
            className="text-[#AA894D] tracking-[0.4em] text-[0.65rem] uppercase"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {t.menuPreview.eyebrow}
          </p>
          <h2
            className="text-[#FAF8F4] text-4xl lg:text-6xl font-light tracking-[0.03em]"
            style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
          >
            {t.menuPreview.title}
          </h2>
          <div className="divider-gold w-full max-w-xs" style={{ height: '1px' }} />
          <p
            className="text-[#FAF8F4]/40 text-[0.7rem] tracking-[0.15em]"
            style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
          >
            {t.menuPreview.sub}
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#AA894D]/15">
          {menus.map((menu) => (
            <div
              key={menu.label}
              className={`relative flex flex-col group overflow-hidden ${
                menu.accent ? 'ring-1 ring-[#AA894D]/50' : ''
              } bg-[#1a1916]`}
            >
              {/* Badge for anniversary */}
              {'badge' in menu && menu.badge && (
                <div
                  className="absolute top-3 right-3 z-20 px-2 py-1 bg-[#AA894D] text-[#0f0e0c] text-[0.55rem] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  {menu.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden img-hover-zoom">
                <Image
                  src={menu.img}
                  alt={menu.name}
                  fill
                  className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1916] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <p
                  className="text-[#AA894D] text-[0.6rem] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  {menu.label}
                </p>
                <h3
                  className="text-[#FAF8F4] text-xl font-light leading-snug"
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                >
                  {menu.name}
                </h3>
                <p
                  className="text-[#FAF8F4]/50 text-[0.75rem] leading-7 flex-1"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                >
                  {menu.desc}
                </p>
                <p
                  className={`text-2xl font-light mt-2 ${menu.accent ? 'text-[#AA894D]' : 'text-[#FAF8F4]/80'}`}
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                >
                  {menu.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-3 border border-[#AA894D]/50 text-[#AA894D] px-10 py-4 text-[0.65rem] tracking-[0.3em] uppercase hover:bg-[#AA894D] hover:text-[#0f0e0c] transition-all duration-300"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {t.menuPreview.cta}
            <span className="text-base leading-none">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
