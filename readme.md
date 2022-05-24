## Necessary tools
> Download VSCode and install: https://code.visualstudio.com/download

> Download Node latest stable version: 
https://nodejs.org/en/download/
>> Current Latest LTS Version: 16.15.0 (includes npm 8.5.5)

### Open VsCode and inside desktop or preferred location, create a new folder: playwrightTest

### Open the folder as a project in VsCode,

### for starters, I hate node_modules size and file count, which is why I download dependencies as development mode only: --save-dev

### you can optionally use -g tag to download them as global but be very careful about loading millions of files that could crash your machine =D

### for production, --save-dev is not ideal, fyi!

### install playwright test to use in your automation tests.
> npm i @playwright/test --save-dev

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



# To open last HTML report run:

  npx playwright show-report

