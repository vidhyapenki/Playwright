import {test, expect, devices} from '@playwright/test';

test.describe('Playwright ViewPort Scenario', () => {

    test('Test Case 01', async ({page}) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.getByRole('textbox', { name: 'First Name' }).fill("DEMO");
        await page.getByRole('textbox', { name: 'Last Name' }).fill("QA");
    })

    test('Test Case 02', async ({page}) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.setViewportSize({ width: 1366, height: 768 });
        await page.getByRole('textbox', { name: 'First Name' }).fill("DEMO");
        await page.getByRole('textbox', { name: 'Last Name' }).fill("QA");
    });
    //Mobile Devices
    test('Test Case 03', async ({page}) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.setViewportSize({ width: 375, height: 667 });
        await page.getByRole('textbox', { name: 'First Name' }).fill("DEMO");
        await page.getByRole('textbox', { name: 'Last Name' }).fill("QA");
    });
    test('Test Case 04', async ({page}) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.setViewportSize({ width: 414, height: 896 });
        await page.getByRole('textbox', { name: 'First Name' }).fill("DEMO");
        await page.getByRole('textbox', { name: 'Last Name' }).fill("QA");
    });

//Validate in Different Mobile Devices Screens
    test('Test Case 05', async ({page}) => {
        const iPhone17 = devices['iPhone 17 Pro Max'];
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.setViewportSize(iPhone17.viewport);
        await page.getByRole('textbox', { name: 'First Name' }).fill("DEMO");
        await page.getByRole('textbox', { name: 'Last Name' }).fill("QA");
    });

})
