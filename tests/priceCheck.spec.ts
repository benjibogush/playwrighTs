const url = "https://www.amazon.com/Segway-Robotics-S1RC340-Loomo-Dev/dp/B071K61RPD/ref=sr_1_5?crid=2NVOAUUPIRHN2&keywords=segway+loomo+robot&qid=1652970232&sprefix=segway+loomo%2Caps%2C89&sr=8-5";

import { test } from "@playwright/test";

// const  auth = require("utils/auth.json")

const nodemailer = require("nodemailer");
test("Amazon Price Drop Notification", async ({ page }) => {

    // Navigate to the Amazon product page
    await page.goto(url);
    // get the price of the product 
    const price = await page.$eval(".priceToPay .a-offscreen", el => el.textContent);
    // remove the currency symbol and the comma from the price
    const currentPrice = price?.replace("$", '').split(".")[0];
    console.log(currentPrice);
    // send the email using nodemailer
    sendEmailNotification(currentPrice);
    if (Number(currentPrice) < 1000) {
    }

})

function sendEmailNotification(currentPrice: string | undefined ) {
    // github environment variables
    const { user,  pass } = process.env;
    // console.log(user, pass);
    // create a transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass
        }
    });
    transporter.sendMail({
        from: user,
        to: 'beehabtest0@gmail.com',
        subject: 'Amazon Price Drop Notification',
        html: `<p>The price of the product has dropped to ${currentPrice}</p><a href="${url}">click to open</a>`
    }, (err: any, info: any) => {
        if (err) {
            console.error(err);
        } else {
            console.log(info);
        }
    });
}
