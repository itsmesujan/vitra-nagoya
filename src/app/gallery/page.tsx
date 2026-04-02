'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLocale } from '@/lib/i18n'

type FilterKey = 'all' | 'food' | 'interior' | 'wine' | 'event'

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'food' as FilterKey,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=85&auto=format&fit=crop',
    alt: { ja: '季節のメイン料理', en: 'Seasonal Main Course', fr: 'Plat Principal de Saison' },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 2,
    category: 'interior' as FilterKey,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'レストラン内観', en: 'Restaurant Interior', fr: 'Intérieur du Restaurant' },
    span: 'col-span-1 row-span-2',
  },
  {
    id: 3,
    category: 'food' as FilterKey,
    src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'フレンチ前菜', en: 'French Appetizer', fr: 'Entrée Française' },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 4,
    category: 'wine' as FilterKey,
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'ワインペアリング', en: 'Wine Pairing', fr: 'Accord Mets-Vins' },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 5,
    category: 'food' as FilterKey,
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'シェフの盛り付け', en: "Chef's Plating", fr: 'Dressage du Chef' },
    span: 'col-span-2 row-span-1',
  },
  {
    id: 6,
    category: 'wine' as FilterKey,
    src: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'ワインセラー', en: 'Wine Cellar', fr: 'Cave à Vins' },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 7,
    category: 'food' as FilterKey,
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=85&auto=format&fit=crop',
    alt: { ja: '魚料理', en: 'Fish Course', fr: 'Plat de Poisson' },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 8,
    category: 'interior' as FilterKey,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'ダイニングルーム', en: 'Dining Room', fr: 'Salle à Manger' },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 9,
    category: 'food' as FilterKey,
    src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'アニバーサリーデザート', en: 'Anniversary Dessert', fr: "Dessert d'Anniversaire" },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 10,
    category: 'event' as FilterKey,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'スペシャルイベント', en: 'Special Event', fr: 'Événement Spécial' },
    span: 'col-span-1 row-span-2',
  },
  {
    id: 11,
    category: 'food' as FilterKey,
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=85&auto=format&fit=crop',
    alt: { ja: '前菜の盛り合わせ', en: 'Appetizer Selection', fr: 'Sélection d\'Entrées' },
    span: 'col-span-1 row-span-1',
  },
  {
    id: 12,
    category: 'event' as FilterKey,
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=85&auto=format&fit=crop',
    alt: { ja: 'ウエディングパーティ', en: 'Wedding Party', fr: 'Réception de Mariage' },
    span: 'col-span-1 row-span-1',
  },
]

export default function GalleryPage() {
  const { locale, t } = useLocale()
  const g = t.galleryPage
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [lightbox, setLightbox] = useState<(typeof GALLERY_ITEMS)[0] | null>(null)

  const FILTER_KEYS: FilterKey[] = ['all', 'food', 'interior', 'wine', 'event']

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0f0e0c] pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
              {g.eyebrow}
            </p>
            <h1 className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
              {g.title}
            </h1>
          </div>
        </section>

        {/* Filter bar */}
        <section className="bg-[#1a1916] py-5 sticky top-20 lg:top-24 z-30">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {FILTER_KEYS.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`shrink-0 px-5 py-2 text-[0.6rem] tracking-[0.2em] uppercase transition-all duration-200 ${
                    activeFilter === key
                      ? 'bg-[#AA894D] text-[#0f0e0c]'
                      : 'border border-[#FAF8F4]/20 text-[#FAF8F4]/50 hover:border-[#AA894D]/60 hover:text-[#AA894D]'
                  }`}
                  style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                >
                  {g.filters[key]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry-style grid */}
        <section className="bg-[#0f0e0c] py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 auto-rows-[220px] lg:auto-rows-[280px]">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setLightbox(item)}
                  className={`relative overflow-hidden group img-hover-zoom cursor-zoom-in ${item.span}`}
                  aria-label={item.alt[locale]}
                >
                  <Image
                    src={item.src}
                    alt={item.alt[locale]}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0f0e0c]/0 group-hover:bg-[#0f0e0c]/40 transition-all duration-500 flex items-end">
                    <p
                      className="w-full px-4 pb-4 text-[#FAF8F4]/0 group-hover:text-[#FAF8F4]/90 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    >
                      {item.alt[locale]}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="flex items-center justify-center py-24">
                <p className="text-[#FAF8F4]/30 text-sm"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                  {locale === 'ja' ? '該当するコンテンツがありません' : locale === 'fr' ? 'Aucun contenu trouvé' : 'No content found'}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#0f0e0c]/95 flex items-center justify-center p-4 lg:p-12 cursor-zoom-out"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt[locale]}
        >
          <button
            className="absolute top-6 right-6 text-[#FAF8F4]/60 hover:text-[#FAF8F4] transition-colors text-3xl leading-none z-10"
            onClick={() => setLightbox(null)}
            aria-label={t.shared.close}
          >
            ×
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src.replace('w=800', 'w=1400')}
              alt={lightbox.alt[locale]}
              fill
              className="object-contain"
              sizes="(max-width: 1400px) 95vw, 1400px"
              priority
            />
          </div>
          <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#FAF8F4]/40 text-[0.65rem] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            {lightbox.alt[locale]}
          </p>
        </div>
      )}
    </>
  )
}
