// Generates print-quality QR codes (SVG + PNG) for the two sites.
// After you deploy and know the real URLs, edit `targets` below and run:
//   npm run gen:qr
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

const require = createRequire(import.meta.url);
const QRCode = require('qrcode');

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'public', 'assets');

// ⬇️ EDIT THESE after deploy, then `npm run gen:qr`.
const targets = [
  { name: 'qr-company', url: 'https://jlwanalytics.com/company' },
  { name: 'qr-portfolio', url: 'https://jlwanalytics.com' },
];

// Dark modules on white = maximum scanner reliability (esp. when printed).
const opts = { margin: 2, errorCorrectionLevel: 'M', color: { dark: '#060606', light: '#FFFFFF' } };

for (const t of targets) {
  await QRCode.toFile(join(outDir, `${t.name}.png`), t.url, { ...opts, width: 1200 });
  const svg = await QRCode.toString(t.url, { ...opts, type: 'svg' });
  writeFileSync(join(outDir, `${t.name}.svg`), svg);
  console.log(`✓ ${t.name}  →  ${t.url}`);
}
console.log('Done. Files in site/public/assets/.');
