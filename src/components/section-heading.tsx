type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <HeadingTag className="font-display text-4xl tracking-tight text-brand-cream sm:text-5xl">
        {title}
      </HeadingTag>
      <p className="text-base leading-7 text-white/72 sm:text-lg">{description}</p>
    </div>
  );
}
