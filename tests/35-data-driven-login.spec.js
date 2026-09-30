// Data-driven tests: one test generated per data row
// Site: https://the-internet.herokuapp.com/login
const { test, expect } = require('@playwright/test');

const loginData = [
  { name: 'valid credentials', user: 'tomsmith', pass: 'SuperSecretPassword!', message: 'You logged into a secure area!' },
  { name: 'invalid username',  user: 'wrong',    pass: 'SuperSecretPassword!', message: 'Your username is invalid!' },
  { name: 'invalid password',  user: 'tomsmith', pass: 'wrong',                message: 'Your password is invalid!' },
  { name: 'empty fields',      user: '',         pass: '',                     message: 'Your username is invalid!' },
];

test.describe('Data-driven Login', () => {
  for (const data of loginData) {
    test(`login with ${data.name}`, async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/login');
      await page.locator('#username').fill(data.user);
      await page.locator('#password').fill(data.pass);
      await page.getByRole('button', { name: 'Login' }).click();
      await expect(page.locator('#flash')).toContainText(data.message);
    });
  }
});
