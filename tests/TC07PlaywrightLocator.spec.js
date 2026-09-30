import{test, expect} from "@playwright/test";

test.describe('Playwright Locator Scenario', () => {
    
    test('Test Case 01 - Do not fill any data on UI and click on Register', async ({page}) => {
        
        await page.goto("https://parabank.parasoft.com/parabank/register.htm");
        
        await page.locator('[value="Register"]').click();

        //Assertion for Negative Test

        await expect(page.locator("[id='customer.firstName.errors']")).toBeVisible();

        await expect(page.locator('[id="customer.lastName.errors"]')).toBeVisible();

        //11 fields

    })

    // first()
    // last()
    // .nth(3)

    
})