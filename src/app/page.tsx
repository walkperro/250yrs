import Image from "next/image";
import Link from "next/link";

import { FoundersIntakeForm } from "@/components/founders-intake-form";
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
                  "12-ounce fleece, rib trim, and a cleaner drape.",
                  "Built for fireworks at dusk and colder mornings after.",
                  "Made to wear with dark denim, boots, and a work jacket.",
                ].map((line) => (
                  <p key={line} className="text-sm leading-6 text-white/60">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="section-shell relative min-h-[460px] overflow-hidden p-4 sm:p-5 lg:p-6">
              <div className="absolute inset-4 sm:inset-5 lg:inset-6 overflow-hidden rounded-[1rem]">
                <Image
                  src={campaignImages.heroHoodie}
                  alt="Liberty Eagle Hoodie campaign hero image"
                  fill
                  priority
                  quality={94}
                  sizes="(min-width: 1280px) 44vw, (min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-[center_24%] opacity-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/22 to-transparent" />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-4">
                <p className="eyebrow">250th Year Collection</p>
                <h2 className="font-display text-4xl text-brand-cream sm:text-5xl">
                  Heavy fleece, dusk light, open road.
                </h2>
                <p className="max-w-xl text-base leading-7 text-white/72">
                  A darker American palette built around cleaner graphics and a
                  stronger silhouette.
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
                    sizes="208px"
                    className="object-contain drop-shadow-[0_18px_44px_rgba(0,0,0,0.55)]"
                  />
                </div>
              </div>
            </div>

            <div className="section-shell grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center p-4 sm:p-5 lg:p-6">
              <div className="space-y-4 px-2 sm:px-3 lg:px-4">
                <p className="eyebrow">The crest</p>
                <h3 className="font-display text-3xl text-brand-cream sm:text-4xl">
                  {brand.tagline}
                </h3>
                <p className="text-sm leading-7 text-white/68 sm:text-base">
                  {brand.description} Leather, metal, countryside light, and a
                  black-and-bronze palette shape the world around the brand.
                </p>
              </div>
              <div className="relative min-h-[280px] overflow-hidden rounded-[1rem] border border-white/8">
                <Image
                  src={campaignImages.heroCouple}
                  alt="Founders crewneck and Redline shirt lifestyle couple image"
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="container-shell pt-8 sm:pt-10">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Featured collection"
              title="The 250th Year Collection starts with the strongest silhouettes."
              description="Founders up front. The Eagle Hoodie brings weight. The Redline Shirt adds a lighter summer read."
            />

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="section-shell relative overflow-hidden p-4 sm:p-5 lg:p-6">
                <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[1rem] border border-white/8 bg-[#f2ede3]">
                    <Image
                      src={leadProduct.image}
                      alt={leadProduct.imageAlt}
                      fill
                      quality={94}
                      sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 46vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-5">
                      <p className="eyebrow">Featured piece</p>
                      <h3 className="mt-2 font-display text-3xl text-brand-cream">
                        {leadProduct.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-white/66">
                        {leadProduct.cardDescription}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-5">
                        <p className="eyebrow">Price</p>
                        <p className="mt-2 text-3xl font-semibold text-brand-cream">
                          {formatPrice(leadProduct.price)}
                        </p>
                        <p className="mt-2 text-sm text-white/58">
                          Heavyweight fleece with a cleaner front read.
                        </p>
                      </div>
                      <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-5">
                        <p className="eyebrow">Fabric & finish</p>
                        <p className="mt-2 text-sm leading-6 text-white/64">
                          Brushed interior fleece, firm rib trim, and structure
                          that holds its shape through the day.
                        </p>
                      </div>
                    </div>

                    <div className="relative min-h-[250px] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30">
                      <Image
                        src={campaignImages.foundersStudio}
                        alt="Founders 1776 Crewneck studio campaign image"
                        fill
                        quality={92}
                        sizes="(min-width: 1280px) 26vw, (min-width: 1024px) 34vw, 100vw"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    interactiveImage={false}
                    imageSizes="(min-width: 1280px) 28vw, (min-width: 1024px) 34vw, 100vw"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="section-shell relative overflow-hidden p-4 sm:p-5 lg:p-6">
              <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] border border-white/8 bg-[#f2ede3]">
                  <Image
                    src="/true-american-wear/flag-sweater.jpg"
                    alt="Founders 1776 Crewneck product view"
                    fill
                    quality={94}
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="grid gap-4">
                  <div className="relative min-h-[190px] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30">
                    <Image
                      src={campaignImages.foundersDetail}
                      alt="Founders 1776 Crewneck detail view"
                      fill
                      quality={92}
                      sizes="(min-width: 1024px) 20vw, 100vw"
                      className="object-cover object-[center_26%]"
                    />
                  </div>
                  <div className="relative min-h-[210px] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30">
                    <Image
                      src={campaignImages.foundersLifestyleA}
                      alt="Founders 1776 Crewneck worn in late light"
                      fill
                      quality={92}
                      sizes="(min-width: 1024px) 20vw, 100vw"
                      className="object-cover object-[center_22%]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="section-shell flex flex-col justify-center space-y-6">
              <p className="eyebrow">Limited collection</p>
              <h2 className="font-display text-4xl leading-tight text-brand-cream sm:text-5xl">
                Founders 1776 Crewneck, built heavier and worn clean.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/72">
                Black fleece, sweeping flag movement, and an anniversary mark cut
                to read sharp from distance without losing its weight up close.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="eyebrow">Price</p>
                  <p className="mt-2 text-3xl font-semibold text-brand-cream">
                    {formatPrice(leadProduct.price)}
                  </p>
                  <p className="mt-2 text-sm text-white/58">
                    Heavyweight fleece with a clean front read.
                  </p>
                </div>
                <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-5">
                  <p className="eyebrow">How it wears</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">
                    Built for dark denim, work jackets, and cooler nights when
                    the fleece needs to hold its shape.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Heavy fleece built for cooler evenings and easy layering.",
                  "Sharp enough to stand alone, quiet enough to wear past the holiday.",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-[1rem] border border-white/8 bg-black/20 p-5"
                  >
                    <p className="text-sm leading-6 text-white/64">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="founders-intake" className="container-shell pt-8 sm:pt-10">
          <FoundersIntakeForm description="Join the list for first access, release dates, and the first word on what lands next." />
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="section-shell space-y-8 p-4 sm:space-y-9 sm:p-5 lg:p-6">
            <SectionHeading
              eyebrow="The campaign"
              title="Roadside light, pasture wind, and the last hour before dark."
              description="Four frames that keep the brand grounded in denim, truck metal, field dust, and station glow."
            />

            <div className="grid gap-6 xl:grid-cols-[1.14fr_0.86fr]">
              <div className="overflow-hidden rounded-[1rem] border border-white/8 bg-white/[0.03]">
                <div className="relative min-h-[420px] overflow-hidden md:min-h-[500px]">
                  <Image
                    src={campaignSpotlight.image}
                    alt={campaignSpotlight.title}
                    fill
                    quality={94}
                    sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 60vw, 100vw"
                    className={campaignSpotlight.imageClassName}
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="eyebrow">Campaign spotlight</p>
                  <h3 className="font-display text-3xl text-brand-cream sm:text-4xl">
                    {campaignSpotlight.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
                    {campaignSpotlight.copy}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                {campaignCards.map((frame) => (
                  <div
                    key={frame.title}
                    className="overflow-hidden rounded-[1rem] border border-white/8 bg-white/[0.03]"
                  >
                    <div className="relative min-h-[320px] overflow-hidden md:min-h-[360px] xl:min-h-[330px]">
                      <Image
                        src={frame.image}
                        alt={frame.title}
                        fill
                        quality={92}
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 33vw, 100vw"
                        className={frame.imageClassName}
                      />
                    </div>
                    <div className="space-y-2 p-5">
                      <p className="eyebrow">True American Wear</p>
                      <h3 className="font-display text-2xl text-brand-cream">
                        {frame.title}
                      </h3>
                      <p className="text-sm leading-6 text-white/64">{frame.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center p-4 sm:p-5 lg:p-6">
            <div className="space-y-4 px-2 sm:px-3 lg:px-4">
              <p className="eyebrow">More from the collection</p>
              <h2 className="font-display text-4xl text-brand-cream sm:text-5xl">
                The Eagle Hoodie and Redline Shirt complete the lineup.
              </h2>
              <p className="text-base leading-7 text-white/68">
                The hoodie carries crest detail and weight. The striped shirt adds
                contrast for hotter days and lighter summer wear.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {supportingProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/shop/${product.slug}`}
                    className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-4 transition hover:border-brand-gold/25 hover:bg-white/[0.05]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[0.9rem] bg-[#f2ede3]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        quality={90}
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 24vw, 100vw"
                        className="object-contain p-3"
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
              <div className="relative min-h-[260px] overflow-hidden rounded-[1rem] border border-white/8 bg-[#f2ede3] sm:min-h-[360px]">
                <Image
                  src="/true-american-wear/eagle-hoodie.jpg"
                  alt="Liberty Eagle Hoodie product image"
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[170px] overflow-hidden rounded-[1rem] border border-white/8 bg-[#f2ede3]">
                  <Image
                    src="/true-american-wear/red-stripes-shirt.jpg"
                    alt="Redline 250 Shirt product image"
                    fill
                    quality={92}
                    sizes="(min-width: 1024px) 20vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="relative min-h-[190px] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30">
                  <Image
                    src={campaignImages.coupleFoundersHoodie}
                    alt="Couple walking from the pasture field"
                    fill
                    quality={92}
                    sizes="(min-width: 1024px) 20vw, 100vw"
                    className="object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
