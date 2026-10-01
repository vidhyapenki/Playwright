// Mobile device emulation: viewport, user agent, touch, orientation
// Site: https://the-internet.herokuapp.com/checkboxes
const { test, expect, devices } = require('@playwright/test');

// Drop defaultBrowserType so it runs on Chromium like the other specs
const { defaultBrowserType, ...iPhone } = devices['iPhone 13'];
test.use(iPhone);

test.describe('Mobile Emulation', () => {

  test('page runs as an iPhone 13', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const info = await page.evaluate(() => ({
      width: window.innerWidth,
      ua: navigator.userAgent,
      touch: 'ontouchstart' in window,
    }));
    console.log(info);
    expect(info.width).toBe(390);
    expect(info.ua).toContain('iPhone');
    expect(info.touch).toBe(true);
  });

  test('tap instead of click, then rotate to landscape', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const first = page.locator('#checkboxes input').first();

    await first.tap();
    await expect(first).toBeChecked();

    await page.setViewportSize({ width: 844, height: 390 });   // landscape
    expect(await page.evaluate(() => window.innerWidth)).toBe(844);
  });
});
