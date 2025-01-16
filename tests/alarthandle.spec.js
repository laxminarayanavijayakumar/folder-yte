const { test , expect } = require("@playwright/test")

test("Handling Alart" , async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog' , async(d) =>{
        expect(d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept();
    })

    await page.locator('[onclick="jsAlert()"]').click();
    const alartresult = await page.locator('#result').textContent();
    console.log("Result : " + alartresult);
    expect(alartresult.includes("clicked an alert")).toBeTruthy();
    await page.waitForTimeout(5000);
})

test("Handling Conform Alart In Accepted" , async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog' , async(d) =>{
        expect(d.type()).toContain("confirm")
        expect(d.message()).toContain("I am a JS Confirm")
        await d.accept();
    })

    await page.locator('[onclick="jsConfirm()"]').click();
    const confirmresult = await page.locator('#result').textContent();
    console.log("Result : " + confirmresult);
    expect(confirmresult.includes("Ok")).toBeTruthy();
    await page.waitForTimeout(5000);
})

test("Handling Conform Alart In Dismised" , async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog' , async(d) =>{
        expect(d.type()).toContain("confirm")
        expect(d.message()).toContain("I am a JS Confirm")
        await d.dismiss();
    })

    await page.locator('[onclick="jsConfirm()"]').click();
    const result = await page.locator('#result').textContent();
    console.log("Result : " + result);
    expect(result.includes("Cancel")).toBeTruthy();
    await page.waitForTimeout(5000);
})

test("Handling Prompt Alart In Accepted" , async ({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog' , async(d) =>{
        expect(d.type()).toContain("prompt")
        expect(d.message()).toContain("I am a JS prompt")
        await d.accept("laxminarayana" , {delay:200});
    })
    await page.waitForTimeout(2000);

    await page.locator('[onclick="jsPrompt()"]').click();
    const promptresult = await page.locator('#result').textContent();
    console.log("Result : " + promptresult);
    await expect(promptresult).toContain("laxmi");
    await page.waitForTimeout(5000);
})