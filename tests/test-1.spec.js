import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();
  await page.getByRole('combobox', { name: 'Søg' }).click();
  await page.getByRole('combobox', { name: 'Søg' }).fill('sitadev');
  await page.locator('iframe[name="a-bvyqpaneke4v"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('div:nth-child(2) > div').first().click();
});