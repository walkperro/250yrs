import type { Metadata } from "next";

import { brand } from "@/lib/brand";

export const siteUrl = "https://trueamericanwear.com";
export const siteName = brand.name;
export const defaultTitle = siteName;
export const defaultDescription =
  "Premium patriotic American apparel celebrating the 250th anniversary of the United States.";
export const defaultKeywords = [
  "patriotic clothing",
  "American apparel",
  "1776 clothing",
  "USA shirts",
  "250th anniversary apparel",
  "patriotic shirts",
  "patriotic hoodies",
  "American crewnecks",
  "250th Year Collection",
  "True American Wear",
];

export const defaultOgImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "True American Wear — 250th Year Collection",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildTitle(title?: string) {
  if (!title || title === siteName) {
    return siteName;
  }

  return `${title} | ${siteName}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  images,
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  images?: Metadata["openGraph"] extends { images?: infer T } ? T : never;
  keywords?: string[];
}): Metadata {
  const resolvedTitle = buildTitle(title);
  const resolvedDescription = description ?? defaultDescription;
  const resolvedImages = images ?? [defaultOgImage];

  return {
    title: title ?? defaultTitle,
    description: resolvedDescription,
    keywords: keywords ?? defaultKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: path,
      siteName,
      locale: "en_US",
      type: "website",
      images: resolvedImages,
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: Array.isArray(resolvedImages)
        ? resolvedImages.map((image) => (typeof image === "string" ? image : image.url))
        : undefined,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/true-american-wear/logo.png"),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
};
