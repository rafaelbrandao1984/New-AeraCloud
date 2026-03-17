interface LogoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function LogoSection({ title, description, children, className = "" }: LogoSectionProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="mb-8">
        <h2 className="text-3xl mb-2 text-white">{title}</h2>
        {description && (
          <p className="text-gray-400">{description}</p>
        )}
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
