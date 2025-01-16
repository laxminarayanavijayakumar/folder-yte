const{test , expect} = require('@playwright/test')

test('verify webapplication title' , async function ({page}) {

    await page.goto('https://www.google.com/')

    const url = await page.url()
    console.log("Url is "+url)

    const title = await page.title()
    console.log("Title is "+title)

    await expect(page).toHaveTitle("Google")
})