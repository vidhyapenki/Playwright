// Modal windows / dialogs built with HTML (not browser alerts)
// Sites: https://the-internet.herokuapp.com/entry_ad
//        https://jqueryui.com/dialog/
const { test, expect } = require('@playwright/test');

test.describe('Modal / Dialog', () => {

  test('close an entry-ad modal that appears on page load', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/entry_ad');
    const modal = page.locator('#modal .modal');

    await expect(modal).toBeVisible({ timeout: 15000 });
    await expect(modal.locator('.modal-title')).toContainText('This is a modal window');

    await modal.locator('.modal-footer p', { hasText: 'Close' }).click();
    await expect(modal).toBeHidden();
  });

  test('read and close a jQuery UI dialog', async ({ page }) => {
    await page.goto('https://jqueryui.com/dialog/');
    const frame = page.frameLocator('iframe.demo-frame');
    const dialog = frame.locator('.ui-dialog');

    await expect(dialog).toBeVisible();
    await expect(dialog.locator('.ui-dialog-title')).toHaveText('Basic dialog');

    await dialog.locator('.ui-dialog-titlebar-close').click();
    await expect(dialog).toBeHidden();
  });
});
