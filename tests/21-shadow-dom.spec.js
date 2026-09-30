// Shadow DOM: Playwright CSS locators pierce OPEN shadow roots automatically
// Site: https://the-internet.herokuapp.com/shadowdom
const { test, expect } = require('@playwright/test');

test.describe('Shadow DOM', () => {

  test('locate elements inside a shadow root', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/shadowdom');

    const hosts = page.locator('my-paragraph');
    await expect(hosts).toHaveCount(2);

    // <p> lives INSIDE the shadow root - no special syntax needed
    await expect(hosts.first().locator('p')).toBeVisible();
    await expect(hosts.first()).toContainText("Let's have some different text!");
  });

  test('inspect the shadow root with JavaScript', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/shadowdom');
    const host = page.locator('my-paragraph').first();

    const hasShadowRoot = await host.evaluate(el => el.shadowRoot !== null);
    expect(hasShadowRoot).toBe(true);

    const shadowHtml = await host.evaluate(el => el.shadowRoot.innerHTML);
    console.log('Shadow root HTML:', shadowHtml);
    expect(shadowHtml).toContain('<slot');
  });
});
