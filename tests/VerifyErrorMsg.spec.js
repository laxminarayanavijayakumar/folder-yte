const { test , expect } = require ('@playwright/test')

test("Verify Error messages" , async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('Username').type('Admin' , {delay:300})
    await page.getByPlaceholder('Password').type('admin121' , {delay:250})
    await page.click('//button[@type="submit"]')

    const errormsg = await page.locator('//p[contains(@class,"alert-content-text")]').textContent()
    console.log("Error message is "+errormsg)

    expect(errormsg.includes("Invalid")).toBeTruthy()
    expect(errormsg==="Invalid credentials").toBeTruthy()
    
})