import {test, expect} from '@playwright/test';

test.describe('Playwright Form Filling Scenario', () => {

    test('Test Case 01', async ({page}) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await page.getByRole('textbox', { name: 'First Name' }).fill("DEMO");
        await page.getByRole('textbox', { name: 'Last Name' }).fill("QA");
        await page.getByRole('textbox', { name: 'name@example.com' }).fill('noreply@gmail.com');
        await page.getByRole('button', { name: 'Submit' }).click();

        //isvisible
        //isselected
        //ischecked
        
        //await page.locator("CSS LOCATOR/XPATH LOCATOR").click();
        
    })

})