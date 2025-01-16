const { test , expect } = require('@playwright/test')

test("Working With Multiple Tabs" , async ({browser}) =>{

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newpage] = await Promise.all
    (
        [
            (await context).waitForEvent("page"),
            page.locator('(//a[contains(@href,"www.facebook.com")])[1]').click()
        ]
    )
    await newpage.locator("(//input[@name='email'])[2]").fill("laxman")
    await newpage.waitForTimeout(3000);
    await newpage.close();
    
    await page.locator('#email1').fill('narayana')
    await page.waitForTimeout(3000);
})