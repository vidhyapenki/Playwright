// Cookies and reusing a logged-in session (storageState)
// Site: https://the-internet.herokuapp.com/login   (tomsmith / SuperSecretPassword!)
const { test, expect } = require('@playwright/test');

test.describe('Cookies & Session', () => {

  test('add, read and clear cookies', async ({ page, context }) => {
    await context.addCookies([{
      name: 'myCookie', value: 'playwright123', url: 'https://the-internet.herokuapp.com',
    }]);
    await page.goto('https://the-internet.herokuapp.com/');

    const cookies = await context.cookies();
    console.log('Cookies:', cookies.map(c => `${c.name}=${c.value}`));
    expect(cookies.find(c => c.name === 'myCookie').value).toBe('playwright123');
    expect(await page.evaluate(() => document.cookie)).toContain('myCookie=playwright123');

    await context.clearCookies();
    expect(await context.cookies()).toHaveLength(0);
  });

  test('log in once, save the session, reuse it in a new context', async ({ browser }, testInfo) => {
    const statePath = testInfo.outputPath('auth-state.json');

    // 1) log in and save cookies + localStorage
    const ctx1 = await browser.newContext();
    const page1 = await ctx1.newPage();
    await page1.goto('https://the-internet.herokuapp.com/login');
    await page1.locator('#username').fill('tomsmith');
    await page1.locator('#password').fill('SuperSecretPassword!');
    await page1.getByRole('button', { name: 'Login' }).click();
    await expect(page1).toHaveURL(/\/secure/);
    await ctx1.storageState({ path: statePath });
    await ctx1.close();

    // 2) new context starts already logged in - no login steps
    const ctx2 = await browser.newContext({ storageState: statePath });
    const page2 = await ctx2.newPage();
    await page2.goto('https://the-internet.herokuapp.com/secure');
    await expect(page2).toHaveURL(/\/secure/);
    await expect(page2.locator('h2')).toContainText('Secure Area');
    await ctx2.close();
  });
});
