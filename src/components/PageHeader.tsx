interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="relative bg-[#005999] py-20 md:py-28 overflow-hidden"
      style={{ backgroundImage: 'url(/pic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#005999]/75 via-[#005999]/60 to-[#005999]/80" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-5">
          <span className="text-white/35 text-xl font-serif">✝</span>
        </div>
        <h1
          className="font-serif text-[2.25rem] md:text-[3rem] font-light text-white leading-tight mb-4 tracking-tight"
          style={{ textShadow: '0 4px 40px rgba(0,0,0,0.35)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-[15px] text-white/70 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
