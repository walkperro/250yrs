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
    title: "Open-road light",
    copy: "Sunset light, dark denim, and the eagle hoodie out in the field.",
    image: campaignImages.heroHoodie,
  },
  {
    title: "Founders in the field",
    copy: "A clean couple frame built around the 250th Year Collection.",
    image: campaignImages.heroCouple,
  },
  {
    title: "Golden-hour quiet",
    copy: "The stronger silhouettes, worn the way they should be.",
    image: campaignImages.coupleFoundersHoodie,
  },
  {
    title: "Roadside after dark",
    copy: "A sharper take on Americana under station light.",
    image: campaignImages.coupleRedlineHoodie,
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
    detail: campaignImages.heroCouple,
  },
  "45-47-tribute-crewneck": {
    lifestyle: campaignImages.foundersStudio,
    detail: campaignImages.heroHoodie,
  },
} as const;
