// iFrames: frameLocator, nested frames, page.frame(), listing frames
// Sites: https://the-internet.herokuapp.com/nested_frames
//        https://jqueryui.com/spinner/
const { test, expect } = require('@playwright/test');

test.describe('iFrame', () => {

  test('nested frames with chained frameLocator()', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const top = page.frameLocator('frame[name="frame-top"]');
    await expect(top.frameLocator('frame[name="frame-left"]').locator('body')).toHaveText(/LEFT/);
    await expect(top.frameLocator('frame[name="frame-middle"]').locator('#content')).toHaveText('MIDDLE');
    await expect(top.frameLocator('frame[name="frame-right"]').locator('body')).toHaveText(/RIGHT/);
    await expect(page.frameLocator('frame[name="frame-bottom"]').locator('body')).toHaveText(/BOTTOM/);
  });

  test('access a frame by name with page.frame() and list all frames', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const frames = page.frames();
    console.log('Frames:', frames.map(f => f.name() || '(main)'));
    expect(frames.length).toBe(6); // main + top + left + middle + right + bottom

    const middle = page.frame({ name: 'frame-middle' });
    expect(await middle.locator('#content').innerText()).toBe('MIDDLE');
  });

  test('interact with a form control inside an iframe', async ({ page }) => {
    await page.goto('https://jqueryui.com/spinner/');
    const frame = page.frameLocator('iframe.demo-frame');

    await frame.locator('#spinner').fill('5');
    await frame.locator('.ui-spinner-up').click();
    await expect(frame.locator('#spinner')).toHaveValue('6');
  });
});
