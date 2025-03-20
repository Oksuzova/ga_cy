const { defineConfig } = require("cypress");

module.exports = defineConfig({
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
    e2e: {
        baseUrl: "https://example.com",
        specPattern: "cypress/tests/test-suites/**/*.cy.js",
        video: false,
        viewportWidth: 1280,
        viewportHeight: 720,
        setupNodeEvents(on, config) {
            on("task", {
                log(message) {
                    console.log(message);
                    return null;
                }
            });
        },
        env: {
            environment: 'testing'
        }
    },
});