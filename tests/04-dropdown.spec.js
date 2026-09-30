// Static <select> dropdowns and a custom (non-select) dropdown
// Sites: https://the-internet.herokuapp.com/dropdown
//        https://rahulshettyacademy.com/AutomationPractice/
//        https://jqueryui.com/selectmenu/
const { test, expect } = require('@playwright/test');

test.describe('Dropdown', () => {

  test('select by value, label and index', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('#dropdown');

    await dropdown.selectOption('1');                    // by value
    await expect(dropdown).toHaveValue('1');

    await dropdown.selectOption({ label: 'Option 2' });  // by visible text
    await expect(dropdown).toHaveValue('2');

    await dropdown.selectOption({ index: 1 });           // by index
    await expect(dropdown).toHaveValue('1');
  });

  test('read all options and verify the count', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const options = page.locator('#dropdown option');
    await expect(options).toHaveCount(3);
    const texts = (await options.allInnerTexts()).map(t => t.trim());
    console.log('Options:', texts);
    expect(texts).toContain('Option 2');
  });

  test('read the currently selected option text', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const dropdown = page.locator('#dropdown-class-example');

    await dropdown.selectOption({ label: 'Option3' });
    const selectedText = await dropdown.locator('option:checked').innerText();
    expect(selectedText.trim()).toBe('Option3');
    await expect(dropdown).toHaveValue('option3');
  });

  test('custom dropdown built with <span>/<li> (not a <select>)', async ({ page }) => {
    await page.goto('https://jqueryui.com/selectmenu/');
    const frame = page.frameLocator('iframe.demo-frame');

    await frame.locator('#speed-button').click();
    await frame.locator('#speed-menu li').filter({ hasText: /^Fast$/ }).click();

    await expect(frame.locator('#speed-button .ui-selectmenu-text')).toHaveText('Fast');
  });
});
