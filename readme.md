## Necessary tools
> Download VSCode and install: https://code.visualstudio.com/download

> Download Node latest stable version: 
https://nodejs.org/en/download/
>> Current Latest LTS Version: 16.15.0 (includes npm 8.5.5)

### Open VsCode and inside desktop or preferred location, create a new folder: playwrightTest

### Open the folder as a project in VsCode,

### Next, create a folder inside the project: tests
> configuration looks at "tests" folder

### for starters, I hate node_modules size and file count, which is why I download dependencies as development mode only: --save-dev

### you can optionally use -g tag to download them as global but be very careful about loading millions of files that could crash your machine =D

### for production, --save-dev is not ideal, fyi!

### install playwright test to use in your automation tests.
> npm i @playwright/test --save-dev

### Open PACKAGE.JSON, Copy and paste the rest of dependencies below inside dev-dependecies
```
"devDependencies": {
    "@types/node": "^17.0.35",
    "@types/nodemailer": "^6.4.4",
    "adm-zip": "^0.5.9",
    "clipboardy": "^2.3.0",
    "experimental-allure-playwright": "0.0.3",
    "nodemailer": "^6.6.3",
    "tesseract.js": "^2.1.5",
    "ts-node": "10.0.0",
    "typescript": "4.3.2"
  }
```
### versions may change in the future, check ```https://www.npmjs.com/``` to see current versions. You can also learn why these tools are used in the same website.

### load environment vars via process.env but first install dotenv
## to load all env variables but you do not have to use it, optional.
> npm i dotenv --save-dev

### see config ts for more information on how to run a single test 
or
### how to run some of the tests like spec files
or
### how to run all the tests

### you will also see headless is set to true of false

# also report is generated, see config.ts and playwright-report automatically generated.

### how to run your tests
> npx run action

### see config.ts file, action script.
### then see testMatch in the config file.

if testMatch equals to single file name, 


# To open last HTML report run:

  npx playwright show-report

