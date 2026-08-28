import {test, expect} from '@playwright/test';

describe('Playwright form filling scenario', () => {

    test('TC01', async ({ page }) => {

        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByRole('textbox', { name: 'First Name' }).fill('DEMO');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('QA');
        await page.getByRole('textbox', { name: 'name@example.com' }).fill('no reply');
        await page.getByRole('button', { name: 'Submit' }).click();

        await page.locator("css locator/ xpath locator").click();
    });
});