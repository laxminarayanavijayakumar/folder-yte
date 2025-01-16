const { test , expect } = require('@playwright/test')

test("Verify file uploading" , async({page}) => {


    await page.goto("https://the-internet.herokuapp.com/upload")

    // await page.locator('[name="file"]').setInputFiles("/Users/Welcome/Desktop/I have to idea about my final year.txt");
    await page.locator('[name="file"]').setInputFiles(".vscode/upload_file/I have to idea about my final year.txt");
    await page.locator("#file-submit").click();

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")
    await page.pause();
})