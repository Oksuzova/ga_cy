const { defineConfig } = require("cypress");
const {allureCypress} = require("allure-cypress/reporter");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
    e2e: {
        baseUrl: null,
        specPattern: "cypress/tests/test-suites/**/*.cy.js",
        video: false,
        viewportWidth: 1280,
        viewportHeight: 720,
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message);
                    return null;
                }
            });
            allureCypress(on, config, {
                resultsDir: "allure-results",
            });
            allureWriter(on, config);
            return config;
        },
        env: {
            allure: true,
            allureReuseAfterSpec: true,
            environment: 'testing'
        }
    },
});