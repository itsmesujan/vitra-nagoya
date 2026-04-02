import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_JP, Jost } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
