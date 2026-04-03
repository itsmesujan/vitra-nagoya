'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { RESTAURANT } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: string
  occasion: string
  notes: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '18:00',
  guests: '2',
  occasion: '',
  notes: '',
}

export default function ReservePage() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Connect to API route / server action for actual email delivery
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div>
      <PageHeader
        title="Reserve"
        titleJp="ご予約・お問合せ"
        subtitle="完全予約制。ご来店前日までにご予約ください。"
      />

      <div className="px-8 md:px-16 pb-24 max-w-2xl">
        {/* Primary: Phone CTA */}
        <div className="bg-vitra-dark border border-vitra-gold/30 p-8 mb-12">
          <div className="text-[9px] tracking-[0.4em] text-vitra-muted mb-4">PHONE RESERVATION</div>
          <p className="text-vitra-cream/70 text-sm font-serif leading-relaxed mb-6">
            ご予約はお電話にて承っております。
            前日までにお電話にてご連絡ください。
          </p>

          <a
            href={RESTAURANT.phoneTel}
            className="inline-flex items-center gap-3 bg-vitra-gold text-vitra-black px-8 py-4 hover:bg-vitra-gold-light transition-all duration-300 group"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
            </svg>
            <span className="font-display italic text-2xl">{RESTAURANT.phone}</span>
          </a>

          <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-vitra-border text-xs font-serif">
            <div>
              <div className="text-vitra-muted mb-1 text-[10px] tracking-wider">営業時間</div>
              <div className="text-vitra-cream/70">{RESTAURANT.hours.display}</div>
            </div>
            <div>
              <div className="text-vitra-muted mb-1 text-[10px] tracking-wider">定休日</div>
              <div className="text-vitra-cream/70">{RESTAURANT.hours.closedDay}</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-vitra-border" />
          <span className="text-vitra-muted text-[10px] tracking-wider font-serif shrink-0">
            またはお問合せフォームにて
          </span>
          <div className="flex-1 h-px bg-vitra-border" />
        </div>

        {/* Contact form */}
        {submitted ? (
          <div className="bg-vitra-dark border border-vitra-gold/30 p-12 text-center">
            <div className="w-10 h-px bg-vitra-gold mx-auto mb-6" />
            <div className="font-display italic text-2xl text-vitra-gold mb-4">
              ありがとうございます
            </div>
            <p className="text-vitra-cream/60 text-sm font-serif leading-relaxed">
              お問合せを受け付けました。
              <br />
              担当者より折り返しご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
                >
                  お名前 <span className="text-vitra-gold">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif placeholder:text-vitra-muted/50 focus:outline-none focus:border-vitra-gold/60 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
                >
                  お電話番号
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="090-0000-0000"
                  className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif placeholder:text-vitra-muted/50 focus:outline-none focus:border-vitra-gold/60 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
              >
                メールアドレス <span className="text-vitra-gold">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif placeholder:text-vitra-muted/50 focus:outline-none focus:border-vitra-gold/60 transition-colors"
              />
            </div>

            {/* Date / Time / Guests */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
                >
                  ご希望日
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif focus:outline-none focus:border-vitra-gold/60 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
                >
                  ご来店時間
                </label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif focus:outline-none focus:border-vitra-gold/60 transition-colors appearance-none"
                >
                  {['17:30', '18:00', '18:30', '19:00', '19:30', '20:00'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
                >
                  人数
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif focus:outline-none focus:border-vitra-gold/60 transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n}名</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label
                htmlFor="occasion"
                className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
              >
                ご利用目的・ご要望
              </label>
              <input
                id="occasion"
                name="occasion"
                type="text"
                value={form.occasion}
                onChange={handleChange}
                placeholder="誕生日、記念日、接待など"
                className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif placeholder:text-vitra-muted/50 focus:outline-none focus:border-vitra-gold/60 transition-colors"
              />
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-[10px] tracking-[0.25em] text-vitra-muted mb-2"
              >
                アレルギー・その他ご連絡事項
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={form.notes}
                onChange={handleChange}
                className="w-full bg-vitra-dark border border-vitra-border text-vitra-cream text-sm px-4 py-3 font-serif focus:outline-none focus:border-vitra-gold/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-vitra-gold text-vitra-black text-[11px] tracking-[0.3em] px-12 py-4 hover:bg-vitra-gold-light transition-all duration-300 font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
