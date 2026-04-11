import type { CSSProperties } from "react";

export type ProductGalleryImage = {
  src: string;
  alt: string;
};

export type ProductCardGalleryImage = ProductGalleryImage & {
  className?: string;
  itemClassName?: string;
  itemStyle?: CSSProperties;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  price: number;
  image: string;
  imageAlt: string;
  cardDescription: string;
  description: string;
  badge: string;
  releaseNote: string;
  materials: string[];
  details: string[];
  kind?: "standard" | "set";
  seoTitle?: string;
  seoDescription?: string;
  gallery?: ProductGalleryImage[];
  bundleCardTitle?: string;
  bundleCardAccent?: string;
  bundleCardDescription?: string[];
  bundleCardImages?: ProductCardGalleryImage[];
};

export const products: Product[] = [
  {
    slug: "making-waves-in-history-t-shirt",
    name: "Making Waves In History T-Shirt",
    shortName: "Making Waves Tee",
    subtitle: "Limited-run MAGA tee",
    price: 100,
    image: "/true-american-wear/maga_history_shirt.jpg",
    imageAlt: "Making Waves In History T-Shirt product image.",
    cardDescription: "Limited run — only 150,000 made.",
    description: "Limited run — only 150,000 made.",
    badge: "NEW RELEASE",
    releaseNote: "Limited run — only 150,000 made.",
    materials: [
      "Premium cotton jersey",
      "Full-front MAGA graphic",
      "Soft hand feel with structured drape",
    ],
    details: [
      "Standard fit",
      "Designed for clean standalone wear",
      "Placed near the top of the collection",
    ],
    seoTitle: "Making Waves In History T-Shirt",
    seoDescription:
      "Shop the Making Waves In History T-Shirt from True American Wear, a limited-run patriotic graphic tee with a bold front print and clean everyday fit.",
    gallery: [
      {
        src: "/true-american-wear/maga_history_shirt.jpg",
        alt: "Making Waves In History T-Shirt product image.",
      },
      {
        src: "/campaign/true-american-wear/making-waves-female-editorial.jpg",
        alt: "Light skin Black female model wearing Making Waves in History T-shirt",
      },
      {
        src: "/campaign/true-american-wear/making-waves-couple-editorial.jpg",
        alt: "Mexican couple wearing Making Waves in History T-shirt",
      },
    ],
  },
  {
    slug: "founders-1776-crewneck",
    name: "Founders 1776 Crewneck",
    shortName: "1776 Crewneck",
    subtitle: "Black 250 Years crewneck",
    price: 150,
    image: "/true-american-wear/flag-sweater.jpg",
    imageAlt: "Black 1776 250 Years 2026 crewneck with sweeping flag graphic.",
    cardDescription:
      "Heavyweight black fleece finished with a bold flag sweep and distressed anniversary graphic.",
    description:
      "A structured black crewneck with a strong shoulder, brushed interior, and a front graphic built to carry the 250th year with weight and presence.",
    badge: "Featured piece",
    releaseNote: "Limited collection.",
    materials: [
      "14 oz brushed fleece",
      "Structured rib collar and cuffs",
      "Vintage-distressed front graphic",
    ],
    details: [
      "Relaxed athletic fit",
      "All-season layering weight",
      "Built for the Fourth and beyond",
    ],
  },
  {
    slug: "liberty-eagle-hoodie",
    name: "Liberty Eagle Hoodie",
    shortName: "Eagle Hoodie",
    subtitle: "Gray 250 Years eagle hoodie",
    price: 250,
    image: "/true-american-wear/eagle-hoodie.jpg",
    imageAlt: "Gray hoodie with 1776 2026 eagle artwork and 250 Years text.",
    cardDescription:
      "Heather gray fleece with eagle artwork, heritage numerals, and a strong hood lining.",
    description:
      "Heather gray fleece with a broad-wing eagle graphic, 1776 to 2026 lettering, and a hood lined to carry the piece from front to back.",
    badge: "Collection essential",
    releaseNote: "Core collection staple.",
    materials: ["Heavy fleece hoodie body", "Double-layer hood", "Front pouch pocket"],
    details: ["Graphic-led statement piece", "Drawcord hood closure", "Soft brushed hand feel"],
  },
  {
    slug: "redline-250-shirt",
    name: "Redline 250 Shirt",
    shortName: "Redline Shirt",
    subtitle: "Red striped 250 Years shirt",
    price: 85,
    image: "/true-american-wear/red-stripes-shirt.jpg",
    imageAlt: "Red and white striped 250 Years shirt with 1776 and 2026 text.",
    cardDescription:
      "A striped summer release that brings color to the collection without losing the edge.",
    description:
      "A red-and-cream striped shirt with a centered 250 Years mark and anniversary numerals, designed to add a sharper pop of color to the collection.",
    badge: "Summer release",
    releaseNote: "Summer release piece.",
    materials: ["Midweight jersey knit", "All-over striped print", "Soft hand feel for everyday wear"],
    details: ["Straight fit", "Clean crew neckline", "Pairs easily with denim and boots"],
  },
  {
    slug: "45-47-tribute-crewneck",
    name: "45-47 Tribute Crewneck",
    shortName: "45-47 Crewneck",
    subtitle: "Commemorative patriotic crewneck",
    price: 150,
    image: "/true-american-wear/nobel-peace-sweater.jpg",
    imageAlt: "45-47 Tribute Crewneck product image.",
    cardDescription:
      "A bold statement piece with a striking patriotic graphic and a clean, premium finish.",
    description:
      "Nobel Peace Prize Tribute Crewneck. A bold statement piece honoring a defining moment in history. This heavyweight crewneck features a striking patriotic graphic with a clean, premium finish. Built for those who wear conviction, not just clothing.",
    badge: "Statement Piece",
    releaseNote: "Limited-run statement piece.",
    materials: ["Midweight fleece", "Large front patriotic graphic", "Soft rib finishes"],
    details: ["Secondary product slot", "Intentional limited placement", "Merchandised below the core assortment"],
    seoTitle: "45-47 Tribute Crewneck",
    seoDescription:
      "Nobel Peace Prize Tribute Crewneck. A bold statement piece honoring a defining moment in history. This heavyweight crewneck features a striking patriotic graphic with a clean, premium finish. Built for those who wear conviction, not just clothing.",
    gallery: [
      {
        src: "/true-american-wear/nobel-peace-sweater.jpg",
        alt: "45-47 Tribute Crewneck product image.",
      },
      {
        src: "/campaign/true-american-wear/nobel-peace-sweater-chinese-male-editorial.jpg",
        alt: "Chinese male model wearing the 45-47 Tribute Crewneck",
      },
      {
        src: "/campaign/true-american-wear/nobel-peace-sweater-puerto-rican-female-editorial.jpg",
        alt: "Puerto Rican female model wearing the 45-47 Tribute Crewneck",
      },
    ],
  },
  {
    slug: "jacket-boots",
    name: "Jacket + Boots",
    shortName: "Jacket + Boots Set",
    subtitle: "Heritage outerwear and boot set",
    price: 1500,
    image: "/true-american-wear/jacket.jpg",
    imageAlt: "True American Wear jacket standalone product image.",
    cardDescription:
      "A premium heritage jacket and leather boots paired together as a complete 250th year set.",
    description:
      "A premium set pairing the heritage jacket with leather boots for a complete look built with stronger texture, clean structure, and elevated Americana styling.",
    badge: "Featured set",
    releaseNote: "Limited-run numbered set.",
    materials: ["Structured heritage jacket", "Premium leather boots", "Built as a matched set"],
    details: ["Includes jacket and boots", "10 year warranty", "Numbered set release"],
    kind: "set",
    seoTitle: "Jacket + Boots",
    seoDescription:
      "Shop the Jacket + Boots set from True American Wear, a premium Americana pairing built around a heritage jacket and leather boots.",
    gallery: [
      {
        src: "/true-american-wear/jacket.jpg",
        alt: "True American Wear jacket standalone product image.",
      },
      {
        src: "/true-american-wear/boots.jpg",
        alt: "True American Wear boots standalone product image.",
      },
      {
        src: "/campaign/true-american-wear/jacket-boots-woman-editorial.jpg",
        alt: "Blonde woman styled in the Jacket + Boots set",
      },
      {
        src: "/campaign/true-american-wear/jacket-boots-harley-editorial.jpg",
        alt: "Blonde woman styled in the Jacket + Boots set beside a motorcycle",
      },
      {
        src: "/campaign/true-american-wear/jacket-boots-male-editorial.jpg",
        alt: "Male model wearing True American Wear jacket and boots",
      },
      {
        src: "/campaign/true-american-wear/jacket-boots-male-lifestyle.jpg",
        alt: "Male lifestyle image wearing True American Wear jacket and boots",
      },
    ],
    bundleCardTitle: "Buy the Set",
    bundleCardAccent: "Featured set",
    bundleCardDescription: [
      "Only 200,000 made in the world.",
      "10 year warranty.",
      "Each set comes with its own patriot number.",
    ],
    bundleCardImages: [
      {
        src: "/true-american-wear/jacket.jpg",
        alt: "Premium heritage jacket from the 250th year collection.",
      },
      {
        src: "/true-american-wear/boots.jpg",
        alt: "Premium leather boots from the 250th year collection.",
        itemStyle: { backgroundColor: "#d0c7bf" },
        className:
          "object-contain object-center scale-[1.12] p-1 transition duration-500 group-hover:scale-[1.15]",
      },
    ],
  },
  {
    slug: "founders-crewneck-1776-shoes-white",
    name: "Founders Crewneck 1776 + Shoes (White)",
    shortName: "Founders White Set",
    subtitle: "White crewneck and shoes set",
    price: 350,
    image: "/true-american-wear/flag-sweater-white.jpg",
    imageAlt: "Founders Crewneck 1776 + Shoes (White) crewneck standalone product image.",
    cardDescription:
      "A clean white set pairing the Founders Crewneck 1776 with matching footwear for a full 250th year look.",
    description:
      "A white set built around the Founders Crewneck 1776 and matching shoes, designed to bring a brighter, more elevated finish to the 250th Year Collection.",
    badge: "Bundle offer",
    releaseNote: "Limited bundle release.",
    materials: ["White Founders 1776 crewneck", "Matching white shoes", "Coordinated set styling"],
    details: ["Includes crewneck and shoes", "Clean full-look pairing", "Built for standout contrast"],
    kind: "set",
    seoTitle: "Founders Crewneck 1776 + Shoes (White)",
    seoDescription:
      "Shop the Founders Crewneck 1776 + Shoes (White) set from True American Wear, a premium white crewneck and shoe pairing built for the 250th Year Collection.",
    gallery: [
      {
        src: "/true-american-wear/flag-sweater-white.jpg",
        alt: "Founders Crewneck 1776 + Shoes (White) crewneck standalone product image.",
      },
      {
        src: "/true-american-wear/shoes-white.jpg",
        alt: "Founders Crewneck 1776 + Shoes (White) shoe standalone product image.",
      },
      {
        src: "/campaign/true-american-wear/founders-white-solo-editorial.jpg",
        alt: "White model wearing the Founders Crewneck 1776 + Shoes (White) set",
      },
      {
        src: "/campaign/true-american-wear/founders-white-couple-editorial.jpg",
        alt: "White couple featuring the Founders Crewneck 1776 + Shoes (White) set",
      },
    ],
    bundleCardTitle: "Buy the Set",
    bundleCardAccent: "Bundle offer",
    bundleCardDescription: ["Only 100,000 made in the world."],
    bundleCardImages: [
      {
        src: "/true-american-wear/flag-sweater-white.jpg",
        alt: "White Founders 1776 Crewneck with flag graphic.",
      },
      {
        src: "/true-american-wear/shoes-white.jpg",
        alt: "White shoes paired with the Founders set.",
      },
    ],
  },
  {
    slug: "founders-crewneck-1776-shoes-black",
    name: "Founders Crewneck 1776 + Shoes (Black)",
    shortName: "Founders Black Set",
    subtitle: "Black crewneck and shoes set",
    price: 350,
    image: "/true-american-wear/flag-sweater.jpg",
    imageAlt: "Founders Crewneck 1776 + Shoes (Black) crewneck standalone product image.",
    cardDescription:
      "A darker Founders set pairing the black crewneck with matching shoes for a complete 250th year look.",
    description:
      "A black set built around the Founders Crewneck 1776 and matching shoes, styled to deliver a complete heritage look with stronger contrast and structure.",
    badge: "Bundle offer",
    releaseNote: "Limited bundle release.",
    materials: ["Black Founders 1776 crewneck", "Matching black shoes", "Coordinated set styling"],
    details: ["Includes crewneck and shoes", "Built as a full-look set", "Made for a stronger heritage finish"],
    kind: "set",
    seoTitle: "Founders Crewneck 1776 + Shoes (Black)",
    seoDescription:
      "Shop the Founders Crewneck 1776 + Shoes (Black) set from True American Wear, a premium black crewneck and shoe pairing built for the 250th Year Collection.",
    gallery: [
      {
        src: "/true-american-wear/flag-sweater.jpg",
        alt: "Founders Crewneck 1776 + Shoes (Black) crewneck standalone product image.",
      },
      {
        src: "/true-american-wear/shoes-black.jpg",
        alt: "Founders Crewneck 1776 + Shoes (Black) shoe standalone product image.",
      },
      {
        src: "/campaign/true-american-wear/founders-black-solo-editorial.jpg",
        alt: "Model wearing the Founders Crewneck 1776 + Shoes (Black) set",
      },
      {
        src: "/campaign/true-american-wear/founders-black-couple-editorial.jpg",
        alt: "Cuban couple featuring the Founders Crewneck 1776 + Shoes (Black) set",
      },
    ],
    bundleCardTitle: "Buy the Set",
    bundleCardAccent: "Bundle offer",
    bundleCardDescription: ["Only 100,000 made in the world."],
    bundleCardImages: [
      {
        src: "/true-american-wear/flag-sweater.jpg",
        alt: "Black Founders 1776 Crewneck with flag graphic.",
      },
      {
        src: "/true-american-wear/shoes-black.jpg",
        alt: "Black footwear paired with the Founders set.",
      },
    ],
  },
];

export const standardProducts = products.filter((product) => product.kind !== "set");

export const setProducts = products.filter((product) => product.kind === "set");

export const featuredProducts = standardProducts.slice(0, 3);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
