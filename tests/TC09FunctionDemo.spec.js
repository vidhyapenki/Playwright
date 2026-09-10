import{test, expect} from "@playwright/test";
import {faker} from '@faker-js/faker'

test.describe('Playwright Locator Scenario', () => {
    
    test('Test Case 01 - Fill all the data and click on register', async ({page}) => {
        
        await page.goto("https://parabank.parasoft.com/parabank/register.htm");
        await page.locator('[value="Register"]').click();
        await expect(page.locator("[id='customer.firstName.errors']")).toBeVisible();
        await expect(page.locator('[id="customer.lastName.errors"]')).toBeVisible();

    })
})

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});