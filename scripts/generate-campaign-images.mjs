import fs from 'node:fs/promises';
import path from 'node:path';

import { GoogleGenAI, Modality } from '/data/data/com.termux/files/usr/lib/node_modules/@google/gemini-cli/node_modules/@google/genai/dist/node/index.mjs';

const ROOT = process.cwd();
const CAMPAIGN_PATH = path.join(ROOT, 'src/lib/true-american-wear-campaign.json');
const ENV_PATH = path.join(ROOT, '.env.local');
const OUTPUT_DIR = path.join(ROOT, 'public/campaign/true-american-wear');

const referenceMap = {
  1: ['public/true-american-wear/theme.jpg', 'public/true-american-wear/eagle-hoodie.jpg'],
  2: ['public/true-american-wear/theme.jpg', 'public/true-american-wear/flag-sweater.jpg', 'public/true-american-wear/red-stripes-shirt.jpg'],
  3: ['public/true-american-wear/flag-sweater.jpg'],
  4: ['public/true-american-wear/red-stripes-shirt.jpg'],
  5: ['public/true-american-wear/eagle-hoodie.jpg'],
  6: ['public/true-american-wear/flag-sweater.jpg'],
  7: ['public/true-american-wear/eagle-hoodie.jpg', 'public/true-american-wear/flag-sweater.jpg'],
  8: ['public/true-american-wear/red-stripes-shirt.jpg', 'public/true-american-wear/eagle-hoodie.jpg'],
  9: ['public/true-american-wear/flag-sweater.jpg'],
  10: ['public/true-american-wear/eagle-hoodie.jpg'],
  11: ['public/true-american-wear/flag-sweater.jpg'],
  12: ['public/true-american-wear/eagle-hoodie.jpg'],
};

function parseEnv(contents) {
  return Object.fromEntries(
    contents
      .split(/\r?\n/)
      .filter((line) => line && !line.startsWith('#') && line.includes('='))
      .map((line) => {
        const index = line.indexOf('=');
        return [line.slice(0, index), line.slice(index + 1)];
      }),
  );
}

function mimeForFile(filePath) {
  if (filePath.endsWith('.png')) return 'image/png';
  if (filePath.endsWith('.webp')) return 'image/webp';
  return 'image/jpeg';
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function extensionForMime(mime) {
  if (mime === 'image/jpeg') return 'jpg';
  if (mime === 'image/webp') return 'webp';
  return 'png';
}

async function loadReferenceParts(imageNumber) {
  const refs = referenceMap[imageNumber] ?? [];
  const parts = [];

  for (const relativePath of refs) {
    const absolutePath = path.join(ROOT, relativePath);
    const bytes = await fs.readFile(absolutePath);
    parts.push({
      inlineData: {
        mimeType: mimeForFile(relativePath),
        data: bytes.toString('base64'),
      },
    });
  }

  return parts;
}

async function main() {
  const env = parseEnv(await fs.readFile(ENV_PATH, 'utf8'));
  const apiKey = env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY in .env.local');
  }

  const campaign = JSON.parse(await fs.readFile(CAMPAIGN_PATH, 'utf8'));
  const ai = new GoogleGenAI({ apiKey });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const manifest = [];

  for (const image of campaign.images) {
    const parts = [{ text: image.final_prompt }, ...(await loadReferenceParts(image.image_number))];

    process.stdout.write(`Generating ${image.image_number}/12: ${image.image_purpose}...\n`);

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: [{ role: 'user', parts }],
      config: {
        responseModalities: [Modality.IMAGE],
        automaticFunctionCalling: { disable: true },
      },
    });

    const imagePart = response?.candidates?.[0]?.content?.parts?.find(
      (part) => part.inlineData?.data,
    );

    if (!imagePart) {
      throw new Error(`No image returned for campaign image ${image.image_number}`);
    }

    const extension = extensionForMime(imagePart.inlineData.mimeType);
    const filename = `${String(image.image_number).padStart(2, '0')}-${slugify(image.image_purpose)}-${slugify(image.product_name)}.${extension}`;
    const outPath = path.join(OUTPUT_DIR, filename);

    await fs.writeFile(outPath, Buffer.from(imagePart.inlineData.data, 'base64'));

    manifest.push({
      image_number: image.image_number,
      image_purpose: image.image_purpose,
      product_name: image.product_name,
      file: `/campaign/true-american-wear/${filename}`,
    });
  }

  await fs.writeFile(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  );

  process.stdout.write('Generation complete.\n');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
