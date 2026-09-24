import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Admin' }).click();
//   await page.getByRole('button', { name: ' Add' }).click();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
//   await page.getByText('-- Select --').first().click();
//   await page.getByRole('option', { name: 'Admin' }).click();
//   await page.getByText('-- Select --').click();
//   await page.getByRole('option', { name: 'Enabled' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).click();
//   await page.getByRole('textbox', { name: 'Type for hints...' }).fill('em');
//   await page.getByRole('option', { name: 'Emily Jones' }).click();
//   await page.getByRole('textbox').nth(2).click();
//   await page.getByRole('textbox').nth(2).fill('demo1212');
//   await page.getByRole('textbox').nth(3).click();
//   await page.getByRole('textbox').nth(3).fill('demo1212');
//   await page.getByRole('textbox').nth(3).press('Tab');
//   await page.getByRole('textbox').nth(4).click();
//   await page.getByRole('textbox').nth(4).fill('demo1212');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
//   await expect(page.getByText('Emily Jones')).toBeVisible();
//   await page.locator('div:nth-child(2) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').first().click();
//   await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
//   await page.getByRole('button', { name: ' Yes, Delete' }).click();
// });

test('Crud Operation on User Management - Save, Update and Delete', async ({ page }) => {
  test.setTimeout(150000);
  //Test Data - Data being used for Testing Purpose
  const user = {
    userRole: 'ESS',
    employeeName: 'Thomas Kutty Benny',
    username: 'demo1212',
    status: 'Enabled',
    password: 'demo1212',
  };
  
  // ------------------------------------------------Register a User------------------------------------------------------------
  await test.step('Register a User and save the data', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByText('-- Select --').first().click();
    await page.getByRole('option', { name: user.userRole }).click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: user.status }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill(user.employeeName);
    await page.getByRole('option', { name: user.employeeName }).click();
    let valTimestamp = Date.now();
    user.username = user.username + valTimestamp;
    user.updatedUsername = user.username + '_updated';
    await page.getByRole('textbox').nth(2).fill(user.username);
    await page.getByRole('textbox').nth(3).fill(user.password);
    await page.getByRole('textbox').nth(4).fill(user.password);
    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForURL('**/admin/viewSystemUsers', { timeout: 15000 });
    await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    await expect.poll(async () => {
      return await page.locator('.oxd-table-card').filter({ hasText: user.username }).count();
    }, { timeout: 15000 }).toBeGreaterThan(0);
  });

  // ------------------------------------------------Update the User------------------------------------------------------------

  await test.step('Update the same user', async () => {
    const userRow = page.locator('.oxd-table-card').filter({ hasText: user.username });
    await expect(userRow).toBeVisible();

    await userRow
      .getByRole('button')
      .filter({ has: page.locator('i.bi-pencil-fill') })
      .click();

    await expect(page.getByRole('heading', { name: 'Edit User' })).toBeVisible();
    await page.getByRole('textbox').nth(2).fill(user.updatedUsername);
    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForURL('**/admin/viewSystemUsers', { timeout: 30000 });
    await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
    await expect.poll(async () => {
      return await page.locator('.oxd-table-card').filter({ hasText: user.updatedUsername }).count();
    }, { timeout: 20000 }).toBeGreaterThan(0);
    await expect(page.getByRole('cell', { name: user.username, exact: true })).not.toBeVisible();
  });

  // ------------------------------------------------Delete the User------------------------------------------------------------

  await test.step('Delete the same user', async () => {
    const userRow = page.locator('.oxd-table-card').filter({ hasText: user.updatedUsername });
    await expect(userRow).toBeVisible();

    const rowCheckbox = userRow.getByRole('checkbox');
    await rowCheckbox.check({ force: true });
    await page.getByRole('button', { name: 'Delete Selected' }).click();

    const confirmationDialog = page.getByRole('dialog');
    await expect(confirmationDialog).toBeVisible();
    await confirmationDialog.getByRole('button', { name: 'Yes, Delete' }).click();

    await expect(page.getByRole('cell', { name: user.updatedUsername })).not.toBeVisible();
  });
})