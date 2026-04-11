import fs from 'node:fs/promises';
import path from 'node:path';

import { GoogleGenAI, Modality } from '/data/data/com.termux/files/usr/lib/node_modules/@google/gemini-cli/node_modules/@google/genai/dist/node/index.mjs';

const ROOT = process.cwd();
const ENV_PATH = path.join(ROOT, '.env.local');
const OUTPUT_DIR = path.join(ROOT, 'public/campaign/true-american-wear');

const jobs = [
  {
    referenceImage: 'public/true-american-wear/nobel-peace-sweater.jpg',
    filename: 'nobel-peace-sweater-chinese-male-editorial.png',
    prompt:
      'Create an ultra realistic premium editorial fashion image for True American Wear. Use public/true-american-wear/nobel-peace-sweater.jpg as the exact garment reference for the 45-47 Tribute Crewneck, preserving the gray crewneck color, commemorative front graphic, numeral layout, and overall sweater design exactly as shown. Feature a Chinese male model in his late 20s with clean grooming, natural skin texture, and a confident relaxed expression. Style him in dark indigo denim and understated boots, photographed in a premium studio-meets-lifestyle setting with soft directional light and a clean dark-neutral background. Frame the image for ecommerce product gallery use, waist-up to three-quarter, with the full sweater design clearly visible, realistic fleece texture, believable folds, premium editorial fashion photography, cinematic but realistic, no AI gloss, no extra accessories blocking the garment, square composition.',
  },
  {
    referenceImage: 'public/true-american-wear/nobel-peace-sweater.jpg',
    filename: 'nobel-peace-sweater-puerto-rican-female-editorial.png',
    prompt:
      'Generate a premium realistic editorial fashion image for True American Wear. Use public/true-american-wear/nobel-peace-sweater.jpg as the exact garment reference for the 45-47 Tribute Crewneck, preserving the gray crewneck color, commemorative front graphic, numeral placement, and sweater proportions exactly as shown. Feature a Puerto Rican-looking woman in her late 20s with natural glam styling, believable skin detail, and a poised confident expression. Style her in dark denim with minimal accessories in a polished lifestyle-studio environment with soft cinematic lighting and a refined Americana mood. Compose for ecommerce product gallery use, waist-up to three-quarter, with the sweater artwork fully readable and unobstructed, realistic fleece texture, believable drape, premium editorial photography, no AI gloss, square composition.',
  },
  {
    referenceImage: 'public/true-american-wear/maga_history_shirt.jpg',
    filename: 'making-waves-female-editorial.png',
    prompt:
      'Create an ultra realistic premium editorial studio fashion image for True American Wear. Use public/true-american-wear/maga_history_shirt.jpg as the exact garment reference for the Making Waves In History T-Shirt, preserving the shirt color, front graphic, typography, and artwork placement exactly as shown. Feature a light skin Black female model in her mid 20s with natural makeup, realistic skin texture, and a calm confident expression. Style her in clean dark denim in a polished studio setup with soft high-end lighting and a refined neutral backdrop. Compose for ecommerce gallery use in a square frame, waist-up to three-quarter, with the full shirt design clearly visible and unobstructed, realistic cotton texture, believable drape, premium editorial product photography, cinematic but realistic, no AI gloss.',
  },
  {
    referenceImage: 'public/true-american-wear/maga_history_shirt.jpg',
    filename: 'making-waves-couple-editorial.png',
    prompt:
      'Generate a premium realistic lifestyle fashion image for True American Wear. Use public/true-american-wear/maga_history_shirt.jpg as the exact garment reference for the Making Waves In History T-Shirt, preserving the shirt color, front graphic, typography, and artwork placement exactly as shown. Feature a stylish Mexican couple wearing the same shirt, with natural skin detail, believable expressions, and premium Americana styling. Place them in a refined lifestyle setting with clean high-end lighting and an upscale editorial feel, keeping both shirt graphics readable and unobstructed. Compose for ecommerce gallery use in a square frame, realistic cotton texture, believable folds, polished but natural photography, no AI gloss.',
  },
  {
    referenceImages: ['public/true-american-wear/jacket.jpg', 'public/true-american-wear/boots.jpg'],
    filename: 'jacket-boots-woman-editorial.png',
    prompt:
      'Create an ultra realistic premium editorial fashion image for True American Wear. Use public/true-american-wear/jacket.jpg and public/true-american-wear/boots.jpg as the exact product references for the Jacket + Boots set, preserving the jacket shape, tone, construction details, and the boot silhouette, leather finish, and overall styling direction accurately. Feature a good-looking white blonde woman styled in the jacket and boots with natural skin texture and a poised, elevated expression. Photograph her in a refined editorial environment with premium luxury Americana mood, clean directional lighting, and strong visibility of both the jacket and boots. Compose for ecommerce gallery use in a square frame, full or three-quarter body, realistic garment texture, believable fit, cinematic but realistic, no AI gloss.',
  },
  {
    referenceImages: ['public/true-american-wear/jacket.jpg', 'public/true-american-wear/boots.jpg'],
    filename: 'jacket-boots-harley-editorial.png',
    prompt:
      'Generate a premium realistic fashion lifestyle image for True American Wear. Use public/true-american-wear/jacket.jpg and public/true-american-wear/boots.jpg as the exact product references for the Jacket + Boots set, preserving the jacket and boot design accurately. Feature the same white blonde woman styled in the jacket and boots beside a Harley-Davidson-style motorcycle in a tasteful aspirational Americana scene. Keep the mood elevated, premium, and authentic rather than cheesy, with clean lighting, realistic skin detail, strong product visibility, and a square ecommerce-ready composition.',
  },
  {
    referenceImages: ['public/true-american-wear/jacket.jpg', 'public/true-american-wear/boots.jpg'],
    filename: 'jacket-boots-male-editorial.png',
    prompt:
      'Create an ultra realistic premium editorial fashion image for True American Wear. Use public/true-american-wear/jacket.jpg and public/true-american-wear/boots.jpg as the exact product references for the Jacket + Boots set, preserving the jacket shape, leather finish, graphic details, and the boot silhouette and finish accurately. Feature a good-looking man wearing the jacket and boots with strong masculine styling, clean grooming, realistic skin texture, and a confident aspirational posture. Photograph him in a refined indoor editorial setting with premium luxury Americana mood, soft directional light, clear visibility of both jacket and boots, and a square ecommerce-ready composition. Keep it polished, realistic, and product-forward with no AI gloss.',
  },
  {
    referenceImages: ['public/true-american-wear/jacket.jpg', 'public/true-american-wear/boots.jpg'],
    filename: 'jacket-boots-male-lifestyle.png',
    prompt:
      'Generate a premium realistic Americana lifestyle image for True American Wear. Use public/true-american-wear/jacket.jpg and public/true-american-wear/boots.jpg as the exact product references for the Jacket + Boots set, preserving the product design accurately. Feature a stylish man wearing the jacket and boots in a different pose and setting from the editorial shot, ideally outdoors or in a grounded Americana environment, while keeping the product clearly visible and the mood elevated rather than generic. Use clean premium lighting, realistic skin and leather texture, strong masculine styling, and a square ecommerce-usable composition.',
  },
  {
    referenceImages: ['public/true-american-wear/flag-sweater-white.jpg', 'public/true-american-wear/shoes-white.jpg'],
    filename: 'founders-white-solo-editorial.png',
    prompt:
      'Create an ultra realistic premium lifestyle-editorial fashion image for True American Wear. Use public/true-american-wear/flag-sweater-white.jpg and public/true-american-wear/shoes-white.jpg as the exact product references for the Founders Crewneck 1776 + Shoes (White) set, preserving the white crewneck design, graphic placement, and the matching white shoe styling accurately. Feature a white model wearing the full set in a polished premium setting with strong natural posture, realistic skin and fabric detail, and clear visibility of the crewneck and shoes. Compose for square ecommerce gallery use, full or three-quarter body, clean high-end lighting, premium but believable, no AI gloss.',
  },
  {
    referenceImages: ['public/true-american-wear/flag-sweater-white.jpg', 'public/true-american-wear/shoes-white.jpg'],
    filename: 'founders-white-couple-editorial.png',
    prompt:
      'Generate a premium realistic lifestyle image for True American Wear. Use public/true-american-wear/flag-sweater-white.jpg and public/true-american-wear/shoes-white.jpg as the exact product references for the Founders Crewneck 1776 + Shoes (White) set, preserving the product design accurately. Feature a stylish white couple wearing or clearly featuring the set in a natural upscale Americana environment with clean high-end lighting and editorial quality. Keep the image realistic, premium, and ecommerce-usable with the white crewneck and shoes clearly visible in a square frame.',
  },
  {
    referenceImages: ['public/true-american-wear/flag-sweater.jpg', 'public/true-american-wear/shoes-black.jpg'],
    filename: 'founders-black-solo-editorial.png',
    prompt:
      'Create an ultra realistic premium lifestyle-editorial fashion image for True American Wear. Use public/true-american-wear/flag-sweater.jpg and public/true-american-wear/shoes-black.jpg as the exact product references for the Founders Crewneck 1776 + Shoes (Black) set, preserving the black crewneck design, graphic placement, and matching black shoe styling accurately. Feature a model wearing the full black set in a premium lifestyle setting with realistic skin detail, believable fabric texture, and strong product visibility. Compose for a square ecommerce gallery frame with clean directional lighting, elevated Americana mood, and no AI gloss.',
  },
  {
    referenceImages: ['public/true-american-wear/flag-sweater.jpg', 'public/true-american-wear/shoes-black.jpg'],
    filename: 'founders-black-couple-editorial.png',
    prompt:
      'Generate a premium realistic lifestyle image for True American Wear. Use public/true-american-wear/flag-sweater.jpg and public/true-american-wear/shoes-black.jpg as the exact product references for the Founders Crewneck 1776 + Shoes (Black) set, preserving the product design accurately. Feature a stylish Cuban couple wearing or clearly featuring the black set in a refined premium setting with realistic skin detail, natural expressions, and strong visibility of the crewneck and shoes. Compose for square ecommerce gallery use with elevated lighting, believable styling, and no AI gloss.',
  },
];

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

async function loadReferencePart(relativePath) {
  const absolutePath = path.join(ROOT, relativePath);
  const bytes = await fs.readFile(absolutePath);

  return {
    inlineData: {
      mimeType: mimeForFile(relativePath),
      data: bytes.toString('base64'),
    },
  };
}

async function generateWithRetry(ai, parts, filename, attempts = 3) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ role: 'user', parts }],
        config: {
          responseModalities: [Modality.IMAGE],
          automaticFunctionCalling: { disable: true },
        },
      });
    } catch (error) {
      lastError = error;

      if (attempt === attempts) {
        break;
      }

      process.stdout.write(`Retrying ${filename} (${attempt}/${attempts - 1})...\n`);
      await new Promise((resolve) => setTimeout(resolve, 2500 * attempt));
    }
  }

  throw lastError;
}

async function main() {
  const env = parseEnv(await fs.readFile(ENV_PATH, 'utf8'));
  const apiKey = env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY in .env.local');
  }

  const ai = new GoogleGenAI({ apiKey });

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const job of jobs) {
    const outputPath = path.join(OUTPUT_DIR, job.filename);

    try {
      await fs.access(outputPath);
      process.stdout.write(`Skipping ${job.filename}; already exists.\n`);
      continue;
    } catch {}

    const referencePaths = job.referenceImages ?? [job.referenceImage];
    const referenceParts = await Promise.all(referencePaths.map(loadReferencePart));

    process.stdout.write(`Generating ${job.filename}...\n`);

    const response = await generateWithRetry(
      ai,
      [{ text: job.prompt }, ...referenceParts],
      job.filename,
    );

    const imagePart = response?.candidates?.[0]?.content?.parts?.find(
      (part) => part.inlineData?.data,
    );

    if (!imagePart) {
      throw new Error(`No image returned for ${job.filename}`);
    }

    await fs.writeFile(
      outputPath,
      Buffer.from(imagePart.inlineData.data, 'base64'),
    );
  }

  process.stdout.write('Generation complete.\n');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
