const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
        },
        baseUrl: null,
        supportFile: false,
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
});