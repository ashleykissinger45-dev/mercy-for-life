interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-[#005492] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl md:text-[2.75rem] font-light text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
