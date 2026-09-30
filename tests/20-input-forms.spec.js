// Text inputs & form submission (login form)
// Site: https://the-internet.herokuapp.com/login   (tomsmith / SuperSecretPassword!)
const { test, expect } = require('@playwright/test');

test.describe('Input Box & Forms', () => {

  test('successful login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/\/secure/);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

  test('invalid login shows an error', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').fill('wronguser');
    await page.locator('#password').fill('wrongpass');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
  });
});
