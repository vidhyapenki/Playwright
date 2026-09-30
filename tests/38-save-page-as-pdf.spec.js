// Save a web page as PDF (Chromium only)
// Site: https://the-internet.herokuapp.com/tables
const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('export the page to a PDF file', async ({ page, browserName }, testInfo) => {
  test.skip(browserName !== 'chromium', 'page.pdf() works only in Chromium');

  await page.goto('https://the-internet.herokuapp.com/tables');
  const pdfPath = testInfo.outputPath('tables.pdf');

  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });

  expect(fs.existsSync(pdfPath)).toBe(true);
  expect(fs.statSync(pdfPath).size).toBeGreaterThan(1000);
  await testInfo.attach('tables.pdf', { path: pdfPath, contentType: 'application/pdf' });
});
