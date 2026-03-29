interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-14 md:py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
