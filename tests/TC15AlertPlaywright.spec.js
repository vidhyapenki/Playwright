import {test, expect} from '@playwright/test';
test.describe('Alert Handling', ()=>{

    test(' Alert - 1 - Click for JS Alert ', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Alert');
            console.log(dialog.message());
            await dialog.accept();
        });
        
        await page.click('text=Click for JS Alert');
        await page.waitForTimeout(5000)

        expect(await page.locator('#result').textContent()).toBe('You successfully clicked an alert');
})

    test(' Alert - 2 - Click for JS Confirm - Cancel Button ', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await page.click('text=Click for JS Confirm');
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Confirm');
            console.log(dialog.message());
            await dialog.dismiss();
        });

        await page.waitForTimeout(5000)
        expect(await page.locator('#result').textContent()).toBe('You clicked: Cancel');
    })
    
    test(' Alert - 3 - Click for JS Confirm - OK Button ', async ({page})=>{
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await page.click('text=Click for JS Confirm');
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS Confirm');
            console.log(dialog.message());
            await dialog.accept();
        })
        await page.waitForTimeout(5000)
        expect(await page.locator('#result').textContent()).toBe('You clicked: Ok');

    })

    test(' Alert - 4 - Click for JS Prompt - Cancel Button ', async ({page})=>{

        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        await page.click('text=Click for JS Prompt');       
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS prompt');
            console.log(dialog.message());
            await dialog.dismiss();
        })
        await page.waitForTimeout(5000)
        expect(await page.locator('#result').textContent()).toBe('You entered: null');
    })

    test(' Alert - 5 - Click for JS Prompt - OK Button ', async ({page})=>{ 
        
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('I am a JS prompt');
            console.log(dialog.message());
            await dialog.accept('Playwright Demo');
        })

        await page.click('text=Click for JS Prompt');

        await page.waitForTimeout(5000)
        expect(await page.locator('#result').textContent()).toBe('You entered: Playwright Demo');
    })   

})

//page.locator("te").click()
//page.getByRole("Role").click()
//page.click('text=Click for JS Alert')
