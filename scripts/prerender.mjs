// Prerender: turn each route into a real HTML file.
//
// The site is a client-rendered SPA, so without this every URL serves the same
// empty shell and a crawler sees one page. This visits every route in the built
// app with a real browser, captures the rendered DOM, rewrites the head with
// that page's own title, description and share card, and writes it to
// dist/<route>/index.html. Vercel serves those static files directly and falls
// back to the SPA rewrite for anything else.
//
// The app still boots and takes over on load — this only changes what arrives
// before JavaScript runs, which is exactly what search engines and link
// unfurlers read.
//
// Rendering needs a browser, which a deployment build may not have. Rather than
// fail the build, this degrades: with a browser it writes the full rendered
// page; without one it still writes a per-route shell carrying that route's
// title, description, canonical and share card, and the sitemap. The metadata
// half is what link unfurlers read (they never run JS); the content half only
// affects how quickly crawlers see the copy.
import http from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const ORIGIN = 'https://tiffany-c.com';
const PORT = 4178;

// `index: false` keeps a route out of sitemap.xml and adds a noindex tag.
const ROUTES = [
  { path: '/' },
  { path: '/work' },
  { path: '/work/ai-ux' },
  { path: '/work/business-acumen' },
  { path: '/work/product-ux-strategies' },
  { path: '/work/people-process' },
  { path: '/work/case-studies' },
  // passcode-gated, so it gets a URL but stays out of the index
  { path: '/work/business-acumen/ecommerce', index: false },
  { path: '/work/case-studies/kai' },
  { path: '/awards' },
  { path: '/awards/rotterdam' },
  { path: '/awards/ux-camp' },
  { path: '/awards/taipei' },
  { path: '/awards/fusecon' },
  { path: '/awards/fusecon-2024' },
  { path: '/awards/figma-kl' },
  { path: '/awards/design-kl' },
  { path: '/testimonials' },
  { path: '/coaching' },
  { path: '/connect' },
  { path: '/connect/speaking-inquiry', index: false },
];

const MIME = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css',
  '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.avif':'image/avif',
  '.woff2':'font/woff2', '.otf':'font/otf', '.ttf':'font/ttf', '.xml':'application/xml', '.txt':'text/plain' };

// serve dist the way Vercel will: real file first, SPA shell otherwise
const server = http.createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(DIST, url);
  if (!existsSync(file) || url.endsWith('/')) file = path.join(DIST, 'index.html');
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404).end('not found'); }
});
await new Promise(r => server.listen(PORT, r));

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

// Try for a real browser; carry on without one if there isn't a usable install.
let browser = null, page = null;
try {
  if (process.env.PRERENDER_NO_BROWSER) throw new Error('browser disabled by PRERENDER_NO_BROWSER');
  const { chromium } = await import('playwright');
  for (const opts of [{ executablePath: process.env.PRERENDER_CHROMIUM }, { executablePath: '/opt/pw-browsers/chromium' }, {}]) {
    if (opts.executablePath === undefined && 'executablePath' in opts) continue;
    try { browser = await chromium.launch(opts); break; } catch {}
  }
} catch {}
if (browser) {
  page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  console.log('  rendering with a browser — full HTML per route\n');
} else {
  console.log('  no browser available — writing metadata-only shells (build still succeeds)\n');
}

const SHELL = await readFile(path.join(DIST, 'index.html'), 'utf8');
// route -> the description used when there is no rendered page to read it from
const FALLBACK_DESC = 'Product and design leader in Melbourne. I work with C-suites and product teams to shape design functions that deliver — across fintech, retail and SaaS.';
const done = [];

for (const route of ROUTES) {
  let meta, html;
  const routeName = route.path === '/' ? '' : route.path.split('/').filter(Boolean).pop()
    .replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) + ' — ';
  const fallbackTitle = `${routeName}Tiffany Chew — Product & Design Leader`;
  if (page) {
    await page.goto(`http://localhost:${PORT}${route.path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1200);
    // the page describes itself — App.tsx sets both title and description, so
    // there is no second copy of the copy here to drift out of step
    meta = await page.evaluate(() => ({
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
    }));
    html = await page.content();
  } else {
    // titleOf() lives in App.tsx; without a browser fall back to the route name
    meta = { title: fallbackTitle, desc: '' };
    html = SHELL;
  }
  // A page that rendered but reported no title means the render failed; ship
  // the route's own name rather than a blank <title>.
  if (!meta.title.trim()) meta.title = fallbackTitle;
  const description = meta.desc || FALLBACK_DESC;

  // replace the shell's head metadata with this page's own
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(meta.title)}</title>`);
  const canonical = ORIGIN + (route.path === '/' ? '/' : route.path);
  const head = [
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    route.index === false ? `<meta name="robots" content="noindex" />` : '',
  ].filter(Boolean).join('\n    ');

  // drop the shell's copies so there is exactly one of each
  html = html.replace(/\s*<meta name="description"[^>]*>/g, '')
             .replace(/\s*<link rel="canonical"[^>]*>/g, '')
             .replace(/\s*<meta property="og:(url|title|description)"[^>]*>/g, '')
             .replace(/\s*<meta name="twitter:(title|description)"[^>]*>/g, '')
             .replace('</head>', `    ${head}\n  </head>`);

  const out = route.path === '/' ? path.join(DIST, 'index.html')
                                 : path.join(DIST, route.path, 'index.html');
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, html);
  done.push({ ...route, title: meta.title, bytes: html.length });
  console.log(`  ${route.path.padEnd(34)} ${String(html.length).padStart(8)} b   ${meta.title.slice(0, 40)}`);
}

if (browser) await browser.close();
server.close();

const indexed = done.filter(r => r.index !== false);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map(r => `  <url>
    <loc>${ORIGIN}${r.path === '/' ? '/' : r.path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${r.path === '/' ? '1.0' : r.path.split('/').length > 2 ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`;
await writeFile(path.join(DIST, 'sitemap.xml'), sitemap);
console.log(`\n  ${done.length} routes prerendered, ${indexed.length} in sitemap.xml`);
