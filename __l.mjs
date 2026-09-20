const PORT = 5173;
import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
for (const [n, vp] of [['desk', {width:1440,height:900}], ['mob', {width:390,height:844}]]) {
  const p = await b.newPage({ viewport: vp, deviceScaleFactor: 1, isMobile: vp.width < 500, hasTouch: vp.width < 500 });
  for (const r of ['/coaching', '/connect']) {
    await p.goto('http://localhost:' + PORT + r, { waitUntil: 'networkidle' });
    await p.waitForTimeout(700);
    console.log(n, r, await p.evaluate(() => {
      const root = document.querySelector('h1').closest('div').parentElement;
      const last = [...document.querySelectorAll('p')].find(x => x.textContent.trim().startsWith('©'));
      const r2 = last.getBoundingClientRect();
      return JSON.stringify({ contentBottom: Math.round(r2.bottom), viewport: innerHeight,
        emptyBelow: Math.round(innerHeight - r2.bottom),
        rules: [...document.querySelectorAll('div')].filter(d => {
          const cs = getComputedStyle(d);
          return (cs.borderTopWidth === '1px' || cs.borderBottomWidth === '1px') && d.getBoundingClientRect().width > 300;
        }).length });
    }));
    await p.screenshot({ path: '/tmp/claude-0/lay-' + n + r.replace('/','-') + '.png' });
  }
  await p.close();
}
await b.close();
