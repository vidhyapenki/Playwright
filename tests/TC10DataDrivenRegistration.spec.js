const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

const BASE_URL = 'https://parabank.parasoft.com/parabank';

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
  
    firstName,
    lastName,
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: true }),
    zipCode: faker.location.zipCode('#####'),
    phone: faker.phone.number(),
    ssn: faker.string.numeric(9),
    

    // Unique username to avoid conflicts with existing users
    username:
      `pw_${firstName}_${lastName}_${faker.string.alphanumeric(1)}`
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, ''),

    password: `Pw@${faker.string.alphanumeric(1)}`,
  };
}

test.describe('ParaBank - Register 1 Users and Verify Balance', () => {

  test('Create users, login and check account balance', async ({ browser }) => {

    // Generate 5 unique users
   
    const users = Array.from({ length: 1 }, () => generateUser());

    //users is an array which is holding 5 data set
    // users{ 5 sets of data
    //       }
    const results = []; //Array - Empty Array

    // =====================================================
    // STEP 1: REGISTER 1 USERS
    // =====================================================

    const registrationPage = await browser.newPage();
    
    for (let i = 0; i < users.length; i++) {

      const user = users[i];

      console.log(`\n========== REGISTERING USER ${i + 1} ==========`);

      await registrationPage.goto(`${BASE_URL}/register.htm`);

      // Fill registration form
      await registrationPage
        .locator('input[name="customer.firstName"]')
        .fill(user.firstName);

      await registrationPage
        .locator('input[name="customer.lastName"]')
        .fill(user.lastName);

      await registrationPage
        .locator('input[name="customer.address.street"]')
        .fill(user.address);

      await registrationPage
        .locator('input[name="customer.address.city"]')
        .fill(user.city);

      await registrationPage
        .locator('input[name="customer.address.state"]')
        .fill(user.state);

      await registrationPage
        .locator('input[name="customer.address.zipCode"]')
        .fill(user.zipCode);

      await registrationPage
        .locator('input[name="customer.phoneNumber"]')
        .fill(user.phone);

      await registrationPage
        .locator('input[name="customer.ssn"]')
        .fill(user.ssn);

      await registrationPage
        .locator('input[name="customer.username"]')
        .fill(user.username);

      await registrationPage
        .locator('input[name="customer.password"]')
        .fill(user.password);

      await registrationPage
        .locator('input[name="repeatedPassword"]')
        .fill(user.password);

      // Submit registration
      await registrationPage
        .getByRole('button', { name: /register/i })
        .click();

      // Verify registration/login success
      await expect(
        registrationPage.locator("h2")
      ).toBeVisible({ timeout: 15000 });

      console.log(`Registration successful`);
      console.log(`Username: ${user.username}`);
      console.log(`Password: ${user.password}`);

      await registrationPage.waitForTimeout(4000)
      // Logout
      await registrationPage
        .locator("[href='logout.htm']")
        .click();

      await expect(
        registrationPage.getByRole('link', { name: /register/i })
      ).toBeVisible();

      console.log(`Logout successful`);
    }

    await registrationPage.close();

    // =====================================================
    // STEP 2: LOGIN WITH EACH USER & CHECK BALANCE
    // =====================================================

    for (let i = 0; i < users.length; i++) {

      const user = users[i];

      console.log(`\n========== LOGIN USER ${i + 1} ==========`);

      const page = await browser.newPage();

      // Open ParaBank
      await page.goto(`${BASE_URL}/index.htm`);

      // Login
      await page
        .locator('input[name="username"]')
        .fill(user.username);

      await page
        .locator('input[name="password"]')
        .fill(user.password);

      await page
        .getByRole('button', { name: /log in/i })
        .click();

      // Verify login
      await expect(
        page.getByText(/account services/i)
      ).toBeVisible({ timeout: 15000 });

      console.log(`Login successful for ${user.username}`);

      // =================================================
      // Navigate to Accounts Overview
      // =================================================

      await page
        .getByRole('link', { name: /accounts overview/i })
        .click();

      await expect(
        page.getByRole('heading', {
          name: /accounts overview/i
        })
      ).toBeVisible();

      // =================================================
      // Get Account Number
      // =================================================

      //Table
      //Row
      //Col
      //Table Header
      // td - table data
      // th - table header
      // tr - table row

      const firstRow = page
        .locator('#accountTable tbody tr')
        .first();

      const accountNumber = (
        await firstRow
          .locator('td')
          .nth(0)
          .innerText()
      ).trim();

      // =================================================
      // Get Balance
      // =================================================

      const balance = (
        await firstRow
          .locator('td')
          .nth(1)
          .innerText()
      ).trim();

      // Verify balance format
      expect(balance).toMatch(/^\$-?\d+\.\d{2}$/);

      console.log(`Account Number: ${accountNumber}`);
      console.log(`Balance: ${balance}`);

      // Store result
      results.push({
        userNumber: i + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        accountNumber,
        balance
      });

      // =================================================
      // Logout
      // =================================================

      await page
        .getByRole('link', { name: /log out/i })
        .click();

      console.log(`Logout successful for ${user.username}`);

      await page.close();
    }

    // =====================================================
    // STEP 3: FINAL REPORT
    // =====================================================

    console.log('\n');
    console.log('====================================================');
    console.log('          PARABANK USER BALANCE REPORT');
    console.log('====================================================');

    console.table(results);

    console.log('====================================================');

    // Verify all 5 users were processed
    expect(results).toHaveLength(1);

    // Verify every user has a balance
    for (const result of results) {
      expect(result.username).toBeTruthy();
      expect(result.password).toBeTruthy();
      expect(result.accountNumber).toBeTruthy();
      expect(result.balance).toMatch(/^\$-?\d+\.\d{2}$/);
    }
  });
});