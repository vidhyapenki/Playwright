const { test, expect } = require('@playwright/test');

test('Select and validate dropdown options', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');

  // Select Option 1
  await dropdown.selectOption({ label: 'Option 1' });
  await expect(dropdown).toHaveValue('1');

  // Select Option 2


  await page.waitForTimeout(10000);
  await dropdown.selectOption({ label: 'Option 2' });
  await expect(dropdown).toHaveValue('2');
});

test('Select and validate dropdown values', async ({ page }) => {

  // Open the website
  await page.goto(
    'https://www.dummyticket.com/dummy-ticket-for-visa-application/',
    { waitUntil: 'domcontentloaded' }
  );

  // --------------------------------------------------
  // 1. Select Country / Region = United States (US)
  // --------------------------------------------------

  const countryDropdown = page.locator('#billing_country');

  await countryDropdown.selectOption({ label: 'Vietnam' });

  // Validate selected country
  await expect(countryDropdown).toHaveValue('US');

  // --------------------------------------------------
  // 2. Select State = Colorado
  // --------------------------------------------------
/*
  const stateDropdown = page.locator('#billing_state');

  // Wait for state dropdown to be available after
  // selecting the country
  await expect(stateDropdown).toBeVisible();

  await stateDropdown.selectOption({ label: 'Colorado' });

  // Validate selected state
  await expect(stateDropdown).toHaveValue('CO');

  // --------------------------------------------------
  // 3. Select Purpose of dummy ticket
  // --------------------------------------------------

  const purposeDropdown = page.locator(
    'select[name*="purpose"], select[id*="purpose"]'
  ).first();

  await purposeDropdown.selectOption({ label: 'Visa Application' });

  // Validate purpose
  await expect(purposeDropdown).toHaveValue(
    await purposeDropdown.inputValue()
  );

  // --------------------------------------------------
  // 4. Select Number of additional passengers
  // --------------------------------------------------

  const passengerDropdown = page.locator(
    'select[name*="passenger"], select[id*="passenger"]'
  ).first();

  // Example: select 1 additional passenger
  await passengerDropdown.selectOption({ label: '1' });

  // Validate
  await expect(passengerDropdown).toHaveValue(
    await passengerDropdown.inputValue()
  );
*/
});