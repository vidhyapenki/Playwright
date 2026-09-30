// Screenshots: viewport, full page, single element
// Site: https://the-internet.herokuapp.com/tables
const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.describe('Screenshots', () => {

  test('take page, full-page and element screenshots', async ({ page }, testInfo) => {
    await page.goto('https://the-internet.herokuapp.com/tables');

    const viewportShot = testInfo.outputPath('viewport.png');
    const fullShot = testInfo.outputPath('full-page.png');
    const elementShot = testInfo.outputPath('table1.png');

    await page.screenshot({ path: viewportShot });
    await page.screenshot({ path: fullShot, fullPage: true });
    await page.locator('#table1').screenshot({ path: elementShot });

    for (const file of [viewportShot, fullShot, elementShot]) {
      expect(fs.existsSync(file)).toBeTruthy();
    }
    // attach to the HTML report
    await testInfo.attach('table1', { path: elementShot, contentType: 'image/png' });
  });
});
