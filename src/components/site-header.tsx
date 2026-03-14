import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-brand-obsidian/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
            <Image
              src="/true-american-wear/logo.png"
              alt="True American Wear logo"
              fill
              className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div>
            <p className="font-display text-[1.7rem] leading-none text-brand-cream sm:text-[1.95rem]">
              True American Wear
            </p>
            <p className="mt-1 text-[0.68rem] uppercase tracking-[0.28em] text-brand-gold/70">
              250th Year Collection
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
          <Link href="/#collection" className="transition hover:text-brand-cream">
            Collection
          </Link>
          <Link href="/#founders-intake" className="transition hover:text-brand-cream">
            Join the list
          </Link>
          <Link href="/shop" className="transition hover:text-brand-cream">
            Shop
          </Link>
        </nav>

        <Link href="/shop" className="button-primary hidden sm:inline-flex">
          View the collection
        </Link>
      </div>
    </header>
  );
}
