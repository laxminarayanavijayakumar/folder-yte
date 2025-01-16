const { test , expect } = require('@playwright/test')

test("Keyboard Event In Playwright" , async ({page}) =>{

    await page.goto("https://www.google.co.in/");

    // await page.locator('[name="q"]').type("laxminarayana" , {delay:200});
    // await page.keyboard.press("Enter");
    await page.locator('[name="q"]').focus()
    await page.keyboard.type("laxmi narayana" , {delay:100})

    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    for(let i=0; i<8; i++)
    {
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.waitForTimeout(3000);
    await page.keyboard.press("Backspace")

    // await page.keyboard.press("Control+A")
    // await page.waitForTimeout(3000);
    // await page.keyboard.press("Control+C")
    // await page.waitForTimeout(3000);
    // await page.keyboard.press("Control+V")
    // await page.waitForTimeout(3000);
    // await page.keyboard.press("Backspace")

    await page.pause();
})