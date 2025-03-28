import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureCypress(on, config, {
                resultsDir: "allure-results",
            });
            return config;
        },
        baseUrl: null,
        supportFile: false,
    },
    env: {
        allure: true,
        allureReuseAfterSpec: true,
        environment: 'testing'
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
});