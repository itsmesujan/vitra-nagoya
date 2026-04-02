'use client'

import { useLocale } from '@/lib/i18n'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          fill={star <= rating ? '#FBBC05' : 'none'}
          stroke={star <= rating ? '#FBBC05' : '#DABCA9'}
          strokeWidth="1"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function ReviewerAvatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase()
  const colors = [
    'bg-[#4285F4]', 'bg-[#34A853]', 'bg-[#EA4335]', 'bg-[#FBBC05]',
    'bg-[#AA894D]', 'bg-[#7c3aed]',
  ]
  const color = colors[name.charCodeAt(0) % colors.length]

  return (
    <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center shrink-0`}>
      <span className="text-white text-sm font-medium">{initial}</span>
    </div>
  )
}

const GOOGLE_MAPS_URL =
  'https://maps.google.com/maps?q=RESTAURANT+VITRA+NAGOYA+愛知県名古屋市千種区御棚町3-26'

export default function GoogleReviews() {
  const { t } = useLocale()
  const r = t.reviews

  return (
    <section className="bg-[#F2EDE3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="flex flex-col gap-4">
            <p
              className="text-[#AA894D] tracking-[0.4em] text-[0.65rem] uppercase"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
            >
              {r.eyebrow}
            </p>
            <h2
              className="text-[#1a1916] text-4xl lg:text-5xl font-light"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
            >
              {r.title}
            </h2>
          </div>

          {/* Aggregate rating — Google-style */}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            <GoogleG />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span
                  className="text-3xl text-[#1a1916] font-light leading-none"
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}
                >
                  {r.rating}
                </span>
                <StarRating rating={5} />
              </div>
              <p
                className="text-[#8c7e6a] text-[0.65rem] tracking-[0.1em] group-hover:text-[#AA894D] transition-colors"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
              >
                {r.totalReviews}
              </p>
            </div>
          </a>
        </div>

        {/* Source label */}
        <p
          className="text-[#8c7e6a] text-[0.65rem] tracking-[0.2em] uppercase mb-8 flex items-center gap-2"
          style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
        >
          <GoogleG />
          {r.sub}
        </p>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {r.items.map((review, i) => (
            <article
              key={i}
              className="bg-white p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Reviewer info */}
              <div className="flex items-center gap-3">
                <ReviewerAvatar name={review.name} />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p
                    className="text-[#1a1916] text-sm font-medium truncate"
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-[#8c7e6a] text-[0.65rem]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    {review.date}
                  </p>
                </div>
                {/* Google logo top-right */}
                <div className="ml-auto shrink-0">
                  <GoogleG />
                </div>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p
                className="text-[#6b5c4a] text-[0.8rem] leading-7 flex-1"
                style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
              >
                {review.text}
              </p>
            </article>
          ))}
        </div>

        {/* See all on Google */}
        <div className="flex justify-center mt-10">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#1a1916]/20 text-[#1a1916]/70 px-8 py-3 text-[0.65rem] tracking-[0.25em] uppercase hover:border-[#AA894D] hover:text-[#AA894D] transition-all duration-300"
            style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
          >
            <GoogleG />
            {r.cta}
            <span className="text-base leading-none">↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}
