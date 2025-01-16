const { test , expect } = require('@playwright/test')

test("mouse hover" , async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").type("admin@email.com" , {delay:200})
    await page.getByPlaceholder("Enter Password").type("admin@123" , {delay:250})

    await page.getByRole("button" , {name:"Sign in"}).click();

    await page.locator('//span[text() = "Manage"]').hover({force:true})
    await page.waitForTimeout(2000);
    await page.locator('//a[text() = "Manage Courses"]').click();
    await page.waitForTimeout(4000);
    
})