/**
 * Regenerates favicon PNG/ICO from scripts/render-favicon.html via Chrome,
 * then copies into public/ and src/app/.
 *
 * Usage: node scripts/generate-favicons.mjs
 */
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const chrome =
  process.env.CHROME_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const html = path.join(__dirname, 'render-favicon.html');
const shot = path.join(root, 'public', '_favicon-source.png');

execFileSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--force-device-scale-factor=1',
    '--window-size=256,256',
    `--screenshot=${shot}`,
    `file:///${html.replace(/\\/g, '/')}`,
  ],
  { stdio: 'inherit' }
);

const base = await sharp(shot).png().toBuffer();
for (const [size, rel] of [
  [16, 'public/favicon-16.png'],
  [32, 'public/favicon-32.png'],
  [48, 'public/icon.png'],
  [180, 'public/apple-touch-icon.png'],
  [192, 'public/icon-192.png'],
  [512, 'public/icon-512.png'],
]) {
  await sharp(base).resize(size, size).png().toFile(path.join(root, rel));
}

await sharp(path.join(root, 'public/favicon-32.png')).toFile(
  path.join(root, 'public/favicon.ico')
);

for (const [from, to] of [
  ['public/favicon.ico', 'src/app/favicon.ico'],
  ['public/icon.svg', 'src/app/icon.svg'],
  ['public/favicon-32.png', 'src/app/icon.png'],
  ['public/apple-touch-icon.png', 'src/app/apple-icon.png'],
]) {
  fs.copyFileSync(path.join(root, from), path.join(root, to));
}

fs.unlinkSync(shot);
console.log('Favicons regenerated');
