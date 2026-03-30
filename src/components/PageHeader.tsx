interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="relative py-14 md:py-20 overflow-hidden"
      style={{ background: '#070e1a' }}
    >
      {/* CSS ambient glow layers */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(10,108,187,0.28) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 30% 70%, rgba(6,79,140,0.18) 0%, transparent 60%)' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
