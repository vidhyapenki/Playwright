import {test, expect} from "@playwright/test";

test('Select Value From Dropdown - Test 01', async({page})=>{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", { waitUntil: 'domcontentloaded', timeout: 60000 });

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill("admin123");

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await page.locator('[href="/web/index.php/admin/viewAdminModule"]').click();

    //await page.locator('div').filter({ hasText: '-- Select --' }).first().click();

    //click on dropdown and select Admin from the dropdown 

    await page.locator('div').filter({ hasText: '-- Select --' }).first().click();

    await page.getByRole('option', { name: 'Admin' }).click();

    
});