// File Upload and File Download
// Sites: https://the-internet.herokuapp.com/upload
//        https://the-internet.herokuapp.com/download
const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.describe('Upload', () => {

  test('upload a file from disk with setInputFiles()', async ({ page }, testInfo) => {
    const filePath = testInfo.outputPath('sample-upload.txt');
    fs.writeFileSync(filePath, 'Hello from Playwright!');

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles(filePath);
    await page.locator('#file-submit').click();

    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    await expect(page.locator('#uploaded-files')).toHaveText('sample-upload.txt');
  });

  test('upload an in-memory file (no file on disk)', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles({
      name: 'buffer-file.txt',
      mimeType: 'text/plain',
      buffer: Buffer.from('Created in memory'),
    });
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toHaveText('buffer-file.txt');
  });

  test('upload using the native file chooser event', async ({ page }, testInfo) => {
    const filePath = testInfo.outputPath('chooser-upload.txt');
    fs.writeFileSync(filePath, 'Uploaded via file chooser');

    await page.goto('https://the-internet.herokuapp.com/upload');
    const [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      page.locator('#file-upload').click(),
    ]);
    await fileChooser.setFiles(filePath);
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toHaveText('chooser-upload.txt');
  });
});

test.describe('Download', () => {

  test('download a file and save it', async ({ page }, testInfo) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const firstLink = page.locator('.example a').first();
    await expect(firstLink).toBeVisible();

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      firstLink.click(),
    ]);

    const fileName = download.suggestedFilename();
    const savePath = testInfo.outputPath(fileName);
    await download.saveAs(savePath);

    console.log('Downloaded:', fileName, '->', savePath);
    expect(fs.existsSync(savePath)).toBeTruthy();
    expect(fs.statSync(savePath).size).toBeGreaterThanOrEqual(0);
  });
});
