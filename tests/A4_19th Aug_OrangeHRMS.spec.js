import { test, expect } from '@playwright/test';

    test.beforeEach(async ({ page }) => {

        await page.goto('/');
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
      
    })

  test('login to Orange HRM', async ({ page }) => {
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"); 
})

  test('validate the title of the page', async ({ page }) => {
    await expect(page).toHaveTitle(/OrangeHRM/);

    })

  test('validate the text', async ({ page }) => {
    await expect(page.getByText('Time at Work')).toBeVisible();

    await expect(page.getByText('My Actions')).toBeVisible();
  
    await expect(page.getByText('Quick Launch')).toBeVisible();
  
    await expect(page.getByText('Buzz Latest Posts')).toBeVisible();
   
    await expect(page.getByText('Employees on Leave Today')).toBeVisible();
  
    await expect(page.getByText('Employee Distribution by Sub Unit')).toBeVisible();
  })

   test('validate the menu item', async ({ page }) => {
    //await page.waitForTimeout(7000); // Wait for 2 seconds to ensure the page is fully loaded
    await expect(page.getByText('Admin', { name: 'Admin', exact: true })).toBeVisible();
  
    await expect(page.getByText('PIM', { name: 'PIM' })).toBeVisible();

    await expect(page.getByText('Leave', { name: 'Leave', exact: true })).toBeVisible();
 
    await expect(page.getByText('Time', { name: 'Time', exact: true })).toBeVisible();
 
    await expect(page.getByText('Recruitment', { name: 'Recruitment', exact: true })).toBeVisible();

    await expect(page.getByText('My Info', { name: 'My Info', exact: true })).toBeVisible();
   
    await expect(page.getByText('Performance', { name: 'Performance', exact: true })).toBeVisible();
   
    await expect(page.getByText('Dashboard', { name: 'Dashboard', exact: true }).first()).toBeVisible();
   
    await expect(page.getByText('Directory', { name: 'Directory', exact: true })).toBeVisible();
   
    await expect(page.getByText('Maintenance', { name: 'Maintenance', exact: true })).toBeVisible();
   
    await expect(page.getByText('Buzz', { name: 'Buzz', exact: true })).toBeVisible();
    })  


    test('get username, print it, and logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.waitForTimeout(7000); 
  // Get logged-in username (top-right dropdown)
  const userName = await page.locator('.oxd-userdropdown-name', { exact: true }).textContent();

  // Print to console
  console.log('Logged in user:', userName);

  // Open dropdown
  await page.locator('.oxd-userdropdown-name').click();

  // Click Logout
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // Validate logout (back to login page)
  await expect(page).toHaveURL(/login/);
});

