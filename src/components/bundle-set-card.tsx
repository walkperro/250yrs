import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/lib/products";

type BundleImage = {
  src: string;
  alt: string;
};

type BundleSetCardProps = {
  title: string;
  name: string;
  price: number;
  accent: string;
  description: readonly string[];
  images: readonly BundleImage[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function BundleSetCard({
  title,
  name,
  price,
  accent,
  description,
  images,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: BundleSetCardProps) {
  return (
    <article className="product-card group flex h-full flex-col overflow-hidden">
      <div className="grid grid-cols-2 gap-3 p-5 pb-0 sm:p-6 sm:pb-0">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/5] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={90}
              sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 22vw, (min-width: 768px) 34vw, 50vw"
              className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brand-gold/25 bg-black/55 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-cream/90">
              {accent}
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-gold/75">{title}</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-3xl text-brand-cream">{name}</h3>
            <div className="space-y-2 text-sm leading-6 text-white/68">
              {description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold text-brand-cream">{formatPrice(price)}</p>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref} className="button-primary sm:flex-1">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="button-secondary sm:flex-1">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
