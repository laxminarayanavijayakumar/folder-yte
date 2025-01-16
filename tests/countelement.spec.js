const { test , expect } = require('@playwright/test')

test("Working With load State" , async ({page}) =>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator('[class="subLink"]').click();
    await page.waitForLoadState("networkidle")
    const nofclickbox = await page.locator('[type="checkbox"]').count();
    expect(nofclickbox).toBe(9)
})