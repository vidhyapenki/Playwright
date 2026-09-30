import { test, expect } from '@playwright/test';

test('should display the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('OrangeHRM');
});

test('enter valid credentials and login to homoe page', async({ page}) => {

    await page.goto('/',{ waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

})

//String = "kskdkj\"asjda"
// 7 Methods
// getByRole
// getByLabel
// getByPlaceholder
// getByText
// getByTitle
// getByAltText
// getByTestId

//HTML
// Tagname ( Attribute and Value) 
