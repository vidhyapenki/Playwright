// Navigation: redirects, back/forward/reload, HTTP status of a page
// Sites: https://the-internet.herokuapp.com/redirector
//        https://the-internet.herokuapp.com/status_codes
const { test, expect } = require('@playwright/test');

test.describe('Navigation & Redirects', () => {

  test('follow a redirect', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/redirector');
    await page.locator('#redirect').click();
    await expect(page).toHaveURL(/\/status_codes$/);
  });

  test('go back, forward and reload', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'Checkboxes' }).click();
    await expect(page).toHaveURL(/\/checkboxes/);

    await page.goBack();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

    await page.goForward();
    await expect(page).toHaveURL(/\/checkboxes/);

    await page.reload();
    await expect(page.locator('h3')).toHaveText('Checkboxes');
  });

  test('read the HTTP status code of a page', async ({ page }) => {
    for (const code of [200, 301, 404, 500]) {
      const response = await page.goto(`https://the-internet.herokuapp.com/status_codes/${code}`);
      console.log(`status_codes/${code} -> ${response.status()}`);
      // 301 is followed automatically, so the final page returns 200
      expect(response.status()).toBe(code === 301 ? 200 : code);
    }
  });
});
