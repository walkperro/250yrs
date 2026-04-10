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
      "A red-and-cream striped shirt with a centered 250 Years mark and anniversary numerals, cut to bring contrast into an otherwise darker lineup.",
    badge: "Summer release",
    releaseNote: "Summer release piece.",
    materials: ["Midweight jersey knit", "All-over striped print", "Soft hand feel for everyday wear"],
    details: ["Straight fit", "Clean crew neckline", "Pairs easily with denim and boots"],
  },
  {
    slug: "45-47-tribute-crewneck",
    name: "Trump Nobel Peace Prize Sweater",
    shortName: "45 / 47 Crewneck",
    subtitle: "Additional statement patriotic crewneck",
    price: 150,
    image: "/true-american-wear/nobel-peace-sweater.jpg",
    imageAlt: "Gray tribute crewneck with 45 47 patriotic graphic.",
    cardDescription:
      "A niche statement graphic reserved for customers who want the most direct commemorative piece.",
    description:
      "A statement piece honoring our President's leadership, strength, and the conversation around him deserving a Nobel Peace Prize.",
    badge: "Statement Piece",
    releaseNote: "Limited-run statement piece.",
    materials: ["Midweight fleece", "Large front commemorative graphic", "Soft rib finishes"],
    details: ["Secondary product slot", "Intentional limited placement", "Merchandised below the core assortment"],
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
