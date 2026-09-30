// Mouse actions: hover, right click (context menu)
// Sites: https://the-internet.herokuapp.com/hovers
//        https://the-internet.herokuapp.com/context_menu
//        https://rahulshettyacademy.com/AutomationPractice/
const { test, expect } = require('@playwright/test');

test.describe('Mouse Actions', () => {

  test('hover over an element to reveal hidden content', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const figure = page.locator('.figure').nth(0);
    const caption = figure.locator('.figcaption h5');

    await expect(caption).toBeHidden();
    await figure.hover();
    await expect(caption).toHaveText('name: user1');
  });

  test('hover a menu and click a sub-menu item', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('#mousehover').hover();
    await page.locator('.mouse-hover-content a', { hasText: 'Top' }).click();
    await expect(page).toHaveURL(/#top/);
  });

  test('right click opens a context menu alert', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');

    let message = '';
    page.once('dialog', async dialog => { message = dialog.message(); await dialog.accept(); });
    await page.locator('#hot-spot').click({ button: 'right' });

    await expect.poll(() => message).toBe('You selected a context menu');
  });
});
