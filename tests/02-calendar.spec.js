// Calendar / Date Picker: navigate months, pick a day, type a date
// Site: https://jqueryui.com/datepicker/  (widget lives inside an iframe)
const { test, expect } = require('@playwright/test');

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

// Moves the calendar forward/back until the target month/year is shown, then clicks the day.
async function selectDate(frame, targetDate) {
  const targetMonth = targetDate.getMonth();
  const targetYear = targetDate.getFullYear();

  for (let guard = 0; guard < 60; guard++) {
    const month = MONTHS.indexOf(await frame.locator('.ui-datepicker-month').innerText());
    const year = Number(await frame.locator('.ui-datepicker-year').innerText());

    if (month === targetMonth && year === targetYear) break;

    const goForward = year < targetYear || (year === targetYear && month < targetMonth);
    await frame.locator(goForward ? '.ui-datepicker-next' : '.ui-datepicker-prev').click();
  }

  await frame.locator('.ui-datepicker-calendar td a')
    .filter({ hasText: new RegExp(`^${targetDate.getDate()}$`) })
    .click();
}

const toMMDDYYYY = d =>
  `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;

test.describe('Calendar / Date Picker', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/');
  });

  test('select a FUTURE date (3 months ahead)', async ({ page }) => {
    const frame = page.frameLocator('iframe.demo-frame');
    const target = new Date();
    target.setDate(25); //Date value is 25
    target.setMonth(target.getMonth() + 3); //Month value updated to Dec

    await frame.locator('#datepicker').click();
    await expect(frame.locator('#ui-datepicker-div')).toBeVisible();
    await selectDate(frame, target);

    await expect(frame.locator('#datepicker')).toHaveValue(toMMDDYYYY(target));
  });

  test('select a PAST date (2 months back)', async ({ page }) => {
    const frame = page.frameLocator('iframe.demo-frame');
    const target = new Date();
    target.setDate(10);
    target.setMonth(target.getMonth() - 2);

    await frame.locator('#datepicker').click();
    await selectDate(frame, target);

    await expect(frame.locator('#datepicker')).toHaveValue(toMMDDYYYY(target));
  });

  test('type a date directly into the input', async ({ page }) => {
    const frame = page.frameLocator('iframe.demo-frame');
    await frame.locator('#datepicker').fill('12/25/2026');
    await frame.locator('#datepicker').press('Escape');
    await expect(frame.locator('#datepicker')).toHaveValue('12/25/2026');
  });
});
