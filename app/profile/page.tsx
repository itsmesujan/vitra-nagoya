import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プロフィール',
  description:
    'ヘッドシェフ 杉山智規とマネージャー&ソムリエ 伊藤祐太のプロフィール。VITRA STYLEを生み出す二人について。',
}

const chefCertifications = [
  { cert: '日本料理修行（大阪・名古屋）', detail: 'キャリア基盤' },
  { cert: 'フランス料理技法', detail: 'VITRA スタイルの柱' },
  { cert: '色彩理論 → プレート構成', detail: 'デザイン学校での学び' },
  { cert: '産地直送主義', detail: '全国の生産者を直接訪問' },
]

const sommelierCertifications = [
  { cert: 'レストランサービス技能士 1級', level: '最高位' },
  { cert: 'ソムリエ', level: 'J.S.A.' },
  { cert: 'SAKE DIPLOMA', level: 'J.S.A.' },
  { cert: 'チーズプロフェッショナル', level: 'C.P.A.' },
]

export default function ProfilePage() {
  return (
    <div>
      <PageHeader
        title="Profile"
        titleJp="プロフィール"
        subtitle="料理とワインへの深い情熱を持つ二人が、唯一無二の夜をお届けします。"
      />

      <div className="px-8 md:px-16 pb-24 max-w-4xl">
        {/* Head Chef */}
        <section className="mb-20 pb-20 border-b border-vitra-border">
          <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-start">
            {/* Photo placeholder */}
            <div className="w-40 md:w-full aspect-[3/4] bg-vitra-dark border border-vitra-border flex flex-col items-center justify-center">
              <div className="text-[9px] tracking-[0.3em] text-vitra-muted">CHEF</div>
              <div className="font-display italic text-vitra-cream/20 text-lg mt-2">Photo</div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.45em] text-vitra-gold mb-3">HEAD CHEF</div>
              <h2 className="font-serif text-3xl text-vitra-cream mb-1">杉山 智規</h2>
              <div className="font-display italic text-vitra-muted text-xl mb-1">Tomonori Sugiyama</div>
              <div className="text-vitra-muted text-[10px] tracking-wider mb-6">
                1979年4月7日生まれ、静岡県出身
              </div>

              <div className="w-10 h-px bg-vitra-gold mb-8" />

              <div className="space-y-5 text-vitra-cream/70 text-sm font-serif leading-[2.2] mb-8">
                <p>
                  大阪・名古屋での日本料理修行を経て、各地の日本料理・寿司店でヘッドシェフを務めた後、
                  覚王山にトラットリア ピノをオープン。その後、VITRA NAGOYA のシェフに就任。
                </p>
                <p>
                  デザイン学校での色彩理論の学びをプレート構成に応用し、視覚的な美しさと味覚の調和を追求。
                  日本各地の生産者を直接訪れ、食材の背景と哲学を理解した上で仕入れを行うことを信条とする。
                </p>
                <p>
                  日本料理から生まれた深い技術と精神性をベースに、フランス料理の構造と表現を融合させた
                  独自のスタイル「VITRA Style」を確立。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {chefCertifications.map((item) => (
                  <div
                    key={item.cert}
                    className="flex items-center justify-between border border-vitra-border px-4 py-3"
                  >
                    <span className="text-vitra-cream/80 text-xs font-serif">{item.cert}</span>
                    <span className="text-vitra-muted text-[10px] tracking-wider ml-3 shrink-0">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sommelier */}
        <section>
          <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-12 items-start">
            {/* Photo placeholder */}
            <div className="w-40 md:w-full aspect-[3/4] bg-vitra-dark border border-vitra-border flex flex-col items-center justify-center">
              <div className="text-[9px] tracking-[0.3em] text-vitra-muted">SOMMELIER</div>
              <div className="font-display italic text-vitra-cream/20 text-lg mt-2">Photo</div>
            </div>

            <div>
              <div className="text-[9px] tracking-[0.45em] text-vitra-gold mb-3">
                MANAGER &amp; SOMMELIER
              </div>
              <h2 className="font-serif text-3xl text-vitra-cream mb-1">伊藤 祐太</h2>
              <div className="font-display italic text-vitra-muted text-xl mb-1">Yuta Ito</div>
              <div className="text-vitra-muted text-[10px] tracking-wider mb-6">
                1985年8月26日生まれ、愛知県出身
              </div>

              <div className="w-10 h-px bg-vitra-gold mb-8" />

              <div className="space-y-5 text-vitra-cream/70 text-sm font-serif leading-[2.2] mb-8">
                <p>
                  カリフォルニアへの留学を経験した後、名古屋市内のホテルレストランにて16年間の
                  サービス経験を積む。
                </p>
                <p>
                  お客様に寄り添ったホスピタリティを信条とし、ご予約の瞬間からお帰りになるまで、
                  すべての場面でお客様が心地よい時間を過ごせるよう努めています。
                </p>
              </div>

              <div>
                <div className="text-[9px] tracking-[0.35em] text-vitra-muted mb-4">CERTIFICATIONS</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sommelierCertifications.map((item) => (
                    <div
                      key={item.cert}
                      className="flex items-center justify-between border border-vitra-border px-4 py-3"
                    >
                      <span className="text-vitra-cream/80 text-xs font-serif">{item.cert}</span>
                      <span className="text-vitra-muted text-[10px] tracking-wider ml-3 shrink-0">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
