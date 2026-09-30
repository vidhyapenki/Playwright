// Keyboard actions: single keys, special keys, shortcuts
// Sites: https://the-internet.herokuapp.com/key_presses
//        https://the-internet.herokuapp.com/inputs
const { test, expect } = require('@playwright/test');

test.describe('Keyboard Actions', () => {

  test('press individual and special keys', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    const input = page.locator('#target');

    await input.press('A');
    await expect(page.locator('#result')).toHaveText('You entered: A');

    await input.press('Enter');
    await expect(page.locator('#result')).toHaveText('You entered: ENTER');

    await input.press('Tab');
    await expect(page.locator('#result')).toHaveText('You entered: TAB');
  });

  test('select all + delete with keyboard shortcuts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/inputs');
    const input = page.locator('input[type="number"]');

    await input.fill('12345');
    await input.press('ControlOrMeta+A');
    await input.press('Backspace');
    await expect(input).toHaveValue('');

    await input.press('ArrowUp');   // number input increments
    await expect(input).toHaveValue('1');
  });
});
