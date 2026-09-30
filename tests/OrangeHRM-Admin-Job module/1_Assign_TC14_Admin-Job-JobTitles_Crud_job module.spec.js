/*
import { test, expect } from '@playwright/test';

test('Job title CRUD flow', async ({ page }) => {

  test.setTimeout(120000); // overall test timeout

  // 🔹 reusable random data
  const timestamp = Date.now();
  const name = `Test Job ${timestamp}`;
  const updatedName = `${name} Updated`;

  // LOGIN
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin', { timeout: 10000 });
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' }))
    .toBeVisible({ timeout: 15000 });

  // NAVIGATION
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('heading', { name: 'System Users' }))
    .toBeVisible({ timeout: 10000 });

  await page.getByRole('listitem').filter({ hasText: /^Job$/ }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  await expect(page.getByRole('heading', { name: 'Job Titles' }))
    .toBeVisible({ timeout: 10000 });

  // ADD
  await page.getByRole('button', { name: /Add/ }).click();

  await page.getByRole('textbox').nth(1).fill(name);
  await page.getByRole('textbox', { name: 'Type description here' }).fill('test description');
  await page.getByRole('textbox', { name: 'Add note' }).fill('test note');

  await page.getByRole('button', { name: 'Save' }).click();

  const row = page.locator('.oxd-table-row').filter({ hasText: name });

  await expect(row).toBeVisible({ timeout: 15000 });

  // EDIT
  await row.getByRole('button').first().click();

  await page.getByRole('textbox').nth(1).fill(updatedName);
  await page.getByRole('button', { name: 'Save' }).click();

  const updatedRow = page.locator('.oxd-table-row').filter({ hasText: updatedName });

  await expect(updatedRow).toBeVisible({ timeout: 15000 });

  // DELETE
  await updatedRow.getByRole('button').last().click();
  await page.getByRole('button', { name: 'Yes, Delete' }).click();

  await expect(updatedRow).toHaveCount(0, { timeout: 15000 });

});

*/

import { test, expect } from '@playwright/test';

test('Job title CRUD flow', async ({ page }) => {

  test.setTimeout(120000); // overall test timeout

  // 🔹 reusable random data
  const timestamp = Date.now();
  const name = `Test Job ${timestamp}`;
  const updatedName = `${name} Updated`;

  // LOGIN
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin', { timeout: 10000 });
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  // wait for dashboard
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // NAVIGATION
  await page.getByRole('link', { name: 'Admin' }).click();
  await expect(page.getByRole('heading', { name: 'System Users' }))
    .toBeVisible({ timeout: 10000 });

  await page.getByRole('listitem').filter({ hasText: /^Job$/ }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  await expect(page.getByRole('heading', { name: 'Job Titles' }))
    .toBeVisible({ timeout: 10000 });

  // ADD
  await page.getByRole('button', { name: /Add/ }).click();

  await page.getByRole('textbox').nth(1).fill(name);
  await page.getByRole('textbox', { name: 'Type description here' }).fill('test description');
  await page.getByRole('textbox', { name: 'Add note' }).fill('test note');

  await page.getByRole('button', { name: 'Save' }).click();

  const row = page.locator('.oxd-table-row').filter({ hasText: name });

  await expect(row).toBeVisible({ timeout: 15000 });

  // EDIT
  await row.getByRole('button').first().click();

  await page.getByRole('textbox').nth(1).fill(updatedName);
  await page.getByRole('button', { name: 'Save' }).click();

  const updatedRow = page.locator('.oxd-table-row').filter({ hasText: updatedName });

  await expect(updatedRow).toBeVisible({ timeout: 15000 });

  // DELETE
  await updatedRow.getByRole('button').last().click();
  await page.getByRole('button', { name: 'Yes, Delete' }).click();

  await expect(updatedRow).toHaveCount(0, { timeout: 15000 });

});