// SVG elements: CSS locators, XPath with local-name(), attributes, getBBox()
// Site: https://www.w3schools.com/graphics/svg_circle.asp
const { test, expect } = require('@playwright/test');

test.describe('SVG Element', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.w3schools.com/graphics/svg_circle.asp');
  });

  test('locate SVG with CSS and read its attributes', async ({ page }) => {
    const svgCount = await page.locator('svg').count();
    console.log('SVG elements on page:', svgCount);
    expect(svgCount).toBeGreaterThan(0);

    const circle = page.locator('svg circle').first();
    await circle.scrollIntoViewIfNeeded();
    await expect(circle).toBeVisible();

    const attrs = {
      cx: await circle.getAttribute('cx'),
      cy: await circle.getAttribute('cy'),
      r: await circle.getAttribute('r'),
      fill: await circle.getAttribute('fill'),
    };
    console.log('Circle attributes:', attrs);
    expect(attrs.r).not.toBeNull();
  });

  test('locate SVG with XPath (needs local-name())', async ({ page }) => {
    // Plain //svg does NOT work because SVG lives in a different XML namespace
    const circle = page.locator("//*[local-name()='svg']//*[local-name()='circle']").first();
    await circle.scrollIntoViewIfNeeded();
    await expect(circle).toBeVisible();
  });

  test('read SVG geometry with getBBox() and click it', async ({ page }) => {
    const circle = page.locator('svg circle').first();
    await circle.scrollIntoViewIfNeeded();

    const bbox = await circle.evaluate(el => {
      const b = el.getBBox();
      return { width: b.width, height: b.height };
    });
    console.log('Circle bounding box:', bbox);
    expect(bbox.width).toBeGreaterThan(0);

    await circle.click(); // SVG shapes are clickable like any element
  });
});
