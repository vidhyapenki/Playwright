// Sortable list: reorder items with drag and drop
// Site: https://jqueryui.com/sortable/
const { test, expect } = require('@playwright/test');

test('move "Item 1" below "Item 3"', async ({ page }) => {
  await page.goto('https://jqueryui.com/sortable/');
  const frame = page.frameLocator('iframe.demo-frame');
  const items = frame.locator('#sortable li');

  //innerText() returns the visible text of the element, including its descendants, while textContent returns the full text content of the element, including hidden text and text from child elements. In this case, innerText is more appropriate because we want to capture the visible text of each list item.
  //allInnerTexts() returns an array of the innerText of all elements in the locator. It is useful for capturing the text of multiple elements at once, as we want to do here with the list items.
  
  const initial = (await items.allInnerTexts()).map(t => t.trim()); //initail is an array -> Item 1, Item 2, Item 3
  console.log('Initial:', initial);
  expect(initial[0]).toBe('Item 1');
  expect(initial[1]).toBe('Item 2');
  expect(initial[2]).toBe('Item 3');

  const src = await items.nth(0).boundingBox();
  const dst = await items.nth(2).boundingBox();

  await page.mouse.move(src.x + src.width / 2, src.y + src.height / 2);
  await page.mouse.down();
  await page.mouse.move(dst.x + dst.width / 2, dst.y + dst.height, { steps: 40 });
  await page.mouse.up();

  const after = (await items.allInnerTexts()).map(t => t.trim());
  console.log('Before:', initial, '\nAfter: ', after);
  expect(after.indexOf('Item 1')).toBeGreaterThan(0);
  expect(after).toHaveLength(initial.length);
  
});
