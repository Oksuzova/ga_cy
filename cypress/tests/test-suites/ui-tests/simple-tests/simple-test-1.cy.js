import * as allure from "allure-js-commons";

describe('Simple Test Suite 1', () => {
    it('always passes - basic assertions', () => {
        expect(true).to.equal(true);
    });

    it('always passes - with wait', () => {
        allure.step("Wait for 500ms and assert", () => {
            cy.wait(500);
            expect(5 > 6).to.be.true;
        });
    });
});