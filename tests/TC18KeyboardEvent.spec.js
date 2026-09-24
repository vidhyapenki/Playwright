import {test, expect} from "@playwright/test";

test('Keyboard Event', async ({page}) => {
    await page.goto('https://demoexample.com');
    //Type Text
    await page.keyboard.type('Hello World');

    await page.waitForTimeout(2000);
    //Press Key
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(2000);
    //Press Tab
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);
    //Press Shift + Tab
    await page.keyboard.down('Shift');
    await page.keyboard.press('Tab');
    await page.keyboard.up('Shift');
    await page.waitForTimeout(2000);
    //Arrow Keys    
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(2000);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(2000);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(2000);

    //Press control + c
    await page.keyboard.down('Control');
    await page.keyboard.press('KeyC');
    await page.keyboard.up('Control');
    await page.waitForTimeout(2000);

    //Press control + v
    await page.keyboard.press('Control+KeyV');
    await page.waitForTimeout(2000);

})