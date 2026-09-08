import { test, expect } from '@playwright/test';

test.describe('Hooks Demo', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL('**/dashboard/index');
  });

  test('login to Orange HRM', async ({ page }) => {
    await expect(page).toHaveURL(/dashboard/);
  });

  test('validate the title of the page', async ({ page }) => {
    await expect(page).toHaveTitle(/OrangeHRM/);
  });

  test('validate the logo of the page', async ({ page }) => {
    await expect(page.locator('img[alt="company-branding"]')).toBeVisible();
  });

});