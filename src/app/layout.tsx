import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP, Jost } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "RESTAURANT VITRA NAGOYA",
  description: "名古屋・千種区に佇むフレンチレストラン。旬の食材と生産者の想いを大切に、記憶に残る一皿をご提供いたします。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "御棚町3-26",
    addressLocality: "千種区",
    addressRegion: "名古屋市",
    postalCode: "464-0835",
    addressCountry: "JP",
  },
  telephone: "+81-52-759-5511",
  url: "https://nagoya.vitra.jp",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"],
      opens: "17:30",
      closes: "20:30",
    },
  ],
  servesCuisine: ["French", "Japanese French Fusion"],
  priceRange: "¥¥¥¥",
  currenciesAccepted: "JPY",
  paymentAccepted: "Cash, Credit Card",
};

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RESTAURANT VITRA NAGOYA | フレンチレストラン 名古屋",
  description:
    "名古屋・千種区に佇むフレンチレストラン。旬の食材と生産者の想いを大切に、記憶に残る一皿をご提供いたします。",
  keywords: ["VITRA", "RESTAURANT VITRA NAGOYA", "フレンチ", "名古屋", "レストラン"],
  openGraph: {
    title: "RESTAURANT VITRA NAGOYA",
    description: "名古屋・千種区のフレンチレストラン",
    url: "https://nagoya.vitra.jp",
    siteName: "RESTAURANT VITRA NAGOYA",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cormorant.variable} ${notoSerifJP.variable} ${jost.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
