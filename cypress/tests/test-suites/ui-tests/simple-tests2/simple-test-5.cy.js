describe('Simple Test Suite 5', () => {
    it('always passes - working with objects', () => {
        const testObject = { name: 'test', value: 123 };
        expect(testObject).to.have.property('name');
    });

    it('always passes - working with arrays', () => {
        const testArray = [1, 2, 3];
        expect(testArray).to.have.length(3);
    });
});