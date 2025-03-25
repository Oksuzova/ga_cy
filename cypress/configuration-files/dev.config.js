import {defineConfig} from "cypress";

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {

        },
        baseUrl: null,
        supportFile: 'cypress/support/e2e.js',
    },
    env: {
        environment: "dev",
        api_url: "https://api-dev.example.com",
        login_user: "dev-user@example.com",
        login_password: "DevPassword123",
        app_token: "dev-token-123456",
        service_id: "456",
        service_name: "Dev Service",
    }
});