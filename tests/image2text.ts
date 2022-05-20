import { test } from "@playwright/test";
const Tesseract = require('tesseract.js');

test("Tesseract - Image to text", async ({ page }) => {

    await page.goto("https://www.amazon.com/");
    await page.waitForSelector('#nav-logo-sprites');
    
    // await page.click('#best_deal_div >> text=X', { force: true, delay: 2000 });
    const images = await page.$$("#nav-logo-sprites");
    for await (let img of images) {
        const name = Date.now();
        await img.screenshot({ path: `${name}.png`});
        await convertToText(`${name}.png`)
    }
});

async function convertToText(name: string) {
    let imgText = await Tesseract.recognize(
        `./${name}`);
    console.log(imgText.data.text);
}