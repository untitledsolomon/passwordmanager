interface SectionProps {
  id: string;
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  className?: string; // ✅ optional
}

export function Section({ id, title, Icon, children, className }: SectionProps) {
  return (
    <div id={id} className={`space-y-6 ${className ?? ""}`}>
      <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
        <Icon className="w-5 h-5" /> {title}
      </h2>
      {children}
    </div>
  );
}
