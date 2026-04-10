# SEO Handoff

## What was added

- Global App Router metadata for titles, descriptions, keywords, canonicals, Open Graph, Twitter, robots, and icons.
- Page-level metadata for the homepage, `/shop`, and dynamic product pages under `/shop/[slug]`.
- JSON-LD structured data for `Organization` and `WebSite` globally, plus homepage `WebPage`, shop `CollectionPage`, and product `Product` schema.
- Dynamic `robots.ts` and `sitemap.ts` configured for the live production domain.
- A production OG image at `src/app/opengraph-image.jpg` using the existing logo asset.
- Improved heading semantics on the shop page so the primary page heading is an `h1`.

## URLs

- Sitemap: `https://trueamericanwear.com/sitemap.xml`
- Robots: `https://trueamericanwear.com/robots.txt`

## Canonical strategy

- Global metadata sets the default canonical to the homepage.
- The homepage uses canonical `/`.
- The shop page uses canonical `/shop`.
- Each product page uses canonical `/shop/[slug]` based on the current product slug.

## Google Search Console next steps

1. Open Google Search Console and add the property `https://trueamericanwear.com`.
2. Verify ownership using your preferred method, typically the recommended DNS record for the domain.
3. In Search Console, submit the sitemap URL: `https://trueamericanwear.com/sitemap.xml`.
4. Use URL Inspection to request indexing for the homepage first: `https://trueamericanwear.com/`.
5. Use URL Inspection to request indexing for the shop page second: `https://trueamericanwear.com/shop`.
6. After those are submitted, request indexing for priority product pages as needed.

## Request indexing note

- Request indexing for the homepage and shop page first before submitting individual product URLs.
