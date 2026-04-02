'use client'

import { useState, FormEvent } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useLocale } from '@/lib/i18n'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full bg-white border border-[#DABCA9] px-4 py-3 text-sm text-[#1a1916] placeholder:text-[#DABCA9] focus:outline-none focus:border-[#AA894D] transition-colors'

export default function ReservePage() {
  const { t } = useLocale()
  const r = t.reservePage
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      date: (form.elements.namedItem('date') as HTMLInputElement).value,
      guests: (form.elements.namedItem('guests') as HTMLSelectElement).value,
      course: (form.elements.namedItem('course') as HTMLSelectElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // Minimum selectable date: tomorrow
  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)
  const minDateStr = minDate.toISOString().split('T')[0]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#0f0e0c] pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-[#AA894D] tracking-[0.35em] text-[0.7rem] uppercase mb-3"
              style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
              {r.eyebrow}
            </p>
            <h1 className="text-[#FAF8F4] text-5xl lg:text-7xl font-light tracking-[0.05em]"
              style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
              {r.title}
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF8F4] py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">

            {/* Intro */}
            <div className="flex flex-col gap-4 mb-14 text-center">
              <p className="text-[#8c7e6a] text-sm leading-9"
                style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                {r.intro.split('052-759-5511').map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <a href="tel:0527595511" className="text-[#AA894D] hover:underline"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                        052-759-5511
                      </a>
                    </span>
                  ) : part
                )}
              </p>
              <p className="text-[#DABCA9] text-xs tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                {r.hours}
              </p>
            </div>

            {/* Success state */}
            {status === 'success' && (
              <div className="border border-[#AA894D] bg-[#AA894D]/8 px-8 py-10 text-center flex flex-col gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-[#AA894D] flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-[#1a1916] text-2xl font-light"
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', serif)" }}>
                  {r.successTitle}
                </h2>
                <p className="text-[#8c7e6a] text-sm leading-8"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                  {r.successBody}
                </p>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div className="border border-red-300 bg-red-50 px-6 py-5 text-center mb-8">
                <p className="text-red-700 text-sm leading-7"
                  style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}>
                  {r.errorBody}
                </p>
              </div>
            )}

            {/* Form */}
            {status !== 'success' && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" aria-label={r.title} noValidate>

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(['lastName', 'firstName'] as const).map((field) => (
                    <div key={field} className="flex flex-col gap-2">
                      <label htmlFor={field}
                        className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                        style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                        {r.fields[field]}<span className="text-red-400 ml-1">*</span>
                      </label>
                      <input
                        id={field}
                        name={field}
                        type="text"
                        required
                        autoComplete={field === 'lastName' ? 'family-name' : 'given-name'}
                        className={inputClass}
                        placeholder={r.placeholders[field]}
                        style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Date + Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date"
                      className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                      {r.fields.date}<span className="text-red-400 ml-1">*</span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      min={minDateStr}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="guests"
                      className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                      {r.fields.guests}<span className="text-red-400 ml-1">*</span>
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      className={`${inputClass} appearance-none`}
                      style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                    >
                      <option value="">{r.placeholders.guests}</option>
                      {r.guestOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Course */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="course"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                    {r.fields.course}
                  </label>
                  <select
                    id="course"
                    name="course"
                    className={`${inputClass} appearance-none`}
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                  >
                    <option value="">{r.placeholders.course}</option>
                    {r.courseOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email"
                      className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                      {r.fields.email}<span className="text-red-400 ml-1">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClass}
                      placeholder={r.placeholders.email}
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone"
                      className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                      {r.fields.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputClass}
                      placeholder={r.placeholders.phone}
                      style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message"
                    className="text-[0.7rem] tracking-[0.2em] uppercase text-[#AA894D]"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                    {r.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder={r.placeholders.message}
                    style={{ fontFamily: "var(--font-noto-serif-jp, serif)" }}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col items-center gap-4 mt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-16 py-4 bg-[#1a1916] text-[#FAF8F4] text-sm tracking-[0.25em] hover:bg-[#AA894D] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}
                  >
                    {status === 'sending' ? r.sending : r.submit}
                  </button>
                  <p className="text-[#DABCA9] text-[0.65rem] tracking-widest text-center"
                    style={{ fontFamily: "var(--font-jost, 'Jost', sans-serif)" }}>
                    {r.disclaimer}
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
