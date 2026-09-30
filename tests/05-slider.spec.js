// Slider: keyboard control, mouse dragging, native range input
// Sites: https://jqueryui.com/slider/
//        https://the-internet.herokuapp.com/horizontal_slider
const { test, expect } = require('@playwright/test');

test.describe('Slider', () => {

  test('move a jQuery UI slider with the keyboard', async ({ page }) => {
    await page.goto('https://jqueryui.com/slider/');
    const handle = page.frameLocator('iframe.demo-frame').locator('#slider .ui-slider-handle');

    await handle.focus();
    await handle.press('Home');                 // go to 0%
    for (let i = 0; i < 10; i++) await handle.press('ArrowRight');

    await expect(handle).toHaveAttribute('style', /left: 10%/);
  });

  test('drag a jQuery UI slider with the mouse to ~50%', async ({ page }) => {
    await page.goto('https://jqueryui.com/slider/');
    const frame = page.frameLocator('iframe.demo-frame');
    const track = frame.locator('#slider');
    const handle = frame.locator('#slider .ui-slider-handle');

    const trackBox = await track.boundingBox();
    const handleBox = await handle.boundingBox();

    await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(trackBox.x + trackBox.width * 0.5, trackBox.y + trackBox.height / 2, { steps: 15 });
    await page.mouse.up();

    const style = await handle.getAttribute('style');
    const percent = Number(style.match(/left:\s*([\d.]+)%/)[1]);
    console.log('Slider is at', percent, '%');
    expect(percent).toBeGreaterThan(40);
    expect(percent).toBeLessThan(60);
  });

  test('HTML5 range input slider', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
    const slider = page.locator('input[type="range"]');

    await slider.focus();
    await slider.press('Home');                               // min = 0
    for (let i = 0; i < 4; i++) await slider.press('ArrowRight'); // step = 0.5

    await expect(page.locator('#range')).toHaveText('2');
    await expect(slider).toHaveValue('2');
  });
});
