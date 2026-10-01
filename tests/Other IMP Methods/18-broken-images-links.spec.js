// Broken images and broken links
// Sites: https://the-internet.herokuapp.com/broken_images
//        https://the-internet.herokuapp.com/status_codes
const { test, expect } = require('@playwright/test');

test.describe('Broken Images & Links', () => {

  test('detect broken images via naturalWidth', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    const images = page.locator('.example img');
    const count = await images.count();
    const broken = [];

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate(el => el.naturalWidth);
      if (naturalWidth === 0) broken.push(await img.getAttribute('src'));
    }
    console.log('Broken images:', broken);
    expect(broken.length).toBeGreaterThan(0);
  });

  test('check HTTP status of every link on a page', async ({ page, request }) => {
    await page.goto('https://the-internet.herokuapp.com/status_codes');
    const hrefs = await page.locator('.example a').evaluateAll(links => links.map(a => a.href));

    for (const href of hrefs) {
      const res = await request.get(href);
      console.log(`${res.status()}  ${href}`);
      expect(res.status()).toBeLessThan(400); // the pages describing codes themselves return 200
    }
  });
});
