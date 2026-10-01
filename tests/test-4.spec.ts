import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('sdadsadsa');
  await page.locator('.oxd-icon.bi-clock').first().click();
  await page.getByRole('textbox').nth(3).dblclick();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().dblclick();
  await page.locator('input[name="pm"]').check();
  await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-time-wrapper > .oxd-time-input > .oxd-icon').click();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click();
  await page.locator('input[name="pm"]').check();
  await page.locator('.oxd-icon.bi-chevron-up').first().click();
  await page.locator('.oxd-icon.bi-chevron-up').first().dblclick();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click();
  await page.locator('.oxd-icon.bi-chevron-up').first().click();
  await page.locator('.oxd-icon.bi-chevron-up').first().click();
  await page.getByText('1.00').click();
  await page.getByRole('button', { name: 'Save' }).click();
});