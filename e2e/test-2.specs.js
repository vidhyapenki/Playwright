import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bahne.dk/');
  await page.getByRole('dialog', { name: 'Vi og vores' }).click();
  await page.locator('#shopify-section-template--19555035382106__image_with_text_hf8tcF').getByRole('link', { name: 'Shop', exact: true }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await page.goto('https://bahne.dk/products/royal-copenhagen-iris-fad-koral-l16-cm-5705140758143?queryid=90863a47992a3d5b234aedd264358a6d&queryindex=grafikr-products&variant=53665584152922');
  await page.getByRole('button', { name: 'Tilføj til kurv' }).click();
  await page.getByRole('button', { name: 'Tilføj til kurv' }).click();
  await page.goto('https://bahne.dk/products/karmameju-lip-face-solcreme-12-ml-spf-50-5710334019597?variant=53880855560538');
  await page.getByRole('button', { name: 'Tilføj til kurv' }).click();
});