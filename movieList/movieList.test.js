// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const { By } = require('selenium-webdriver')

const {addMovie, crossOffMovie, deleteMovie} = require("./movieList")

// const {crossOffMovie, deleteMovie} = require("./index")
// const {searchBar} = require('./searchBar.js')
// First we're going to navigate to Google.com

jest.setTimeout(30000)


beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5501/movieList/')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await (await driver).quit()
})

// This test will require you to change some values in order to get your tests up and running
// You'll want to change each of the commented out pieces below

test("Testing Movie List website", async () => {
    await addMovie(driver)    
    await driver.sleep(3000)
   
})


test("Testing Movie List website", async () => {
    
    await deleteMovie(driver);
    await driver.sleep(3000)
})