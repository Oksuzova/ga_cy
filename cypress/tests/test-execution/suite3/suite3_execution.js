const cypress = require('cypress');

const configFile = process.env.CONFIG_FILE || 'dev.config.js';
console.log(`Running Suite 3 with config: ${configFile}`);

cypress.run({
    config: {
        e2e: {
            specPattern: 'cypress/tests/test-suites/ui-tests/simple-tests/simple-test-3.cy.js'
        }
    },
    configFile: `cypress/configuration-files/${configFile}`
})
    .then((results) => {
        console.log('Suite 3 execution completed');
        process.exit(results.totalFailed > 0 ? 1 : 0);
    })
    .catch((err) => {
        console.error('Error executing tests:', err);
        process.exit(1);
    });