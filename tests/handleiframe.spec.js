const { test , expect } = require('@playwright/test')

test("Handling Iframes" , async ({page}) =>{

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    const iframe = await page.frameLocator('[title="All Packages"]')
    await iframe.locator('(//a[text()="java.applet"])[1]').click();
    await page.pause();
})