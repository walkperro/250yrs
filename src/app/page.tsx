import Image from "next/image";
import Link from "next/link";

import { FoundersIntakeForm } from "@/components/founders-intake-form";
import { LightboxImage } from "@/components/lightbox-image";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/brand";
import { campaignGallery, campaignImages } from "@/lib/campaign-images";
import { featuredProducts, formatPrice, products } from "@/lib/products";

export default function Home() {
  const leadProduct = featuredProducts[0];
  const supportingProducts = products.slice(1, 3);
  const campaignSpotlight = campaignGallery[0];
  const campaignCards = campaignGallery.slice(1);

  return (
    <>
      <SiteHeader />

      <main className="pb-16 sm:pb-20">
        <section className="container-shell pt-8 sm:pt-10">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-8">
            <div className="section-shell flex flex-col justify-between overflow-hidden">
              <div className="space-y-5">
                <p className="eyebrow">250th Year Collection</p>
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="font-display text-5xl leading-[0.92] text-brand-cream sm:text-7xl xl:text-[5.5rem]">
                    True American Wear
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-white/74 sm:text-xl sm:leading-8">
                    Built for the 250th year. A refined take on patriotic
                    American apparel, cut with weight, heritage, and a stronger
                    American silhouette.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/shop" className="button-primary">
                    Shop the 250th Year Collection
                  </Link>
                  <Link href="#founders-intake" className="button-secondary">
                    Join the list
                  </Link>
                </div>
              </div>

              <div className="mt-8 grid gap-3 border-t border-white/8 pt-5 sm:grid-cols-3">
                {[
                  "Heavyweight pieces rooted in heritage and strength.",
                  "Made for the Fourth. Built to last beyond it.",
                  "The collection starts with the strongest silhouettes.",
                ].map((line) => (
                  <p key={line} className="text-sm leading-6 text-white/60">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="section-shell relative min-h-[420px] overflow-hidden">
              <div className="absolute inset-0">
                <LightboxImage
                  src={campaignImages.heroHoodie}
                  alt="True American Wear hero image"
                  priority
                  containerClassName="relative h-full w-full"
                  imageClassName="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/25 to-transparent" />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-4">
                <p className="eyebrow">250th Year Collection</p>
                <h2 className="font-display text-4xl text-brand-cream sm:text-5xl">
                  Heavy fleece, dark denim, open road.
                </h2>
                <p className="max-w-xl text-base leading-7 text-white/72">
                  The collection starts with stronger graphics, cleaner lines,
                  and a darker read on American classics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr] lg:gap-8">
            <div className="section-shell relative min-h-[240px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,164,106,0.2),transparent_38%),linear-gradient(180deg,#1a1b1d_0%,#0b0b0c_100%)]" />
              <div className="relative flex h-full items-center justify-center p-6 sm:p-8">
                <div className="relative h-44 w-44 sm:h-52 sm:w-52">
                  <Image
                    src="/true-american-wear/logo.png"
                    alt="True American Wear crest"
                    fill
                    className="object-contain drop-shadow-[0_18px_44px_rgba(0,0,0,0.55)]"
                  />
                </div>
              </div>
            </div>

            <div className="section-shell grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
              <div className="space-y-4">
                <p className="eyebrow">The crest</p>
                <h3 className="font-display text-3xl text-brand-cream sm:text-4xl">
                  {brand.tagline}
                </h3>
                <p className="text-sm leading-7 text-white/68 sm:text-base">
                  {brand.description} Leather, metal, countryside light, and a
                  black-and-bronze palette shape the world around the collection.
                </p>
              </div>
              <LightboxImage
                src={campaignImages.heroCouple}
                alt="True American Wear lifestyle image"
                containerClassName="relative min-h-[220px] overflow-hidden rounded-[1.4rem] border border-white/8"
                imageClassName="object-cover"
              />
            </div>
          </div>
        </section>

        <section id="collection" className="container-shell pt-8 sm:pt-10">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Featured collection"
              title="The 250th Year Collection starts with the strongest silhouettes."
              description="The Founders Crewneck leads. The eagle hoodie and Redline shirt carry the rest of the release."
            />

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="section-shell relative overflow-hidden">
                <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
                  <LightboxImage
                    src={campaignImages.foundersLifestyleA}
                    alt="Founders 1776 Crewneck in campaign light"
                    containerClassName="relative min-h-[360px] overflow-hidden rounded-[1.6rem] border border-white/8 bg-black/30"
                    imageClassName="object-cover"
                  />

                  <div className="space-y-5">
                    <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
                      <p className="eyebrow">Lead piece</p>
                      <h3 className="mt-2 font-display text-3xl text-brand-cream">
                        {leadProduct.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/66">
                        {leadProduct.cardDescription}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
                        <p className="eyebrow">Price</p>
                        <p className="mt-2 text-3xl font-semibold text-brand-cream">
                          {formatPrice(leadProduct.price)}
                        </p>
                        <p className="mt-2 text-sm text-white/58">
                          Heavyweight fleece with a cleaner front read.
                        </p>
                      </div>
                      <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
                        <p className="eyebrow">Why it leads</p>
                        <p className="mt-2 text-sm leading-6 text-white/64">
                          Dark base, stronger shape, and a more premium read from
                          distance.
                        </p>
                      </div>
                    </div>

                    <LightboxImage
                      src={campaignImages.foundersStudio}
                      alt="Founders 1776 Crewneck studio view"
                      containerClassName="relative min-h-[220px] overflow-hidden rounded-[1.4rem] border border-white/8 bg-black/30"
                      imageClassName="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-1">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="section-shell relative overflow-hidden">
              <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
                <LightboxImage
                  src="/true-american-wear/flag-sweater.jpg"
                  alt="Founders 1776 Crewneck product view"
                  containerClassName="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/40"
                  imageClassName="object-cover"
                />
                <div className="grid gap-4">
                  <LightboxImage
                    src={campaignImages.foundersDetail}
                    alt="Founders 1776 Crewneck detail view"
                    containerClassName="relative min-h-[170px] overflow-hidden rounded-[1.3rem] border border-white/8 bg-black/30"
                    imageClassName="object-cover"
                  />
                  <LightboxImage
                    src={campaignImages.foundersLifestyleB}
                    alt="Founders 1776 Crewneck in the field"
                    containerClassName="relative min-h-[170px] overflow-hidden rounded-[1.3rem] border border-white/8 bg-black/30"
                    imageClassName="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="section-shell flex flex-col justify-center space-y-6">
              <p className="eyebrow">Limited collection</p>
              <h2 className="font-display text-4xl leading-tight text-brand-cream sm:text-5xl">
                The Founders 1776 Crewneck leads the release.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/72">
                Black base, sweeping flag composition, and a commemorative mark
                that reads heavier, cleaner, and sharper than standard patriotic
                apparel.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="eyebrow">Price</p>
                  <p className="mt-2 text-3xl font-semibold text-brand-cream">
                    {formatPrice(leadProduct.price)}
                  </p>
                  <p className="mt-2 text-sm text-white/58">
                    Heavyweight fleece with a clean front read.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="eyebrow">Why it leads</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">
                    It carries the brand at first glance: dark base, stronger
                    shape, and a more premium read from distance.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Heavy fleece built for cooler nights and clean layering.",
                  "A stronger silhouette that anchors the collection without noise.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-[1.4rem] border border-white/8 bg-black/20 p-5"
                  >
                    <p className="text-sm leading-6 text-white/64">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="founders-intake" className="container-shell pt-8 sm:pt-10">
          <FoundersIntakeForm description="Join the list for early access, first release details, and the first look at what lands next." />
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="section-shell space-y-8">
            <SectionHeading
              eyebrow="The campaign"
              title="A collection built for open road, dusk light, and worn-in denim."
              description="The brand story stays dark, clean, and grounded in American utility."
            />

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.03]">
                <LightboxImage
                  src={campaignSpotlight.image}
                  alt={campaignSpotlight.title}
                  containerClassName="relative min-h-[360px] overflow-hidden"
                  imageClassName="object-cover"
                />
                <div className="space-y-3 p-6">
                  <p className="eyebrow">Campaign spotlight</p>
                  <h3 className="font-display text-3xl text-brand-cream sm:text-4xl">
                    {campaignSpotlight.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
                    {campaignSpotlight.copy} The campaign stays cinematic,
                    believable, and rooted in premium Americana.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
                {campaignCards.map((frame) => (
                  <div
                    key={frame.title}
                    className="overflow-hidden rounded-[1.7rem] border border-white/8 bg-white/[0.03]"
                  >
                    <LightboxImage
                      src={frame.image}
                      alt={frame.title}
                      containerClassName="relative aspect-[4/5] overflow-hidden"
                      imageClassName="object-cover"
                    />
                    <div className="space-y-2 p-5">
                      <p className="eyebrow">True American Wear</p>
                      <h3 className="font-display text-2xl text-brand-cream">
                        {frame.title}
                      </h3>
                      <p className="text-sm leading-6 text-white/64">
                        {frame.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow">More from the collection</p>
              <h2 className="font-display text-4xl text-brand-cream sm:text-5xl">
                Eagle fleece and the Redline shirt round out the 250th Year Collection.
              </h2>
              <p className="text-base leading-7 text-white/68">
                The collection stays focused. The narrower statement piece sits
                lower in the assortment and never defines the brand.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {supportingProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/shop/${product.slug}`}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 transition hover:border-brand-gold/25 hover:bg-white/[0.05]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.22em] text-brand-gold/70">
                      {product.badge}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-brand-cream">
                      {product.shortName}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <LightboxImage
                src={campaignImages.hoodieStudio}
                alt="Liberty Eagle Hoodie studio view"
                containerClassName="relative min-h-[230px] overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/30 sm:min-h-[320px]"
                imageClassName="object-cover"
              />
              <div className="grid gap-4">
                <LightboxImage
                  src={campaignImages.redlineLifestyle}
                  alt="Redline 250 Shirt lifestyle image"
                  containerClassName="relative min-h-[150px] overflow-hidden rounded-[1.4rem] border border-white/8 bg-black/30"
                  imageClassName="object-cover"
                />
                <LightboxImage
                  src={campaignImages.hoodieLifestyle}
                  alt="Liberty Eagle Hoodie lifestyle image"
                  containerClassName="relative min-h-[150px] overflow-hidden rounded-[1.4rem] border border-white/8 bg-black/30"
                  imageClassName="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
