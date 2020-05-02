describe('cypress test', function () {
    it('should create content in ul', function () {
        cy.visit('http://vuejs.test/index.html');
        cy.get('input[type=text]').type('test cypress');
        cy.get('#add').click();
        cy.get('ul').contains('test cypress');
    });
});