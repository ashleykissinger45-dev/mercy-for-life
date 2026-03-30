interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="bg-[#005999] py-16 md:py-24"
      style={{ backgroundImage: 'url(/pic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl md:text-[2.75rem] font-light text-white leading-tight mb-4" style={{ textShadow: '0 2px 30px rgba(0,0,0,0.2)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-[15px] text-white/80 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
