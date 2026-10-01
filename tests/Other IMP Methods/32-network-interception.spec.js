// Network interception: block, mock, modify and wait for requests
// Sites: https://the-internet.herokuapp.com
const { test, expect } = require('@playwright/test');

test.describe('Network Interception', () => {

  test('block all images', async ({ page }) => {
    await page.route(/\.(png|jpe?g|gif)$/, route => route.abort());
    await page.goto('https://the-internet.herokuapp.com/hovers');

    const widths = await page.locator('.figure img').evaluateAll(imgs => imgs.map(i => i.naturalWidth));
    expect(widths.every(w => w === 0)).toBe(true);
  });

  test('mock a whole page response', async ({ page }) => {
    await page.route('**/status_codes', route => route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: '<h1 id="mock">This page was mocked by Playwright</h1>',
    }));
    await page.goto('https://the-internet.herokuapp.com/status_codes');
    await expect(page.locator('#mock')).toHaveText('This page was mocked by Playwright');
  });

  test('modify a real response before the browser sees it', async ({ page }) => {
    await page.route('**/tables', async route => {
      const response = await route.fetch();
      const body = (await response.text()).replaceAll('Smith', 'MockedName');
      await route.fulfill({ response, body });
    });
    await page.goto('https://the-internet.herokuapp.com/tables');
    await expect(page.locator('#table1 tbody tr').first().locator('td').first()).toHaveText('MockedName');
  });

  test('wait for a response and log all requests', async ({ page }) => {
    const requests = [];
    page.on('request', req => requests.push(`${req.method()} ${req.url()}`));

    const [response] = await Promise.all([
      page.waitForResponse(r => r.url().endsWith('/tables') && r.status() === 200),
      page.goto('https://the-internet.herokuapp.com/tables'),
    ]);
    expect(response.ok()).toBe(true);
    console.log(`Page made ${requests.length} requests`);
    expect(requests.length).toBeGreaterThan(0);
  });
});
