import { BundleSetCard } from "@/components/bundle-set-card";
import { FoundersIntakeForm } from "@/components/founders-intake-form";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products } from "@/lib/products";
import Image from "next/image";

const bundleSets = [
  {
    title: "Buy the Set",
    name: "Jacket + Boots",
    price: 1500,
    accent: "Featured set",
    description: [
      "Only 200,000 made in the world.",
      "10 year warranty.",
      "Each set comes with its own patriot number.",
    ],
    images: [
      {
        src: "/true-american-wear/jacket.jpg",
        alt: "Premium heritage jacket from the 250th year collection.",
      },
      {
        src: "/true-american-wear/boots.jpg",
        alt: "Premium leather boots from the 250th year collection.",
        itemStyle: { backgroundColor: "#d0c7bf" },
        className: "object-contain object-center scale-[1.12] p-1 transition duration-500 group-hover:scale-[1.15]",
      },
    ],
    primaryHref: "#early-access",
    primaryLabel: "Join the list",
    secondaryHref: "/shop/founders-1776-crewneck",
    secondaryLabel: "View details",
  },
  {
    title: "Buy the Set",
    name: "Founders Crewneck 1776 + Shoes (White)",
    price: 350,
    accent: "Bundle offer",
    description: ["Only 100,000 made in the world."],
    images: [
      {
        src: "/true-american-wear/flag-sweater-white.jpg",
        alt: "White Founders 1776 Crewneck with flag graphic.",
      },
      {
        src: "/true-american-wear/shoes-white.jpg",
        alt: "White shoes paired with the Founders set.",
      },
    ],
    primaryHref: "/shop/founders-1776-crewneck",
    primaryLabel: "View details",
    secondaryHref: "#early-access",
    secondaryLabel: "Join the list",
  },
  {
    title: "Buy the Set",
    name: "Founders Crewneck 1776 + Shoes (Black)",
    price: 350,
    accent: "Bundle offer",
    description: ["Only 100,000 made in the world."],
    images: [
      {
        src: "/true-american-wear/flag-sweater.jpg",
        alt: "Black Founders 1776 Crewneck with flag graphic.",
      },
      {
        src: "/true-american-wear/shoes-black.jpg",
        alt: "Black footwear paired with the Founders set.",
      },
    ],
    primaryHref: "/shop/founders-1776-crewneck",
    primaryLabel: "Shop now",
    secondaryHref: "#early-access",
    secondaryLabel: "Join the list",
  },
] as const;

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-10">
        <section className="container-shell">
          <div className="section-shell space-y-8">
            <SectionHeading
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
              {products.map((product) => (
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
                {bundleSets.map((bundle) => (
                  <BundleSetCard
                    key={bundle.name}
                    title={bundle.title}
                    name={bundle.name}
                    price={bundle.price}
                    accent={bundle.accent}
                    description={bundle.description}
                    images={bundle.images}
                    primaryHref={bundle.primaryHref}
                    primaryLabel={bundle.primaryLabel}
                    secondaryHref={bundle.secondaryHref}
                    secondaryLabel={bundle.secondaryLabel}
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
