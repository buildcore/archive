const puppeteer = require('puppeteer');

(async () => {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.goTo("https://wikipedia.org");
  const heapSnapshot = await captureHeapSnapshot(await page.target());
});
