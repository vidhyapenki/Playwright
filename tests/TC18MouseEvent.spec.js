import {test, expect} from "@playwright/test";
test('Mouse Event', async ({page}) => {
    await page.goto('https://demoexample.com');
    // Mouse Move
    await page.mouse.move(100, 100);
    await page.waitForTimeout(2000);
    // Left Click
    await page.mouse.click(100, 100);
    await page.waitForTimeout(2000);    
    
    // Right Click
    await page.mouse.click(100, 100, {button: 'right'});
    await page.waitForTimeout(2000);
    // Middle Click
    await page.mouse.click(100, 100, {button: 'middle'});
    await page.waitForTimeout(2000);
    //Double Click  

    await page.mouse.dblclick(100, 100);
    await page.waitForTimeout(2000);

    //Mouse Down
    await page.mouse.down();
    await page.waitForTimeout(2000);

    //Mouse Up
    await page.mouse.up();      
    await page.waitForTimeout(2000);

    //Move Mouse With Steps
    await page.mouse.move(200, 200, {steps: 10});
    await page.waitForTimeout(2000);

    // mouse down by wheel
    await page.mouse.wheel(0, 100);
    await page.waitForTimeout(2000);

    //mouse up by wheel
    await page.mouse.wheel(0, -100);
    await page.waitForTimeout(2000);
})
