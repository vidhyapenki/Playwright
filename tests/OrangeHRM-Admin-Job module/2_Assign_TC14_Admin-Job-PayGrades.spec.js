import { test, expect } from '@playwright/test';

async function generateRandomName() {
  const randomName = 'SYSTEM SITA DEV ' + Math.floor(Math.random() * 1000);
  return randomName;  
}

test('Creating New Grade Under Job Menu', async ({ page }) => {
  //Navigate to the OrangeHRM demo site and log in
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState('networkidle');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Navigate to the Job menu and add a new grade
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('div').filter({ hasText: /^Name$/ }).nth(1).click();
  await page.locator('form').getByRole('textbox').click();
  const randomName = await generateRandomName();
  await page.locator('form').getByRole('textbox').fill(randomName);
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the input is registered
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the save action is completed
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await expect(page.getByRole('cell', { name: randomName })).toBeVisible();

  //Logout from the application
  await page.locator('[alt="profile picture"]').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});