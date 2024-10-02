# How to Run Playwright tests

Below you can find fairly short instructions for running the playwright tests locally.
Do note that this framework can be used for any environment and is not tied to local app.

## Pre-requisites

1. Install VS Code - https://code.visualstudio.com/download
2. Install Playwright - https://playwright.dev/docs/intro

## Framework structure
* /cltodo directory is used as project folder
    * /main directory is used to store POMs and utils
        * /pages directory is where you can find all the defined POM files
        * /utils directory is where you can find util class for various helpful declarations to keep the tests tidy
    * /tests directory is where you can find all the test classes
* decorators.ts class is used for decorators and fixtures

## Setting the environment

* To run on local environment:
1. Run your application locally
2. Go to /cltodo/main/utils/utils.ts
3. Change the LOCAL_URL variable to your local URL

* To run on live website:
    1. Run your application locally
    2. Go to /cltodo/main/utils/utils.ts
    3. Change the LOCAL_URL variable with the live website URL

## Running tests and checking results

* Running tests in terminal:
    1. Open the test project in VS Code ( and make sure all pre-requisites are installed)
    2. Open terminal and type: npx playwright tests
        * note that this command will run all tests, if you want to run individual test classes use: npx playwright test <testclass>.ts
    3. To run tests in debug mode simply add --debug to the end of the run tests command line

* Running individual tests via VSCode UI:
    1. Open the test file
    2. Hover over the left side of the line of code numbers until a green arrow is shown
    3. Click on the green arrow
    4. To run in debug mode right click the arrow and select debug mode
