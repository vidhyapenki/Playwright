// Dynamically added and removed elements
// Site: https://the-internet.herokuapp.com/add_remove_elements/
const { test, expect } = require('@playwright/test');

test('add 5 elements, then delete 2', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  const addBtn = page.getByRole('button', { name: 'Add Element' });
  const deleteBtns = page.locator('#elements button');

  await expect(deleteBtns).toHaveCount(0);
  for (let i = 0; i < 5; i++) await addBtn.click();
  await expect(deleteBtns).toHaveCount(5);

  await deleteBtns.first().click();
  await deleteBtns.first().click();
  await expect(deleteBtns).toHaveCount(3);
});
