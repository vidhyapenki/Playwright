// Resizable element: drag the corner handle and verify the new size
// Site: https://jqueryui.com/resizable/
const { test, expect } = require('@playwright/test');

test('resize a box by dragging its corner', async ({ page }) => {
  await page.goto('https://jqueryui.com/resizable/');
  const frame = page.frameLocator('iframe.demo-frame');
  const box = frame.locator('#resizable');
  const corner = frame.locator('#resizable .ui-resizable-se');

  const before = await box.boundingBox();
  console.log("Pixel Value", before.x, before.y);
  const handle = await corner.boundingBox();

  await page.mouse.move(handle.x + handle.width / 2, handle.y + handle.height / 2);
  await page.mouse.down();
  await page.mouse.move(handle.x + 150, handle.y + 150, { steps: 10 });
  await page.mouse.up();

  const after = await box.boundingBox();
  console.log(`Before: ${before.width}x${before.height}  After: ${after.width}x${after.height}`);
  expect(after.width).toBeGreaterThan(before.width + 50);
  expect(after.height).toBeGreaterThan(before.height + 30);
});
