describe('cypress test', function () {
    it('should create content in ul', function () {
        cy.visit('http://vuejs.test/index.html');
        cy.get('[name="showTodo"]').trigger('click');
        cy.get('.todo').filter(':visible')
            // .should('be.visible')
            .should('to.have.length', 1)
            .as('firstTodo')
        ;
        // cy.wait('@firstTodo');
        cy.get('@firstTodo').find('input[type=text]').type('test cypress');
        cy.get('#add').click();
        cy.get('ul').contains('test cypress');
    });
});