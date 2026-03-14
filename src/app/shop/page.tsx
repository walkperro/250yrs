import { FoundersIntakeForm } from "@/components/founders-intake-form";
import { LightboxImage } from "@/components/lightbox-image";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { campaignImages } from "@/lib/campaign-images";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-20 pt-10">
        <section className="container-shell">
          <div className="section-shell space-y-8">
            <SectionHeading
              eyebrow="250th Year Collection"
              title="Heavyweight pieces for the 250th year."
              description="Start with the Founders Crewneck, then move through the eagle hoodie and Redline shirt."
            />

            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] border border-white/8">
                <LightboxImage
                  src={campaignImages.coupleFoundersHoodie}
                  alt="Collection lifestyle image"
                  containerClassName="relative h-full w-full"
                  imageClassName="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="eyebrow">250th Year Collection</p>
                  <h2 className="font-display text-4xl text-brand-cream">
                    Built for the Fourth. Strong enough to wear after it.
                  </h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {[campaignImages.foundersStudio, campaignImages.hoodieStudio].map(
                  (image, index) => (
                    <div
                      key={image}
                      className="relative min-h-[172px] overflow-hidden rounded-[1.5rem] border border-white/8"
                    >
                      <LightboxImage
                        src={image}
                        alt={index === 0 ? "Founders studio product image" : "Hoodie studio product image"}
                        containerClassName="relative h-full w-full"
                        imageClassName="object-cover"
                      />
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>

            <FoundersIntakeForm
              title="Want first access?"
              description="Join the list for early access, first release details, and the next collection."
              compact
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
