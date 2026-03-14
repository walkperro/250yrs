type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-4xl tracking-tight text-brand-cream sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-white/72 sm:text-lg">{description}</p>
    </div>
  );
}
