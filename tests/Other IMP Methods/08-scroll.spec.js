// Scrolling: page scroll, scroll to element, infinite scroll, scroll inside a div
// Sites: https://the-internet.herokuapp.com/infinite_scroll
//        https://the-internet.herokuapp.com/large
//        https://rahulshettyacademy.com/AutomationPractice/
const { test, expect } = require('@playwright/test');

test.describe('Scroll', () => {

  test('scroll the page with mouse wheel and window.scrollTo', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/large');

    await page.mouse.wheel(0, 1500);
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); // bottom
    await page.evaluate(() => window.scrollTo(0, 0));                          // top
    expect(await page.evaluate(() => window.scrollY)).toBe(0);
  });

  test('scroll a specific element into view', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/large');
    const row = page.locator('#large-table tbody tr').nth(49);

    await row.scrollIntoViewIfNeeded();
    await expect(row).toBeInViewport();
  });

  test('infinite scroll loads more content', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
    const paragraphs = page.locator('.jscroll-added');
    await expect(paragraphs.first()).toBeVisible();
    const before = await paragraphs.count();

    for (let i = 0; i < 3; i++) {
      await page.mouse.wheel(0, 3000);
      await page.waitForTimeout(800);
    }
    const after = await paragraphs.count();
    console.log(`Paragraphs before: ${before}, after: ${after}`);
    expect(after).toBeGreaterThan(before);
  });

  test('scroll inside a scrollable div (fixed-header table)', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const box = page.locator('.tableFixHead');
    await box.scrollIntoViewIfNeeded();

    await box.evaluate(el => { el.scrollTop = el.scrollHeight; });
    expect(await box.evaluate(el => el.scrollTop)).toBeGreaterThan(0);
  });
});
