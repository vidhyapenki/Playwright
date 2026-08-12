import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bahne.dk/');
  await page.locator('#shopify-section-template--19555034923354__collection_feed_FRU9xc').getByRole('link', { name: 'Wellness' }).click();
  await page.getByRole('link', { name: 'Zero Pore Pad 2.0 - 155g. Zero Pore Pad 2.0 - 155g.' }).click();
  await page.goto('https://bahne.dk/products/medicube-zero-pore-pad-2-0-155g-8800256119066?variant=54281336389978');
  await page.getByRole('button', { name: 'Tilføj til kurv' }).click();
  await page.getByRole('button', { name: 'Luk' }).first().click();
});