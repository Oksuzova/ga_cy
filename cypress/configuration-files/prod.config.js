const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
        },
        baseUrl: null,
        supportFile: 'cypress/support/e2e.js',
    },
    env: {
        environment: "prod",
        api_url: "https://api.example.com",
        login_user: "prod-user@example.com",
        login_password: "ProdPassword123",
        app_token: "prod-token-123456",
        service_id: "789",
        service_name: "Prod Service",
    }
});