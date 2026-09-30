// Web Tables: read headers/rows, find a row by value, sort, sum a column
// Sites: https://the-internet.herokuapp.com/tables
//        https://rahulshettyacademy.com/AutomationPractice/
const { test, expect } = require('@playwright/test');

test.describe('Web Tables', () => {

  test('read headers and every row of a static table', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const table = page.locator('#table1');

    const headers = (await table.locator('thead th').allInnerTexts()).map(h => h.trim());
    expect(headers).toEqual(['Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action']);

    const rows = table.locator('tbody tr');
    await expect(rows).toHaveCount(4);

    const rowCount = await rows.count();
    for (let i = 0; i < rowCount; i++) {
      const cells = await rows.nth(i).locator('td').allInnerTexts();
      console.log(`Row ${i + 1}: ${cells.join(' | ')}`);
    }
  });

  test('find a row by a cell value and read other columns', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');

    const row = page.locator('#table1 tbody tr').filter({ hasText: 'jdoe@hotmail.com' });
    await expect(row).toHaveCount(1);
    await expect(row.locator('td').nth(0)).toHaveText('Doe');     // Last Name
    await expect(row.locator('td').nth(1)).toHaveText('Jason');   // First Name
    await expect(row.locator('td').nth(3)).toHaveText('$100.00'); // Due
  });

  test('sort a column by clicking its header', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/tables');

    await page.locator('#table2 thead .last-name').click();

    const lastNameCells = page.locator('#table2 tbody .last-name');
    await expect.poll(async () => lastNameCells.allInnerTexts())
      .toEqual(['Bach', 'Conway', 'Doe', 'Smith']);
  });

  test('sum a column and compare with the total shown on page', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const amounts = await page.locator('.tableFixHead tbody tr td:nth-child(4)').allInnerTexts();
    console.log(amounts);// ["25", "50", "25", "100", "50", "46"]
    const sum = amounts.reduce((acc, v) => acc + Number(v.trim()), 0);

    const totalText = await page.locator('.totalAmount').innerText(); // "Total Amount Collected: 296"
    const displayedTotal = Number(totalText.match(/\d+/)[0]);

    console.log(`Calculated: ${sum}, Displayed: ${displayedTotal}`);
    expect(sum).toBe(displayedTotal);
  });

  test('filter rows of a table by a column value', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const rows = page.locator('table[name="courses"] tbody tr:has(td)');
    const count = await rows.count();
    const matches = [];

    for (let i = 0; i < count; i++) {
      const course = (await rows.nth(i).locator('td').nth(1).innerText()).trim();
      const price = (await rows.nth(i).locator('td').nth(2).innerText()).trim();
      if (price === '25') 
        {
          matches.push(course);
        }
    }
    console.log('Courses priced 25:', matches);
    expect(matches.length).toBeGreaterThan(0);
  });
});
