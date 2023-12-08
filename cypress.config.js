const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    mode: "testops",
    screenshotFolder: 'screenshots',
    videoFolder: 'videos',
    logging: true,
    sendScreenshot: true,
    runComplete: true
  },
});
