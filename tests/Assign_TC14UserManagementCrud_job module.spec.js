import { test, expect } from '@playwright/test';

test.describe('Admin Job Module Full Flow', () => {

 test.beforeEach(async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/', {
    waitUntil: 'load'
  });

  await page.getByPlaceholder('Username').waitFor();
  await page.getByPlaceholder('Username').fill('Admin');

  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  // wait for dashboard after login
  await page.waitForURL(/dashboard/);

});

  // -----------------------------
  // JOB TITLE FLOW
test('TC01 - Job Title Full Flow', async ({ page }) => {

  test.setTimeout(60000);

  await page.getByRole('link', { name: 'Admin' }).click();

  // then Job menu
  await page.getByRole('link', { name: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  // verify page
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();

  const name = `QA ${Date.now()}`;
  const updated = `${name} Updated`;

  await page.getByRole('link', { name: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();

  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();

  // ADD
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Job Title').fill(name);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('body')).toContainText(name);

  // EDIT
  await page.locator('button i.bi-pencil-fill').first().click();
  await page.getByPlaceholder('Job Title').fill(updated);
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.locator('body')).toContainText(updated);

  // DELETE
  await page.locator('button i.bi-trash').first().click();
  await page.getByRole('button', { name: 'Yes, Delete' }).click();

  await expect(page.locator('body')).not.toContainText(updated);

});

  // -----------------------------
  // EMPLOYMENT STATUS FLOW

  test('TC02 - Employment Status Full Flow', async ({ page }) => {

    let name = 'Contract ' + Date.now();
    let updated = name + ' Updated';

    await page.getByRole('link', { name: 'Job' }).click();
    await page.getByRole('menuitem', { name: 'Employment Status' }).click();

    await expect(page).toHaveURL(/employmentStatus/);

    // ADD
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Type for hints...').fill(name);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(name);
/*
    // EDIT
    await page.locator('button i.bi-pencil-fill').first().click();
    await page.getByPlaceholder('Type for hints...').fill(updated);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(updated);

    // DELETE
    await page.locator('button i.bi-trash').first().click();
    await page.getByRole('button', { name: 'Yes, Delete' }).click();

    await expect(page.locator('body')).not.toContainText(updated);

    */
  });

  // -----------------------------
  // PAY GRADE FLOW

  test('TC03 - Pay Grade Full Flow', async ({ page }) => {

    let name = 'Grade ' + Date.now();
    let updated = name + ' Updated';

    await page.getByRole('link', { name: 'Job' }).click();
    await page.getByRole('menuitem', { name: 'Pay Grades' }).click();

    await expect(page).toHaveURL(/payGrade/);

    // ADD
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Name').fill(name);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(name);

    /*

    // EDIT
    await page.locator('button i.bi-pencil-fill').first().click();
    await page.getByPlaceholder('Name').fill(updated);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(updated);

    // DELETE
    await page.locator('button i.bi-trash').first().click();
    await page.getByRole('button', { name: 'Yes, Delete' }).click();

    await expect(page.locator('body')).not.toContainText(updated);

    */
  });

  // -----------------------------
  // JOB CATEGORY FLOW

  test('TC04 - Job Category Full Flow', async ({ page }) => {

    let name = 'IT ' + Date.now();
    let updated = name + ' Updated';

    await page.getByRole('link', { name: 'Job' }).click();
    await page.getByRole('menuitem', { name: 'Job Categories' }).click();

    await expect(page).toHaveURL(/jobCategory/);

    // ADD
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Name').fill(name);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(name);

    /*
    // EDIT
    await page.locator('button i.bi-pencil-fill').first().click();
    await page.getByPlaceholder('Name').fill(updated);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(updated);

    // DELETE
    await page.locator('button i.bi-trash').first().click();
    await page.getByRole('button', { name: 'Yes, Delete' }).click();

    await expect(page.locator('body')).not.toContainText(updated);
    */
  });

  // -----------------------------
  // WORK SHIFT FLOW

  test('TC05 - Work Shift Full Flow', async ({ page }) => {

    let name = 'Night ' + Date.now();
    let updated = name + ' Updated';

    await page.getByRole('link', { name: 'Job' }).click();
    await page.getByRole('menuitem', { name: 'Work Shifts' }).click();

    await expect(page).toHaveURL(/workShift/);

    // ADD
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Name').fill(name);

    await page.locator('input[type="time"]').first().fill('22:00');
    await page.locator('input[type="time"]').last().fill('06:00');

    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(name);

    /*

    // EDIT
    await page.locator('button i.bi-pencil-fill').first().click();
    await page.getByPlaceholder('Name').fill(updated);
    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.locator('body')).toContainText(updated);

    // DELETE
    await page.locator('button i.bi-trash').first().click();
    await page.getByRole('button', { name: 'Yes, Delete' }).click();

    await expect(page.locator('body')).not.toContainText(updated);

    */
  });

});