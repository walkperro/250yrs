export const campaignImages = {
  heroHoodie: "/campaign/true-american-wear/01-homepage-hero-banner-liberty-eagle-hoodie.webp",
  heroCouple: "/campaign/true-american-wear/02-homepage-hero-banner-founders-1776-crewneck-and-redline-250-shirt.webp",
  foundersLifestyleA:
    "/campaign/true-american-wear/03-lifestyle-product-shot-founders-1776-crewneck.webp",
  redlineLifestyle:
    "/campaign/true-american-wear/04-lifestyle-product-shot-redline-250-shirt.webp",
  hoodieLifestyle:
    "/campaign/true-american-wear/05-lifestyle-product-shot-liberty-eagle-hoodie.webp",
  foundersLifestyleB:
    "/campaign/true-american-wear/06-lifestyle-product-shot-founders-1776-crewneck.webp",
  coupleFoundersHoodie:
    "/campaign/true-american-wear/07-couple-shot-founders-1776-crewneck-and-liberty-eagle-hoodie.webp",
  coupleRedlineHoodie:
    "/campaign/true-american-wear/08-couple-shot-redline-250-shirt-and-liberty-eagle-hoodie.webp",
  foundersDetail:
    "/campaign/true-american-wear/09-close-detail-shot-founders-1776-crewneck.webp",
  hoodieDetail:
    "/campaign/true-american-wear/10-close-detail-shot-liberty-eagle-hoodie.webp",
  foundersStudio:
    "/campaign/true-american-wear/11-ecommerce-product-marketing-shot-founders-1776-crewneck.webp",
  hoodieStudio:
    "/campaign/true-american-wear/12-ecommerce-product-marketing-shot-liberty-eagle-hoodie.webp",
} as const;

export const campaignGallery = [
  {
    title: "Built for the Open Road",
    copy: "Built for open roads and everyday wear. Structured to hold its shape from morning through night.",
    image: campaignImages.heroHoodie,
    imageClassName: "object-cover object-[center_24%]",
  },
  {
    title: "Truckside Wear",
    copy: "Heavyweight layers built to hold their shape — designed for denim, workwear, and everyday wear on and off the road.",
    image: campaignImages.hoodieLifestyle,
    imageClassName: "object-cover object-[center_18%]",
  },
  {
    title: "Roadside Standard",
    copy: "Clean graphics and structured fits made for long days, late nights, and everything after.",
    image: campaignImages.coupleRedlineHoodie,
    imageClassName: "object-cover object-[center_18%]",
  },
  {
    title: "Out in the Field",
    copy: "Classic pieces built for everyday wear.",
    image: campaignImages.coupleFoundersHoodie,
    imageClassName: "object-cover object-[center_20%]",
  },
] as const;

export const lifestyleBySlug = {
  "founders-1776-crewneck": {
    lifestyle: campaignImages.foundersLifestyleA,
    detail: campaignImages.foundersDetail,
  },
  "liberty-eagle-hoodie": {
    lifestyle: campaignImages.hoodieLifestyle,
    detail: campaignImages.hoodieDetail,
  },
  "redline-250-shirt": {
    lifestyle: campaignImages.redlineLifestyle,
    detail: campaignImages.coupleRedlineHoodie,
  },
  "45-47-tribute-crewneck": {
    lifestyle: campaignImages.foundersStudio,
    detail: campaignImages.heroHoodie,
  },
} as const;
