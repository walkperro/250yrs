import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FoundersIntakeForm } from "@/components/founders-intake-form";
import { LightboxImage } from "@/components/lightbox-image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { lifestyleBySlug } from "@/lib/campaign-images";
import { brand } from "@/lib/brand";
import { formatPrice, getProductBySlug, products } from "@/lib/products";
import { absoluteUrl, buildTitle } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: buildTitle("Product"),
    };
  }

  const path = `/shop/${product.slug}`;

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: buildTitle(product.name),
      description: product.description,
      url: path,
      siteName: brand.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: product.image,
          alt: product.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: buildTitle(product.name),
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const supportingAssets = lifestyleBySlug[slug as keyof typeof lifestyleBySlug];
  const showDetailCards = slug !== "founders-1776-crewneck";
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [absoluteUrl(product.image)],
    brand: {
      "@type": "Brand",
      name: brand.name,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      url: absoluteUrl(`/shop/${product.slug}`),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SiteHeader />
      <main className="pb-20 pt-10">
        <section className="container-shell">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <LightboxImage
                src={product.image}
                alt={product.imageAlt}
                priority
                containerClassName="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-brand-gold/15 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                imageClassName="object-cover"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <LightboxImage
                  src={supportingAssets.lifestyle}
                  alt={`${product.name} lifestyle image`}
                  containerClassName="relative aspect-square overflow-hidden rounded-[1.6rem] border border-white/8 bg-white/5"
                  imageClassName="object-cover"
                />
                <LightboxImage
                  src={supportingAssets.detail}
                  alt={`${product.name} detail image`}
                  containerClassName="relative aspect-square overflow-hidden rounded-[1.6rem] border border-white/8 bg-white/5"
                  imageClassName="object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Link
                  href="/shop"
                  className="text-xs uppercase tracking-[0.22em] text-brand-gold/72 transition hover:text-brand-cream"
                >
                  Back to shop
                </Link>
                <p className="eyebrow">{product.badge}</p>
                <h1 className="font-display text-5xl leading-none text-brand-cream sm:text-6xl">
                  {product.name}
                </h1>
                <p className="text-xl text-white/74">{product.subtitle}</p>
                <p className="text-3xl font-semibold text-brand-cream">
                  {formatPrice(product.price)}
                </p>
                <p className="max-w-xl text-base leading-7 text-white/72">
                  {product.description}
                </p>
              </div>

              {showDetailCards ? (
                <>
                  <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-brand-gold/70">
                      Sizes
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <button
                          key={size}
                          type="button"
                          className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80 transition hover:border-brand-gold/35 hover:text-brand-cream"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <FoundersIntakeForm
                    productName={product.name}
                    title="Join the list for this piece"
                    description="Claim early access and first notice when this release lands."
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-gold/70">
                        Release
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/72">
                        {product.releaseNote}
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-gold/70">
                        Built for
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/72">
                        A darker American wardrobe with stronger graphics, cleaner
                        lines, and heavier textures.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-gold/70">
                        Materials
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-white/72">
                        {product.materials.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-brand-gold/70">
                        Details
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-white/72">
                        {product.details.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
