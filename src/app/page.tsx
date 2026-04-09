import Image from "next/image";
import Link from "next/link";

import { FoundersIntakeForm } from "@/components/founders-intake-form";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/brand";
import { campaignGallery, campaignImages } from "@/lib/campaign-images";
import { featuredProducts, formatPrice } from "@/lib/products";

export default function Home() {
  const leadProduct = featuredProducts[0];
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
                    Built for the 250th year. Patriotic American apparel made to celebrate America’s 250th anniversary.
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
                  "Heavyweight fleece with a structured fit and clean finish.",
                  "Built for cool nights, early mornings, and everyday wear.",
                  "Pairs easy with denim, boots, or a work jacket.",
                ].map((line) => (
                  <p key={line} className="text-sm leading-6 text-white/60">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="section-shell relative min-h-[500px] overflow-hidden p-0 sm:min-h-[540px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={campaignImages.foundersLifestyleB}
                  alt="Woman wearing the Founders 1776 Crewneck walking down the road at sunset"
                  fill
                  priority
                  quality={94}
                  sizes="(min-width: 1280px) 44vw, (min-width: 1024px) 48vw, 100vw"
                  className="object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,12,0.16)_0%,rgba(11,11,12,0.28)_34%,rgba(11,11,12,0.84)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,228,214,0.08),transparent_34%)]" />
              </div>

              <div className="relative flex h-full items-end p-5 sm:p-6 lg:p-8">
                <div className="max-w-lg space-y-4 rounded-[1.2rem] border border-white/10 bg-brand-obsidian/58 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.38)] backdrop-blur-md sm:p-6">
                  <p className="eyebrow">250th Year Collection</p>
                  <h2 className="font-display text-4xl text-brand-cream sm:text-5xl">
                    Heavy fleece, dusk light, open road.
                  </h2>
                  <p className="max-w-xl text-base leading-7 text-white/72">
                    Patriotic apparel built to celebrate 250 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell pt-8 sm:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.74fr_1.26fr] lg:gap-8">
            <div className="section-shell relative min-h-[240px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,164,106,0.2),transparent_38%),linear-gradient(180deg,#1a1b1d_0%,#0b0b0c_100%)]" />
              <div className="relative flex h-full items-center justify-center p-4 sm:p-5">
                <div className="relative h-60 w-full max-w-[18rem] sm:h-72 sm:max-w-[20rem]">
                  <Image
                    src="/true-american-wear/logo.png"
                    alt="True American Wear crest"
                    fill
                    sizes="(min-width: 640px) 320px, 288px"
                    className="scale-[1.22] object-contain drop-shadow-[0_18px_44px_rgba(0,0,0,0.55)] sm:scale-[1.26]"
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
                  {brand.description} Built with durable materials, clean lines,
                  and a classic American feel.
                </p>
              </div>
              <div className="relative min-h-[312px] overflow-hidden rounded-[1rem] border border-white/8">
                <Image
                  src={campaignImages.heroCouple}
                  alt="Founders crewneck and Redline shirt lifestyle couple image"
                  fill
                  quality={92}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-[center_34%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="container-shell pt-8 sm:pt-10">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Featured collection"
              title="The 250th Year Collection starts with the pieces that stand out most."
              description="Start with the Founders Crewneck, layer in the Eagle Hoodie, and finish with the Redline Shirt for warmer days."
            />

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <div className="section-shell relative overflow-hidden p-4 sm:p-5 lg:p-6">
                <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[1rem] border border-white/8 bg-black/30">
                    <Image
                      src={campaignImages.heroHoodie}
                      alt="Model wearing the Liberty Eagle Hoodie beside a black truck"
                      fill
                      quality={94}
                      sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 46vw, 100vw"
                      className="object-cover object-[center_18%]"
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

        <section id="founders-intake" className="container-shell pt-6 sm:pt-8">
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
      </main>

      <SiteFooter />
    </>
  );
}
