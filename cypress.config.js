const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:660,
  viewportWidth:1400,
  videosFolder:'cypress/failvideo',
  videoUploadOnPasses:false,
  screenshotOnRunFailure:true,
  screenshotsFolder:'cypress/failScreenshot',
    reporter:'mochawesome',
  reporterOptions:{
    "reportDir":"cypress/test-reports",
    "overwrite":true,
    "html":true
  },
  e2e: {
    env:{
      user: "test",
      password: "test"
    },
    setupNodeEvents(on, config) {
    },
    baseUrl:"https://www.demoblaze.com/"
  },
});
