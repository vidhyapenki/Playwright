import { test, expect } from '@playwright/test';

test.describe('OrangeHRM - User Management', () => {

  test('should add, update and delete the same user', async ({ page }) => {

    // ------------------------------------------------------------
    // Test data
    // ------------------------------------------------------------
    const user = {
      employeeName: 'Linda Anderson',
      username: `pwuser_${Date.now()}`,
      updatedUsername: `pwuser_updated_${Date.now()}`,
      password: 'Test@12345',
    };

    // ------------------------------------------------------------
    // 1. Login
    // ------------------------------------------------------------
    await test.step('Login as Admin', async () => {
      await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      );

      await expect(
        page.getByRole('heading', { name: 'Login' })
      ).toBeVisible();

      await page.getByPlaceholder('Username').fill('Admin');
      await page.getByPlaceholder('Password').fill('admin123');

      await page.getByRole('button', { name: 'Login' }).click();

      await expect(
        page.getByRole('heading', { name: 'Dashboard' })
      ).toBeVisible();
    });

    // ------------------------------------------------------------
    // 2. Navigate to Admin -> User Management
    // ------------------------------------------------------------
    await test.step('Navigate to User Management', async () => {
      await page.getByRole('link', { name: 'Admin' }).click();

      await expect(
        page.getByRole('heading', { name: 'System Users' })
      ).toBeVisible();
    });

    // ------------------------------------------------------------
    // 3. Add User
    // ------------------------------------------------------------
    await test.step('Add a new user', async () => {
      await page.getByRole('button', { name: 'Add' }).click();

      await expect(
        page.getByRole('heading', { name: 'Add User' })
      ).toBeVisible();

      // User Role - custom OrangeHRM dropdown
      const userRoleDropdown = page
        .locator('.oxd-form-row')
        .filter({ hasText: 'User Role' })
        .getByRole('combobox');

      await userRoleDropdown.click();
      await page.getByRole('option', { name: 'ESS' }).click();

      // Employee Name - autocomplete textbox
      const employeeName = page.getByRole('textbox', {
        name: 'Employee Name',
      });

      await employeeName.fill(user.employeeName);

      // Wait for autocomplete results.
      await expect(
        page.getByRole('option', { name: new RegExp(user.employeeName) })
      ).toBeVisible();

      await page
        .getByRole('option', { name: new RegExp(user.employeeName) })
        .click();

      // Username
      await page.getByRole('textbox', {
        name: 'Username',
      }).fill(user.username);

      // Status dropdown
      const statusDropdown = page
        .locator('.oxd-form-row')
        .filter({ hasText: 'Status' })
        .getByRole('combobox');

      await statusDropdown.click();
      await page.getByRole('option', { name: 'Enabled' }).click();

      // Password
      await page.getByRole('textbox', {
        name: 'Password',
      }).fill(user.password);

      // Confirm Password
      await page.getByRole('textbox', {
        name: 'Confirm Password',
      }).fill(user.password);

      // Save
      await page.getByRole('button', { name: 'Save' }).click();

      // Verify that we returned to the user list.
      await expect(
        page.getByRole('heading', { name: 'System Users' })
      ).toBeVisible();

      // Verify newly created user.
      await expect(
        page.getByRole('cell', { name: user.username })
      ).toBeVisible();
    });

    // ------------------------------------------------------------
    // 4. Update the SAME User
    // ------------------------------------------------------------
    await test.step('Update the same user', async () => {

      // Locate the exact row containing the user created above.
      const userRow = page
        .getByRole('row')
        .filter({
          hasText: user.username,
        });

      await expect(userRow).toBeVisible();

      // Click Edit inside that row.
      await userRow
        .getByRole('button')
        .filter({ has: page.locator('i.bi-pencil-fill') })
        .click();

      await expect(
        page.getByRole('heading', { name: 'Edit User' })
      ).toBeVisible();

      // Update username.
      const usernameTextbox = page.getByRole('textbox', {
        name: 'Username',
      });

      await usernameTextbox.fill(user.updatedUsername);

      // Handle User Role dropdown correctly.
      const userRoleDropdown = page
        .locator('.oxd-form-row')
        .filter({ hasText: 'User Role' })
        .getByRole('combobox');

      await userRoleDropdown.click();
      await page.getByRole('option', { name: 'ESS' }).click();

      // Handle Status dropdown.
      const statusDropdown = page
        .locator('.oxd-form-row')
        .filter({ hasText: 'Status' })
        .getByRole('combobox');

      await statusDropdown.click();
      await page.getByRole('option', { name: 'Enabled' }).click();

      // Example checkbox handling.
      //
      // Do not blindly click a checkbox because its current state
      // may already be checked/unchecked.
      const checkbox = page.getByRole('checkbox').first();

      if (await checkbox.isVisible()) {
        if (!(await checkbox.isChecked())) {
          await checkbox.check();
        }

        await expect(checkbox).toBeChecked();
      }

      // Save update.
      await page.getByRole('button', { name: 'Save' }).click();

      await expect(
        page.getByRole('heading', { name: 'System Users' })
      ).toBeVisible();

      // Verify updated username.
      await expect(
        page.getByRole('cell', {
          name: user.updatedUsername,
        })
      ).toBeVisible();

      // Old username should no longer be present.
      await expect(
        page.getByRole('cell', {
          name: user.username,
        })
      ).not.toBeVisible();
    });

    // ------------------------------------------------------------
    // 5. Delete the SAME User
    // ------------------------------------------------------------
    await test.step('Delete the same user', async () => {

      // Find the updated user row.
      const userRow = page
        .getByRole('row')
        .filter({
          hasText: user.updatedUsername,
        });

      await expect(userRow).toBeVisible();

      // Select the row checkbox.
      const rowCheckbox = userRow.getByRole('checkbox');

      // Correct checkbox handling.
      if (!(await rowCheckbox.isChecked())) {
        await rowCheckbox.check();
      }

      await expect(rowCheckbox).toBeChecked();

      // Click Delete.
      await page.getByRole('button', { name: 'Delete Selected' }).click();

      // Confirmation dialog.
      const confirmationDialog = page.getByRole('dialog');

      await expect(confirmationDialog).toBeVisible();

      // Confirm deletion.
      await confirmationDialog
        .getByRole('button', { name: 'Yes, Delete' })
        .click();

      // Verify user has been deleted.
      await expect(
        page.getByRole('cell', {
          name: user.updatedUsername,
        })
      ).not.toBeVisible();
    });

  });
});