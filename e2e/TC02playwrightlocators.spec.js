import { test, expect } from '@playwright/test';

test('should display the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test ('enter valid username and password', async ({ page }) => {
    await page.goto('/'), { waituntil : 'domcontentloaded', timeout: 60000 };
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    });