// Multiple windows / tabs
// Site: https://the-internet.herokuapp.com/windows
const { test, expect } = require('@playwright/test');

test.describe('Multiple Windows / Tabs', () => {

  test('handle a new tab opened by a link', async ({ page, context }) => {
    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.getByRole('link', { name: 'Click Here' }).click(),
    ]);
    await newPage.waitForLoadState();

    await expect(newPage).toHaveURL(/\/windows\/new/);
    await expect(newPage.locator('h3')).toHaveText('New Window');

    // switch back to the original tab
    await page.bringToFront();
    await expect(page.locator('h3')).toHaveText('Opening a new window');
    expect(context.pages().length).toBe(2);

    await newPage.close();
    expect(context.pages().length).toBe(1);
  });
});
