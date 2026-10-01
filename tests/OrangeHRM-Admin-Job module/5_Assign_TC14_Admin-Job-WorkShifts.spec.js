import { test, expect } from '@playwright/test';

async function generateRandomName() {
  const randomName = 'TEST VID WORK SHIFTS ' + Math.floor(Math.random() * 1000);
  return randomName;  
}

test('Creating New work shifts Under Job Menu', async ({ page }) => {
  //Navigate to the OrangeHRM demo site and log in
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState('networkidle');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Navigate to the Job menu and add a new employment status
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('div').filter({ hasText: /^ShiftName$/ }).nth(1).click();
  await page.getByRole('textbox').nth(1).click();
   const randomName = await generateRandomName();
  await page.getByRole('textbox').nth(1).fill(randomName);
  await page.loca
    await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Save' }).click();

 
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the save action is completed
  

  //Logout from the application
  await page.locator('[alt="profile picture"]').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});