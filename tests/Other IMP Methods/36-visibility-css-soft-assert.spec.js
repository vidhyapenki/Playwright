// Show / hide elements, CSS checks and soft assertions
// Site: https://rahulshettyacademy.com/AutomationPractice/
const { test, expect } = require('@playwright/test');

test.describe('Visibility, CSS & Soft Assertions', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  });

  test('hide and show a text box', async ({ page }) => {
    const textBox = page.locator('#displayed-text');
    await expect(textBox).toBeVisible();

    await page.locator('#hide-textbox').click();
    await expect(textBox).toBeHidden();
    await expect(textBox).toHaveCSS('display', 'none');

    await page.locator('#show-textbox').click();
    await expect(textBox).toBeVisible();
  });

  test('soft assertions report every failure but keep the test running', async ({ page }) => {
    await expect.soft(page).toHaveTitle(/Practice/);
    await expect.soft(page.locator('#autocomplete')).toBeEditable();
    await expect.soft(page.locator('#checkbox-example input')).toHaveCount(3);
    await expect.soft(page.locator('#radio-btn-example input')).toHaveCount(3);
    // the test only fails at the end if any soft assertion failed
  });
});
