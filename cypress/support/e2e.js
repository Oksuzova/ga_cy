import '@shelex/cypress-allure-plugin';

beforeEach(function() {
    try {
        const filePath = Cypress.spec.relative;
        let suiteFolder = 'unknown';

        if (filePath && filePath.includes('/')) {
            suiteFolder = filePath.split('/').slice(-2)[0];
        }

        cy.allure()
            .epic(suiteFolder)
            .feature(this.currentTest.parent.title)
            .story(`${this.currentTest.parent.title} [${suiteFolder}]`);
    } catch (e) {
        console.error('Error setting Allure labels:', e);
    }
});