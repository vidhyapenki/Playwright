import {test, expect} from '@playwright/test';

test.describe('playwright Viewport Tests', () => {

    test('TC01', async ({ page }) => {

        await page.goto('https://demoqa.com/automation-practice-form');
        await page.setViewportSize({ width: 800, height: 600 });
        await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    });

    test('TC02', async ({ page }) => {

        await page.goto('https://demoqa.com/automation-practice-form');
        await page.setViewportSize({ width: 1200, height: 800 });
        await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    }   );

    test('TC03', async ({ page }) => {

        await page.goto('https://demoqa.com/automation-practice-form'); 
        await page.setViewportSize({ width: 1600, height: 1200 });
        await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    }   );

    test ('TC04', async ({ page }) => {

        await page.goto('https://demoqa.com/automation-practice-form'); 
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    }   );

    // validate in different mobile devices

    test('TC05', async ({ page }) => {

    const iPhone11= playwright.devices['iPhone 11'];      
    await page.goto('https://demoqa.com/automation-practice-form');  
    await page.setViewportSize(iPhone11.viewport);
    await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    }   );

    test('TC06', async ({ page }) => {

    const iPhone12= playwright.devices['iPhone 12'];
    await page.goto('https://demoqa.com/automation-practice-form');  
    await page.setViewportSize(iPhone12.viewport);
    await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
    }   );

})