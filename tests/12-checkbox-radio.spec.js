// Checkboxes and Radio buttons
// Sites: https://the-internet.herokuapp.com/checkboxes
//        https://rahulshettyacademy.com/AutomationPractice/
const { test, expect } = require('@playwright/test');

test.describe('Checkbox & Radio', () => {

  test('check and uncheck checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const boxes = page.locator('#checkboxes input[type="checkbox"]');

    await boxes.nth(0).check();
    await expect(boxes.nth(0)).toBeChecked();

    await boxes.nth(1).uncheck();
    await expect(boxes.nth(1)).not.toBeChecked();
  });

  test('check all checkboxes in a group', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const boxes = page.locator('#checkbox-example input[type="checkbox"]');

    const count = await boxes.count();
    for (let i = 0; i < count; i++) await boxes.nth(i).check();
    for (let i = 0; i < count; i++) await expect(boxes.nth(i)).toBeChecked();
  });

  test('select a radio button', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const radio2 = page.locator('input[name="radioButton"][value="radio2"]');

    await radio2.check();
    await expect(radio2).toBeChecked();
    await expect(page.locator('input[name="radioButton"][value="radio1"]')).not.toBeChecked();
  });
});
