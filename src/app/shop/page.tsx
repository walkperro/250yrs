import type { Metadata } from "next";
import { BundleSetCard } from "@/components/bundle-set-card";
import { FoundersIntakeForm } from "@/components/founders-intake-form";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { setProducts, standardProducts } from "@/lib/products";
import { absoluteUrl, createMetadata, siteName } from "@/lib/seo";
import Image from "next/image";

export const metadata: Metadata = createMetadata({
  title: "Shop Patriotic Shirts, Crewnecks & Hoodies",
  description:
    "Shop the True American Wear 250th Year Collection of patriotic shirts, crewnecks, hoodies, and bundle sets inspired by America’s 250th anniversary.",
  path: "/shop",
});

export default function ShopPage() {
  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${siteName} Shop`,
    url: absoluteUrl("/shop"),
    description:
      "Shop the True American Wear 250th Year Collection of patriotic shirts, crewnecks, hoodies, and bundle sets inspired by America’s 250th anniversary.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <SiteHeader />
      <main className="pb-20 pt-10">
        <section className="container-shell">
          <div className="section-shell space-y-8">
            <SectionHeading
              as="h1"
              eyebrow="250th Year Collection"
              title="The 250th Year Collection starts here."
              description="Start with the Founders Crewneck, then build it out with the Eagle Hoodie and Redline Shirt."
            />

            <div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] border border-white/8 bg-black/30 sm:min-h-[420px]">
              <Image
                src="/true-american-wear/07-couple-shot-founders-1776-crewneck-and-liberty-eagle-hoodie.webp"
                alt="Couple wearing the Founders 1776 Crewneck and Liberty Eagle Hoodie"
                fill
                priority
                sizes="(min-width: 1280px) 76rem, (min-width: 640px) calc(100vw - 4rem), calc(100vw - 3rem)"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/10 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-6">
                <p className="eyebrow">250th Year Collection</p>
                <h2 className="font-display text-4xl text-brand-cream">
                  Built for the 250th. Made to last well beyond it.
                </h2>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {standardProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>

            <div className="space-y-6">
              <SectionHeading
                eyebrow="Bundle sets"
                title="Complete the set."
                description="Pair core pieces together for a stronger, full look built for the 250th year."
              />

              <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {setProducts.map((bundle) => (
                  <BundleSetCard
                    key={bundle.slug}
                    title={bundle.bundleCardTitle ?? "Buy the Set"}
                    name={bundle.name}
                    price={bundle.price}
                    accent={bundle.bundleCardAccent ?? bundle.badge}
                    description={bundle.bundleCardDescription ?? [bundle.cardDescription]}
                    images={bundle.bundleCardImages ?? []}
                    primaryHref={`/shop/${bundle.slug}`}
                    primaryLabel="Buy Now"
                    secondaryHref={`/shop/${bundle.slug}#join-the-list`}
                    secondaryLabel="Join the List"
                  />
                ))}
              </div>
            </div>

            <div id="early-access">
              <FoundersIntakeForm
                title="Want first access?"
                description="Join the list for early access, first release details, and the next collection."
                compact
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
