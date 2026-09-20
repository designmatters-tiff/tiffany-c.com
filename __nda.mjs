import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const errs = [];
const look = (p) => p.evaluate(() => {
  const vis = (e) => { const r = e.getBoundingClientRect(); let o=1,n=e; while(n&&n!==document.documentElement){o*=parseFloat(getComputedStyle(n).opacity);n=n.parentElement;} return r.width>0 && r.top<innerHeight && r.bottom>0 && o>0.05; };
  const nda = [...document.querySelectorAll('p')].filter(x => x.textContent.includes('Shared under NDA for review'));
  const cred = [...document.querySelectorAll('p')].filter(x => x.textContent.includes('Designed and built'));
  const nb = document.querySelector('button[aria-label*="navigation"]');
  const nav = (nb && nb.getBoundingClientRect().width > 0) ? nb.getBoundingClientRect()
    : [...document.querySelectorAll('div')].find(d => typeof d.className === 'string' && d.className.includes('md:left-20') && d.className.includes('overflow-hidden'))?.getBoundingClientRect();
  const lastVis = [...nda, ...cred].filter(vis).sort((a,b) => b.getBoundingClientRect().bottom - a.getBoundingClientRect().bottom)[0];
  return { nda: nda.filter(vis).length, credit: cred.filter(vis).length,
           toNav: (lastVis && nav) ? Math.round(nav.top - lastVis.getBoundingClientRect().bottom) : null };
});
for (const [n, vp] of [['DESKTOP', {width:1440,height:900}], ['MOBILE', {width:390,height:844}]]) {
  const p = await b.newPage({ viewport: vp, deviceScaleFactor: 1, isMobile: vp.width < 500, hasTouch: vp.width < 500 });
  p.on('pageerror', e => errs.push(n + ' ' + e));
  console.log('\n== ' + n);
  for (const [r, gated] of [['/work/business-acumen/ecommerce',1], ['/work/product-ux-strategies/brand-perception',1], ['/work/case-studies/kai',0], ['/work',0]]) {
    await p.goto('http://localhost:5173' + r, { waitUntil: 'networkidle' });
    await p.waitForTimeout(600);
    if (gated) {
      console.log('  ' + r.padEnd(44) + ' locked  ' + JSON.stringify(await look(p)));
      await p.fill('input[type="password"]','tifffolio'); await p.keyboard.press('Enter'); await p.waitForTimeout(900);
    }
    for (let i=0;i<3;i++){ await p.evaluate(() => { for (const e of document.querySelectorAll('*')) if (e.scrollHeight > e.clientHeight + 4) e.scrollTop = e.scrollHeight; window.scrollTo(0,1e6); }); await p.waitForTimeout(300); }
    console.log('  ' + r.padEnd(44) + (gated?' open    ':'         ') + JSON.stringify(await look(p)));
  }
  await p.close();
}
console.log('\nerrors:', errs);
await b.close();
