// Tooltip: hover to show, read the text, move away to hide
// Site: https://jqueryui.com/tooltip/
const { test, expect } = require('@playwright/test');

test.describe('Tooltip', () => {

  test('show a tooltip on hover and read its text', async ({ page }) => {
    await page.goto('https://jqueryui.com/tooltip/');
    const frame = page.frameLocator('iframe.demo-frame');

    await frame.locator('#age').hover();
    const tooltip = frame.locator('.ui-tooltip-content');
    await expect(tooltip).toHaveText('We ask for your age only for statistical purposes.');

    await frame.locator('body').hover({ position: { x: 5, y: 5 } }); // move away
    await expect(tooltip).toBeHidden();
  });

  test('tooltip text comes from the title attribute', async ({ page }) => {
    await page.goto('https://jqueryui.com/tooltip/');
    const frame = page.frameLocator('iframe.demo-frame');

    // before hover, the text is stored in the title attribute
    const title = await frame.locator('#age').getAttribute('title');
    await frame.locator('#age').hover();
    await expect(frame.locator('.ui-tooltip-content')).toHaveText(title);
  });
});
