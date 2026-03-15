import Image from "next/image";
import Link from "next/link";

import { LightboxImage } from "@/components/lightbox-image";
import { formatPrice, type Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  interactiveImage?: boolean;
  imageSizes?: string;
};

export function ProductCard({
  product,
  interactiveImage = true,
  imageSizes = "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw",
}: ProductCardProps) {
  return (
    <article className="product-card group overflow-hidden">
      <div className="relative">
        {interactiveImage ? (
          <LightboxImage
            src={product.image}
            alt={product.imageAlt}
            sizes={imageSizes}
            containerClassName="relative aspect-[4/5] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30"
            imageClassName="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes={imageSizes}
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        )}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full border border-brand-gold/25 bg-black/55 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-brand-cream/90">
            {product.badge}
          </span>
          <span className="rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-black">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-gold/75">
            {product.subtitle}
          </p>
          <h3 className="font-display text-3xl text-brand-cream">
            {product.name}
          </h3>
          <p className="text-sm leading-6 text-white/68">
            {product.cardDescription}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href={`/shop/${product.slug}`} className="button-primary">
            Shop now
          </Link>
          <Link href={`/shop/${product.slug}`} className="button-secondary">
            Join the list
          </Link>
        </div>
      </div>
    </article>
  );
}
