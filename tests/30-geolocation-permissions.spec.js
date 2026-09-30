// Fake the browser location and grant permissions
// Site: https://the-internet.herokuapp.com/geolocation
const { test, expect } = require('@playwright/test');

test.use({
  geolocation: { latitude: 19.076, longitude: 72.8777 },   // Mumbai
  permissions: ['geolocation'],
});

test('page shows the mocked latitude and longitude', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/geolocation');
  await page.getByRole('button', { name: 'Where am I?' }).click();

  await expect(page.locator('#lat-value')).toHaveText('19.076');
  await expect(page.locator('#long-value')).toHaveText('72.8777');

  // change location during the test
  await context.setGeolocation({ latitude: 28.6139, longitude: 77.209 }); // New Delhi
  await page.getByRole('button', { name: 'Where am I?' }).click();
  await expect(page.locator('#lat-value')).toHaveText('28.6139');
});
