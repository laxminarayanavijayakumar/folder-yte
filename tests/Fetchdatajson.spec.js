const { test , expect } = require('@playwright/test')
const jsondata = JSON.parse(JSON.stringify(require("../BDDdata.json")))


test.describe("Data Driven Login Test" , function()
{
    for(const data of jsondata)
    {
        test.describe(`Login with users ${data.id}` , function()
        {
            test('login To Application' , async ({page}) =>{

                await page.goto("https://freelance-learn-automation.vercel.app/login")

                await page.locator('#email1').fill(data.username)
                await page.locator('#password1').fill(data.password)
                // await page.pause();
            })
            
        })
    }
    
})


test.skip("Fetch the data to json for login" , async({page}) =>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator('#email1').fill(jsondata.username)
    await page.locator('#password1').fill(jsondata.password)
    await page.pause();
})

// test.skip("Fetch the data to json signup" , async({page}) =>{

//     await page.goto("https://freelance-learn-automation.vercel.app/login")

//     await page.locator('').fill()
//     await page.locator('#email1').fill(jsondata.username)
//     await page.locator('#password1').fill(jsondata.password)
//     await page.click('[type="submit"]')
// })