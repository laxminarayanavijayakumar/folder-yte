const { test , expect } = require('@playwright/test')

test.use({viewport:{width:778 ,height:651}})

test("Valid Login" , async function({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.getByPlaceholder('Username').type('Admin' , {delay:200})
    await page.getByPlaceholder('Password').type('admin123' , {delay:250})
    await page.click('//button[@type="submit"]')

    await expect(page).toHaveURL(/dashboard/);
    await page.getByAltText('profile picture').first().click()

    await page.getByText('Logout').click()
    await expect(page).toHaveURL(/login/)
    
})