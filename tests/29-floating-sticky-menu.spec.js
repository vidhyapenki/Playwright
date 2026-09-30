// Floating / sticky menu stays visible while scrolling
// Site: https://the-internet.herokuapp.com/floating_menu
const { test, expect } = require('@playwright/test');

test('menu stays in the viewport after scrolling to bottom', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/floating_menu');
  const menu = page.locator('#menu');

  await expect(menu).toBeInViewport();
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(500);

  await expect(menu).toBeInViewport();
  await menu.getByRole('link', { name: 'News' }).click();
  await expect(page).toHaveURL(/#news/);
});
