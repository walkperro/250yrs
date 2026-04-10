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
  seoTitle?: string;
  seoDescription?: string;
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
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
      "A commemorative crewneck with a bold tribute graphic and a clean heavyweight presentation.",
    description:
      "A commemorative gray crewneck with a bold 45-47 tribute graphic, heavyweight feel, and a statement look built for the collection.",
    badge: "Statement Piece",
    releaseNote: "Limited-run statement piece.",
    materials: ["Midweight fleece", "Large front commemorative graphic", "Soft rib finishes"],
    details: ["Secondary product slot", "Intentional limited placement", "Merchandised below the core assortment"],
    seoTitle: "45-47 Tribute Crewneck",
    seoDescription:
      "Shop the 45-47 Tribute Crewneck from True American Wear, a commemorative patriotic crewneck with a bold statement graphic and heavyweight fleece feel.",
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
];

export const featuredProducts = products.slice(0, 3);

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
