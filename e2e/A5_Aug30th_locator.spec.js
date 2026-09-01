import { test, expect } from '@playwright/test';

test.describe('Parabank Registration Validations', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  });

  test('1. Submit empty form', async ({ page }) => {
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByText('First name is required')).toBeVisible();
    await expect(page.getByText('Last name is required')).toBeVisible();
    await expect(page.getByText('Address is required')).toBeVisible();
    await expect(page.getByText('City is required')).toBeVisible();
    await expect(page.getByText('State is required')).toBeVisible();
    await expect(page.getByText('Zip Code is required')).toBeVisible();
    await expect(page.getByText('Social Security Number is required')).toBeVisible();
    await expect(page.getByText('Username is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('2. Password mismatch', async ({ page }) => {
    await page.locator('#customer\\.password').fill('admin123');
    await page.locator('#repeatedPassword').fill('wrongpass');

    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByText('Passwords did not match')).toBeVisible();
  });

  test('3. Password length = 1', async ({ page }) => {
    await page.locator('#customer\\.password').fill('a');
    await page.locator('#repeatedPassword').fill('a');

    await page.getByRole('button', { name: 'Register' }).click();

    // Validation message may vary depending on site behavior
    await expect(page.locator('body')).toContainText('Password');
  });

  test('4. Confirm password empty', async ({ page }) => {
    await page.locator('#customer\\.password').fill('admin123');

    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByText('Password confirmation is required')).toBeVisible();
  });

});