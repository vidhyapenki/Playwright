// Selectable list: Ctrl/Cmd + click to select multiple items
// Site: https://jqueryui.com/selectable/
const { test, expect } = require('@playwright/test');

test('select multiple items with modifier keys', async ({ page }) => {
  await page.goto('https://jqueryui.com/selectable/');
  const frame = page.frameLocator('iframe.demo-frame');
  const items = frame.locator('#selectable li');

  await items.nth(0).click();
  await items.nth(2).click({ modifiers: ['ControlOrMeta'] });
  await items.nth(4).click({ modifiers: ['ControlOrMeta'] });
  
  const selected = frame.locator('#selectable li.ui-selected');
  await expect(selected).toHaveCount(3);
  console.log('Selected:', await selected.allInnerTexts());

  // a normal click resets the selection to one item
  await items.nth(1).click();
  await expect(selected).toHaveCount(1);
});
