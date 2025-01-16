const { test , expect } = require('@playwright/test')

test("Verify Application Title" , async ({page})=>{

    await page.goto("https://www.google.co.in/");

    await page.locator('[name="q"]').type("ps5" , {delay:100})
    await page.waitForSelector('//li[@role = "presentation"]')
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(2000);
    await page.keyboard.press("ArrowDown")
    await page.waitForTimeout(2000);
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000);

})

test.only("Verify Application Title using loop" , async ({page})=>{

    await page.goto("https://www.google.co.in/");

    await page.locator('[name="q"]').type("ps5" , {delay:200})
    await page.waitForTimeout(2000);
    await page.waitForSelector('//li[@role = "presentation"]')
    await page.waitForTimeout(2000);
    const element = await page.$$('//li[@role = "presentation"]')
    await page.waitForTimeout(2000);
    for(let i=0; i<element.length; i++)
    {
        const text = await element[i].textContent()
        if(text.includes("games"))
        {
            await element[i].click();
            break
        }
    }
    await page.waitForTimeout(2000);

})