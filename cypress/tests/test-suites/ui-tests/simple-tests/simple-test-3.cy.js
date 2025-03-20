describe('Simple Test Suite 3', () => {
    it('always passes - using Cypress commands', () => {
        cy.wrap(true).should('be.true');
        cy.wrap('hello').should('be.a', 'string');
    });

    it('always passes - environment check', () => {
        cy.task('log', `Running in ${Cypress.env('environment')} environment`);
        expect(Cypress.env('environment')).to.be.a('string');
    });
});