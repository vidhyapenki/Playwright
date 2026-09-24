import {test, expect} from '@playwright/test';
test('Upload and Download Demo', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    //Upload File
    const filePath = 'tests/testfile.txt';
    await page.setInputFiles('input[type="file"]', filePath);
    await page.click('input[type="submit"]');
    await expect(page.locator('#uploaded-files')).toHaveText('testfile.txt');   
})

test('Download Demo', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    //Download File
    const [download] = await Promise.all([
        page.waitForEvent('download'),      
        page.click('text=some-file.txt')
    ]);
    //Copy the downloaded file to a desired path
    const downloadPath = 'tests/downloaded_file.txt';
    await download.saveAs(downloadPath);
    console.log(`File downloaded to: ${downloadPath}`);
})