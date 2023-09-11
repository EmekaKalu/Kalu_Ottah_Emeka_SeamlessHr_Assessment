const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  env: {
    "baseUrl" : "https://opensource-demo.orangehrmlive.com/"
  },
  e2e: {
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
