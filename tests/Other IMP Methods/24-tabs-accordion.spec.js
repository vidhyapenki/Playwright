// Tabs and Accordion widgets
// Sites: https://jqueryui.com/tabs/   https://jqueryui.com/accordion/
const { test, expect } = require('@playwright/test');

test.describe('Tabs & Accordion', () => {

  test('switch between tabs', async ({ page }) => {
    await page.goto('https://jqueryui.com/tabs/');
    const frame = page.frameLocator('iframe.demo-frame');

    await expect(frame.locator('#tabs-1')).toBeVisible();

    await frame.locator('#tabs a[href="#tabs-2"]').click();
    await expect(frame.locator('#tabs-2')).toBeVisible();
    await expect(frame.locator('#tabs-1')).toBeHidden();

    await frame.locator('#tabs a[href="#tabs-3"]').click();
    await expect(frame.locator('#tabs-3')).toBeVisible();
    await expect(frame.locator('#tabs li').nth(2)).toHaveAttribute('aria-selected', 'true');
    await expect(frame.locator('#tabs li').nth(2)).toHaveAttribute('aria-expanded', 'true');
  });

  test('expand accordion sections one at a time', async ({ page }) => {
    await page.goto('https://jqueryui.com/accordion/');
    const frame = page.frameLocator('iframe.demo-frame');
    const headers = frame.locator('#accordion > h3');
    const panels = frame.locator('#accordion > div');

    await expect(panels.nth(0)).toBeVisible();

    await headers.nth(1).click();
    await expect(panels.nth(1)).toBeVisible();
    await expect(panels.nth(0)).toBeHidden();

    const count = await headers.count();
    console.log('Accordion sections:', await headers.allInnerTexts());
    expect(count).toBe(4);
  });
});
