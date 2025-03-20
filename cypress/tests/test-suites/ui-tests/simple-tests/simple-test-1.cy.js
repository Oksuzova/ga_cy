describe('Simple Test Suite 1', () => {
    it('always passes - basic assertions', () => {
        expect(true).to.equal(true);
    });

    it('always passes - with wait', () => {
        cy.wait(500);
        expect(5 > 3).to.be.true;
    });
});