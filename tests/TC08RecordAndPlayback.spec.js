import { test, expect } from '@playwright/test';


//input[@name='username']
test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('De,m');
  await page.locator('[id="customer.firstName"]').press('Tab');
  await page.locator('[id="customer.lastName"]').fill('Deomads');
  await page.locator('[id="customer.lastName"]').press('Tab');
  await page.locator('[id="customer.address.street"]').fill('asndasd');
  await page.locator('[id="customer.address.street"]').press('Tab');
  await page.locator('[id="customer.address.city"]').fill('askndlaksn');
  await page.locator('[id="customer.address.city"]').press('Tab');
  await page.locator('[id="customer.address.state"]').fill('dasnlkn');
  await page.locator('[id="customer.address.state"]').press('Tab');
  await page.locator('[id="customer.address.zipCode"]').fill('asdnjln');
  await page.locator('[id="customer.address.zipCode"]').press('Tab');
  await page.locator('[id="customer.phoneNumber"]').fill('dassjndjkassn');
  await page.locator('[id="customer.phoneNumber"]').press('Tab');
  await page.locator('[id="customer.ssn"]').fill('adsnklkn');
  await page.locator('[id="customer.ssn"]').press('Tab');
  await page.locator('[id="customer.username"]').fill('dsalkn');
  await page.locator('[id="customer.username"]').press('Tab');
  await page.locator('[id="customer.password"]').fill('dlsaknld');
  await page.locator('[id="customer.password"]').press('Tab');
  await page.locator('#repeatedPassword').fill('sadlknlkas');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByText('Passwords did not match.')).toBeVisible();
});