interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-[#0A1628] py-14 md:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed font-light">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
