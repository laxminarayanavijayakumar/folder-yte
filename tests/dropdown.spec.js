const { test , expect } = require('@playwright/test')

test("Select Values From Dropdown" , async function ({page}) {

    await page.goto('https://freelance-learn-automation.vercel.app/signup')

    await page.locator("#state").selectOption({label:"Puducherry"})
    await page.waitForTimeout(2000);
    await page.locator("#state").selectOption({value:"Tamil Nadu"})
    await page.waitForTimeout(4000);
    await page.locator("#state").selectOption({index:13})
    await page.waitForTimeout(6000);

    const values = await page.locator("#state").textContent()
    console.log("All Dropdown Values" + values);
    await expect(values.includes("Goa")).toBeTruthy();

    let state = await page.$("#state")
    let allelement = await state.$$("option")
    let ddstatus = false

    for(let i=0; i<allelement.length; i++)
    {
        let element = allelement[i]
        let value = await element.textContent()
        if(value.includes("Tamil Nadu"))
        {
            ddstatus = true
            break
        }
        console.log("Value from dropdown using for loop " + value);
    }
    await expect(ddstatus).toBeTruthy();


    await page.locator("#hobbies").selectOption(['Playing' , 'Swimming'])
    await page.waitForTimeout(3000);
})