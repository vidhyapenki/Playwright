

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