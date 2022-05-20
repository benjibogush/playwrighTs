import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {


    testDir: 'tests',
    use: {
        viewport: null,
        headless: true,
        browserName: "chromium",
        //screenshot: "on",
        // video: "on",
        // trace: "on",
        //baseURL: "https://benjismvplayer.benjibogush.repl.co/",

        launchOptions: {
            args: ["--start-maximized"],
            logger: {
                isEnabled: (name, severity) => true,
                log: (name, severity, message, args) => console.log(name, severity)
            }
        }
    },
    testMatch: ['destructure.ts'],

    //or runn all ts tests
    // testMatch: ["*.ts"],

    // run certain tests - like spec tests
    // testMatch: ["*.spec.ts"],


    retries: 1,
    // timeout: 60000,


    // reporter: "./customReport/myReporter.ts"
    reporter: [
        ["dot"], // -> console
        ["json", {
            outputFile: "playwright-report/json-report/results.json"
        
        }], //  -> JSON
        
        ['html', {
            open: "never",
            outputFolder: 'playwright-report/html-report'
        }] // -> HTML
    ],
    // globalTeardown: './helper/globalsetup.ts'

}
export default config;