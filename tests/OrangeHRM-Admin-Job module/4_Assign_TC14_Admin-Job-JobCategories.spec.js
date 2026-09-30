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