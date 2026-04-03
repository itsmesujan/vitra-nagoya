interface PageHeaderProps {
  title: string
  titleJp: string
  subtitle?: string
}

export default function PageHeader({ title, titleJp, subtitle }: PageHeaderProps) {
  return (
    <header className="border-b border-vitra-border pb-12 mb-12 px-8 md:px-16 pt-12 md:pt-16">
      <div className="text-[9px] tracking-[0.5em] text-vitra-muted mb-5 font-display">
        RESTAURANT VITRA NAGOYA
      </div>
      <h1 className="font-display italic text-5xl md:text-6xl text-vitra-cream leading-tight">
        {title}
      </h1>
      <div className="font-serif text-vitra-muted text-sm tracking-[0.1em] mt-2">
        {titleJp}
      </div>
      {subtitle && (
        <p className="text-vitra-muted text-sm font-serif leading-relaxed mt-5 max-w-lg">
          {subtitle}
        </p>
      )}
      <div className="w-14 h-px bg-vitra-gold mt-8" />
    </header>
  )
}
