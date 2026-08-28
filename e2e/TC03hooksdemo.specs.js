import { test, expect } from '@playwright/test';

test.describe('Hooks Demo', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
    })

  test('login to Orange HRM', async ({ page }) => {
    await expect(page).toHaveURL('/https://opensource-demo\.orangehrmlive\.com\/web\/index\.php\/dashboard\/index/); 
})

  test('validate the title of the page', async ({ page }) => {
    await expect(page).toHaveTitle(/OrangeHRM/);

    })

  test('validate the logo of the page', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  })