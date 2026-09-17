import { test, expect } from '@playwright/test';

test.describe('Login testcases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

   test('TC01 - Positive Login Test', async ({ page }) => {

      await page.locator('#username').fill('student');
      await page.locator('#password').fill('Password123');
      await page.locator('#submit').click();
      await expect(page).toHaveURL(/logged-in-successfully/);
      await expect(page.locator('text=Log out')).toBeVisible();
      await page.locator('text=Log out').click();
      await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

  });

    test('TC02 - Negative Login Test with Invalid Username', async ({ page }) => {
        await page.locator('#username').fill('invalidUser');
        await page.locator('#password').fill('Password123');
        await page.locator('#submit').click();
        await expect(page.locator('.show')).toHaveText('Your username is invalid!');
    });

    test('TC03 - Negative Login Test with Invalid Password', async ({ page }) => {
        await page.locator('#username').fill('student');
        await page.locator('#password').fill('invalidPass');
        await page.locator('#submit').click();
        await expect(page.locator('.show')).toHaveText('Your password is invalid!');
    }); 

    test('TC04 - Negative Login Test with Empty Fields', async ({ page }) => {
        await page.locator('#submit').click();
        await expect(page.locator('.show')).toHaveText('Your username is invalid!');
    }); 

});     