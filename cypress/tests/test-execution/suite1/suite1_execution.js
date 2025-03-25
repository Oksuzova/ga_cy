import cypress from "cypress";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configFile = process.env.CONFIG_FILE || 'default.config.js';

cypress.run({
    config: {
        e2e: {
            specPattern: 'cypress/tests/test-suites/ui-tests/simple-tests/simple-test-1.cy.js'
        }
    },
    configFile: `cypress/configuration-files/${configFile}`
})
    .then((results) => {
        console.log('Suite 1 execution completed');
        process.exit(results.totalFailed > 0 ? 1 : 0);
    })
    .catch((err) => {
        console.error('Error executing tests:', err);
        process.exit(1);
    });