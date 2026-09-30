// JavaScript Alerts: alert, confirm (OK / Cancel), prompt
// Site: https://the-internet.herokuapp.com/javascript_alerts
const { test, expect } = require('@playwright/test');

test.describe('Alerts & Popups', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  });

  test('simple alert', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('I am a JS Alert');
      await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  });

  test('confirm - accept (OK)', async ({ page }) => {
    page.once('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  });

  test('confirm - dismiss (Cancel)', async ({ page }) => {
    page.once('dialog', dialog => dialog.dismiss());
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
  });

  test('prompt - enter text', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt');
      await dialog.accept('Playwright');
    });
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toHaveText('You entered: Playwright');
  });
});
