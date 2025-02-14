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
    it('Should display text "Double-click to edit a todo"', () => {
        cy.get('.info p').should('be.visible');
    })


    it('Does the input show "What needs to be done?" text', () => {
        cy.get('input.new-todo').should('have.attr', 'placeholder', "What need's to be done?")


    });
    it('When adding multiple todos, the list is not empty and visible', () => {
        const todos = ['New Todo', 'New Todo2', 'New Todo3'];
    
        todos.forEach(todo => {
            cy.get('input.new-todo').type(`${todo}{enter}`);
        });
    
        cy.get('ul.todo-list li')
            .should('have.length', todos.length)
            .each(($el) => {
                cy.wrap($el).should('be.visible');
            });
    });
    
});










