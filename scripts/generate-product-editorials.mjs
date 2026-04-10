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

    const referencePart = await loadReferencePart(job.referenceImage);

    process.stdout.write(`Generating ${job.filename}...\n`);

    const response = await generateWithRetry(
      ai,
      [{ text: job.prompt }, referencePart],
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
