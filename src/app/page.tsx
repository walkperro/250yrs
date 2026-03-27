import type { Metadata } from "next";
import Image from "next/image";

import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `${brand.name} | Temporarily Unavailable`,
  description: "This website is currently offline pending account settlement.",
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,164,106,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(143,107,58,0.12),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />

      <section className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-brand-gold/15 bg-[linear-gradient(180deg,rgba(23,24,27,0.9)_0%,rgba(11,11,12,0.96)_100%)] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-10 sm:py-16">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,228,214,0.05),transparent_28%)]" />

        <div className="relative flex flex-col items-center text-center">
          <div className="relative mb-8 h-16 w-16 sm:h-20 sm:w-20">
            <Image
              src="/true-american-wear/logo.png"
              alt={`${brand.name} logo`}
              fill
              priority
              className="object-contain opacity-90 drop-shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
            />
          </div>

          <p className="eyebrow">Temporary Notice</p>

          <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[0.94] text-brand-cream sm:text-6xl md:text-7xl">
            Site temporarily unavailable
          </h1>

          <div className="mt-6 max-w-2xl space-y-4">
            <p className="text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
              This website is currently offline pending account settlement.
            </p>
            <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              To restore access, please complete the outstanding balance.
            </p>
            <p className="text-sm leading-6 text-white/48 sm:text-base">
              Once payment is received, the full site will be reinstated promptly.
            </p>
          </div>

          <div className="mt-10 flex w-full max-w-md flex-col items-center gap-3 border-t border-white/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold/88">
              Contact to restore access
            </p>
            <p className="text-sm leading-6 text-white/46">
              For account resolution, please contact the representative managing this site.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
