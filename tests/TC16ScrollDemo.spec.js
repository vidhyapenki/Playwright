import {test, expect} from '@playwright/test';

test('Scroll Demo', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
    //scroll down the page
    
    //Scroll By Pixel
    await page.evaluate(() => {
        window.scrollBy(0, 1000);
    });

    //Scroll to the bottom of page
    await page.evaluate(() => { 
        window.scrollTo(0, document.body.scrollHeight);
    }); 
    
    //Scroll to the element view

    // await page.locator('text=Infinite Scroll').scrollIntoViewIfNeeded();
    


    // //Using Mouse Wheel
    // await page.mouse.wheel(0,500);

    //await page.mouse.wheel()


});