// Dynamic elements & waits: elements that appear, disappear, get enabled
// Sites: https://the-internet.herokuapp.com/dynamic_loading/2
//        https://the-internet.herokuapp.com/dynamic_controls
const { test, expect } = require('@playwright/test');

test.describe('Dynamic Elements & Waits', () => {

  test('wait for an element rendered after loading', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
    await page.getByRole('button', { name: 'Start' }).click();

    await expect(page.locator('#loading')).toBeHidden({ timeout: 20000 });
    await expect(page.locator('#finish h4')).toHaveText('Hello World!');
  });

  test('wait for an element to be removed and added back', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

    await page.getByRole('button', { name: 'Remove' }).click();
    await expect(page.locator('#message')).toHaveText("It's gone!");
    await expect(page.locator('#checkbox')).toHaveCount(0);

    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.locator('#message')).toHaveText("It's back!");
    await expect(page.locator('#checkbox')).toBeVisible();
  });

  test('wait for a disabled input to become enabled', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
    const input = page.locator('#input-example input[type="text"]');

    await expect(input).toBeDisabled();
    await page.getByRole('button', { name: 'Enable' }).click();
    await expect(input).toBeEnabled();
    await input.fill('Now I can type');
    await expect(input).toHaveValue('Now I can type');
  });
});
