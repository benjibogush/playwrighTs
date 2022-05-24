import { expect, test } from "@playwright/test";

test('test page title of google', async ({ page }) => {
    await page.goto('https://www.google.com/')

    expect(page.url()).toBe("https://www.google.com/")

   
    const pageTitle = await page.title()

    expect (pageTitle).toBe("Google")


})


test('text box test', async({page}) => {
    
})