import {test, expect} from "@playwright/test"
test('Drag and Drop Demo', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const source = page.locator('#column-a');
    const target = page.locator('#column-b');
    await source.dragTo(target);
    await expect(source).toHaveText('B');
    await expect(target).toHaveText('A');

    await source.dragTo(target, {force: true});

    await source.dragTo(target, {targetPosition: {x: 10, y: 10}});

})
