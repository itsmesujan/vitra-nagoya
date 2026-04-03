import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  Playfair_Display,
  Noto_Sans_JP,
  Noto_Serif_JP,
} from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FloatingReserveCTA from '@/components/FloatingReserveCTA'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'RESTAURANT VITRA NAGOYA | フレンチ日本料理 覚王山',
    template: '%s | RESTAURANT VITRA NAGOYA',
  },
  description:
    '愛知県名古屋市千種区覚王山にある完全予約制のフレンチレストラン。記憶に残る一皿と、想い出に残る瞬間を。ディナーのみ営業。TEL: 052-759-5511',
  keywords: [
    'レストラン ヴィトラ ナゴヤ',
    '覚王山 フレンチ',
    '名古屋 記念日ディナー',
    '名古屋 ファインダイニング',
    '完全予約制',
    '覚王山 ディナー',
  ],
  openGraph: {
    title: 'RESTAURANT VITRA NAGOYA',
    description: '記憶に残る一皿と、想い出に残る瞬間を。',
    locale: 'ja_JP',
    type: 'website',
    url: 'https://nagoya.vitra.jp',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'RESTAURANT VITRA NAGOYA',
  alternateName: 'レストラン ヴィトラ ナゴヤ',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '御棚町3-26',
    addressLocality: '千種区',
    addressRegion: '愛知県',
    postalCode: '464-0835',
    addressCountry: 'JP',
  },
  telephone: '+81-52-759-5511',
  servesCuisine: ['French', 'Japanese'],
  priceRange: '¥¥¥¥',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '17:30',
      closes: '20:30',
    },
  ],
  url: 'https://nagoya.vitra.jp',
  currenciesAccepted: 'JPY',
  paymentAccepted: 'Cash, Credit Card',
  hasMap: 'https://maps.google.com/?q=愛知県名古屋市千種区御棚町3-26',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${playfair.variable} ${notoSansJP.variable} ${notoSerifJP.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="bg-vitra-black text-vitra-cream font-sans antialiased">
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 md:ml-60 pt-16 md:pt-0">
            {children}
            <Footer />
          </main>
        </div>
        <FloatingReserveCTA />
      </body>
    </html>
  )
}
