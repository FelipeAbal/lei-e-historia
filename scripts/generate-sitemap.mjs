import { build } from 'esbuild';
import { writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const SITE_URL = 'https://leiehistoria.com.br';
const ROOT = path.resolve(import.meta.dirname, '..');

async function loadData() {
  const tmpDir = await mkdtemp(path.join(tmpdir(), 'sitemap-'));
  const outfile = path.join(tmpDir, 'data.mjs');

  await build({
    entryPoints: [path.join(ROOT, 'scripts/_sitemap-entry.ts')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile,
  });

  const mod = await import(`file://${outfile}`);
  await rm(tmpDir, { recursive: true, force: true });
  return mod;
}

function xmlUrl(loc, priority) {
  return `  <url>\n    <loc>${SITE_URL}${loc}</loc>\n    <priority>${priority}</priority>\n  </url>`;
}

async function main() {
  const { documents, collections } = await loadData();

  const entries = [
    xmlUrl('/', '1.0'),
    xmlUrl('/sobre', '0.5'),
    xmlUrl('/contato', '0.5'),
    ...collections.map((c) => xmlUrl(`/colecao/${c.id}`, '0.8')),
    ...documents.map((d) => xmlUrl(`/document/${d.id}`, '0.7')),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

  await writeFile(path.join(ROOT, 'public/sitemap.xml'), xml, 'utf-8');
  console.log(`sitemap.xml gerado com ${entries.length} URLs`);
}

main();
