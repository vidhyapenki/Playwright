// Auto-suggest / Auto-complete dropdown
// Sites: https://rahulshettyacademy.com/AutomationPractice/
//        https://jqueryui.com/autocomplete/
const { test, expect } = require('@playwright/test');

test.describe('Auto-suggest Dropdown', () => {

  test('type partial text and click the matching suggestion', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const input = page.locator('#autocomplete');
    await input.pressSequentially('ind', { delay: 150 });   // type like a real user

    const suggestions = page.locator('.ui-menu-item div');
    await expect(suggestions.first()).toBeVisible();
    console.log('Suggestions:', await suggestions.allInnerTexts());

    await suggestions.filter({ hasText: /^India$/ }).click();
    await expect(input).toHaveValue('India');
  });

  test('pick a suggestion using the keyboard (ArrowDown + Enter)', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const input = page.locator('#autocomplete');
    await input.pressSequentially('ind', { delay: 150 });
    const suggestions = page.locator('.ui-menu-item div');
    await expect(suggestions.first()).toBeVisible();

    const total = await suggestions.count();
    for (let i = 0; i < total; i++) {
      await input.press('ArrowDown');
      if ((await input.inputValue()) === 'Indonesia') break;
    }
    await input.press('Enter');
    await expect(input).toHaveValue('Indonesia');
  });

  test('auto-complete inside an iframe (jQuery UI)', async ({ page }) => {
    await page.goto('https://jqueryui.com/autocomplete/');
    const frame = page.frameLocator('iframe.demo-frame');

    await frame.locator('#tags').pressSequentially('ja', { delay: 150 });
    const items = frame.locator('.ui-menu-item-wrapper');
    await expect(items.first()).toBeVisible();

    await items.filter({ hasText: /^JavaScript$/ }).click();
    await expect(frame.locator('#tags')).toHaveValue('JavaScript');
  });
});
