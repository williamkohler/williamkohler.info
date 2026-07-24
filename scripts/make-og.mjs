// Generates public/og-default.png (1200x630) from an SVG using the macOS
// built-in `sips`/`qlmanage` toolchain — no image dependencies to install.
// Run: node scripts/make-og.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = resolve(root, 'scripts/og.svg');
const outDir = resolve(root, 'public');

// Authored on a 1200x1200 square because qlmanage always renders to a square
// canvas. The artwork sits in the vertical center band (y 285..915) so that a
// centered 1200x630 crop lands on it exactly.
const TOP = 285;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
  <rect width="1200" height="1200" fill="#fbfbfc"/>
  <rect x="0" y="${TOP}" width="1200" height="8" fill="#0b7f8c"/>
  <text x="90" y="${TOP + 235}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="86" font-weight="bold" letter-spacing="-2" fill="#1b1c1e">Bill Kohler</text>
  <text x="90" y="${TOP + 310}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="42" fill="#5a5f66">Senior Software Engineer</text>
  <text x="90" y="${TOP + 395}" font-family="Menlo, monospace"
        font-size="27" fill="#0b7f8c">Elixir · Phoenix · Ruby · AWS</text>
  <text x="90" y="${TOP + 540}" font-family="Menlo, monospace"
        font-size="24" fill="#8b9098">williamkohler.info</text>
</svg>`;

mkdirSync(dirname(svgPath), { recursive: true });
mkdirSync(outDir, { recursive: true });
writeFileSync(svgPath, svg);

// qlmanage renders to a square canvas and letterboxes the 1200x630 artwork,
// so crop back to the real content box rather than resizing (which squashes it).
execSync(`qlmanage -t -s 1200 -o "${outDir}" "${svgPath}"`, { stdio: 'ignore' });
execSync(`sips -c 630 1200 "${outDir}/og.svg.png" --out "${outDir}/og-default.png"`, {
  stdio: 'ignore',
});
execSync(`rm -f "${outDir}/og.svg.png"`);

console.log('Wrote public/og-default.png');
