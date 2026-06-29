export function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const textColor = dark ? "text-cream" : "text-ink";
  return (
    <span
      className={`inline-flex items-baseline font-serif font-medium tracking-tight ${textColor} ${className}`}
    >
      <span className="text-gold">A</span>
      <span>JR</span>
    </span>
  );
}
