// Drag and Drop: dragTo(), manual mouse actions, HTML5 drag & drop
// Sites: https://jqueryui.com/droppable/
//        https://the-internet.herokuapp.com/drag_and_drop
const { test, expect } = require('@playwright/test');

test.describe('Drag and Drop', () => {

  test('drag and drop using locator.dragTo()', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    const frame = page.frameLocator('iframe.demo-frame');

    await frame.locator('#draggable').dragTo(frame.locator('#droppable'));
    await expect(frame.locator('#droppable p')).toHaveText('Dropped!');
  });

  test('drag and drop using low-level mouse actions', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/');
    const frame = page.frameLocator('iframe.demo-frame');

    const src = await frame.locator('#draggable').boundingBox();
    const dst = await frame.locator('#droppable').boundingBox();

    await page.mouse.move(src.x + src.width / 2, src.y + src.height / 2);
    await page.mouse.down();
    await page.mouse.move(dst.x + dst.width / 2, dst.y + dst.height / 2, { steps: 20 });
    await page.mouse.up();

    await expect(frame.locator('#droppable p')).toHaveText('Dropped!');
  });

  test('HTML5 drag and drop (swap columns A and B)', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    await expect(page.locator('#column-a header')).toHaveText('A');
    await page.locator('#column-a').dragTo(page.locator('#column-b'));

    await expect(page.locator('#column-a header')).toHaveText('B');
    await expect(page.locator('#column-b header')).toHaveText('A');
  });
});
