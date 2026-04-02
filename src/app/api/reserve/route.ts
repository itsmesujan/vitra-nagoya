import { NextRequest, NextResponse } from 'next/server'

interface ReservationPayload {
  lastName: string
  firstName: string
  date: string
  guests: string
  course?: string
  email: string
  phone?: string
  message?: string
  locale?: string
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  // Strip HTML tags and limit length to prevent injection
  return value.replace(/<[^>]*>/g, '').trim().slice(0, 1000)
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidDate(date: string) {
  const parsed = new Date(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return !isNaN(parsed.getTime()) && parsed >= today
}

export async function POST(req: NextRequest) {
  try {
    const body: ReservationPayload = await req.json()

    // Validate required fields
    const lastName = sanitize(body.lastName)
    const firstName = sanitize(body.firstName)
    const date = sanitize(body.date)
    const guests = sanitize(body.guests)
    const email = sanitize(body.email)

    if (!lastName || !firstName) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }
    if (!date || !isValidDate(date)) {
      return NextResponse.json({ error: 'A valid future date is required.' }, { status: 400 })
    }
    if (!guests) {
      return NextResponse.json({ error: 'Number of guests is required.' }, { status: 400 })
    }

    const course = sanitize(body.course)
    const phone = sanitize(body.phone)
    const message = sanitize(body.message)

    // ── Send email via Resend (if key is configured) ──────────────────────
    const RESEND_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'reservation@nagoya.vitra.jp'

    const emailBody = `
RESTAURANT VITRA NAGOYA — 予約リクエスト
=====================================
お名前: ${lastName} ${firstName}
ご来店日: ${date}
人数: ${guests}
ご希望コース: ${course || '未定'}
メールアドレス: ${email}
電話番号: ${phone || '—'}
ご要望: ${message || '—'}
=====================================
送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}
    `.trim()

    if (RESEND_KEY) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${RESEND_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'VITRA NAGOYA <noreply@nagoya.vitra.jp>',
            to: [CONTACT_EMAIL],
            reply_to: email,
            subject: `[予約リクエスト] ${lastName} ${firstName} 様 — ${date} ${guests}名`,
            text: emailBody,
          }),
        })

        if (!resendResponse.ok) {
          console.error('Resend error:', await resendResponse.text())
        }
      } catch (emailError) {
        // Log but don't fail the request — reservation data was received
        console.error('Failed to send notification email:', emailError)
      }
    } else {
      // Development: log to console
      console.log('[RESERVATION REQUEST]\n', emailBody)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json(
      { error: 'Invalid request. Please try again or call us at 052-759-5511.' },
      { status: 500 }
    )
  }
}
