// Browser basic-auth popup (username/password dialog)
// Site: https://the-internet.herokuapp.com/basic_auth   (admin / admin)
const { test, expect } = require('@playwright/test');

test.describe('Basic Authentication', () => {
  test.use({ httpCredentials: { username: 'admin', password: 'admin' } });

  test('log in through the basic-auth popup', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await expect(page.locator('.example p'))
      .toContainText('Congratulations! You must have the proper credentials.');
  });
});
