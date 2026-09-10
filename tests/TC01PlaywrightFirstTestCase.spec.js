import {test, expect} from '@playwright/test';

var baseURL = "https://parabank.parasoft.com/parabank/register.htm"
var expTitle = "ParaBank | Register for Free Online Account Access"

test('I am validating the title of the Page', async ({ page }) => {

  await page.goto(baseURL);
  
  await page.waitForTimeout(4000);

  //ASSERTION
+
  await expect(page).toHaveTitle(expTitle);  

  await expect(page).toHaveURL(baseURL);

  await console.log(getFirstName());

//   chai + jasmine
//   Browser -- Context -- Page -- ElementHandle -- Locators
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
//   await expect(page).toHaveURL(/playwright/);
});


test("I am validating the title of the page 2", async({page})=>{
    await page.goto(baseURL);
})

function getFirstName(){
    return "Sita";
}