describe('Todo James Tests', () => {

    beforeEach(() => {
        cy.visit('https://todolist.james.am/#/');
    });

    it('should display the header', () => {
        cy.get('.header').should('be.visible');
    });

    it('should contain "To Do List" in the header', () => {
        cy.get('.header').should('contain.text', 'To Do List');
    });

    it('should display text after double click to edit', () => {
        cy.get('input.new-todo').type('New Todo{enter}')


        cy.contains('ul.todo-list li', 'New Todo')
            .dblclick()
            .find('input.edit')
            .should('be.visible')
    })

    it('Does the input show "What needs to be done?" text', () => {
        cy.get('input.new-todo').should('have.attr', 'placeholder', "What need's to be done?")


    });
    it('When add multiple todos,  list is not empty and visible', () => {
        cy.get('input.new-todo').type('New Todo{enter}')
        cy.get('input.new-todo').type('New Todo2{enter}')
        cy.get('input.new-todo').type('New Todo3{enter}')
        cy.get('ul.todo-list li').should('have.length', 3)
        .should('be.visible');
    });
});










