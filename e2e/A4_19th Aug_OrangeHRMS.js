import { test, expect } from '@playwright/test';

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

  test('validate the text', async ({ page }) => {
    await expect(page.getByText('Time at Work')).toBeVisible();

    await expect(page.getByText('My Actions')).toBeVisible();
  
    await expect(page.getByText('Quick Launch')).toBeVisible();
  
    await expect(page.getByText('Buzz Latest Posts')).toBeVisible();
   
    await expect(page.getByText('Employees on Leave Today')).toBeVisible();
  
    await expect(page.getByText('Employee Distribution by Sub Unit')).toBeVisible();
  })

   test('validate the menu item', async ({ page }) => {
    await expect(page.getByRole('Admin', { name: 'Admin' })).toBeVisible();
  
    await expect(page.getByRole('PIM', { name: 'PIM' })).toBeVisible();

    await expect(page.getByRole('Leave', { name: 'Leave' })).toBeVisible();
 
    await expect(page.getByRole('Time', { name: 'Time' })).toBeVisible();
 
    await expect(page.getByRole('Recruitment', { name: 'Recruitment' })).toBeVisible();

    await expect(page.getByRole('My Info', { name: 'My Info' })).toBeVisible();
   
    await expect(page.getByRole('Performance', { name: 'Performance' })).toBeVisible();
   
    await expect(page.getByRole('Dashboard', { name: 'Dashboard' })).toBeVisible();
   
    await expect(page.getByRole('Directory', { name: 'Directory' })).toBeVisible();
   
    await expect(page.getByRole('Maintenance', { name: 'Maintenance' })).toBeVisible();
   
    await expect(page.getByRole('Buzz', { name: 'Buzz' })).toBeVisible();
    })  


