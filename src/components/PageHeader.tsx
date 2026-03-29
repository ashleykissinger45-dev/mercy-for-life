interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900 tracking-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
