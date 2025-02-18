describe('Todo James Tests with Session', () => {

    const hatePersons = ['ChristmasTree', 'Filosofas', 'In search'];

    beforeEach(() => {
        cy.visit('https://todolist.james.am/#/');
        cy.AddToDos('sessionName', hatePersons);
        cy.visit('https://todolist.james.am/#/');

    });

    it('When adding multiple todos, the list is not empty and visible', () => {
        cy.wait(2000);

        cy.get('ul.todo-list li')
            .should('have.length', hatePersons.length)
            .each(($hater) => {
                cy.wrap($hater).should('be.visible').dblclick();
            });
    });

    it('Delete a ToDo', () => {

        cy.contains('In search')
            .parent()
            .find('button.destroy')
            .invoke('show')
            .click();

        cy.contains('ul.todo-list li', 'In search').should('not.exist');
        cy.contains('ul.todo-list li', 'Filosofas').should('exist');
    });

    it('Edit a ToDo', () => {


        cy.contains('ul.todo-list li', 'Filosofas')
            .dblclick()
            .find('input.edit')
            .clear()
            .type('redaguota uzduotis{enter}')
            .should('exist');


    });

});

describe('Todo James Tests without Session', () => {
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
        cy.get('input.new-todo').type('New Todo{enter}');

        cy.contains('ul.todo-list li', 'New Todo')
            .dblclick()
            .find('input.edit')
            .should('be.visible');
    });

    it('Should display text "Double-click to edit a todo"', () => {
        cy.get('.info p').should('be.visible');
    });

    it('Does the input show "What needs to be done?" text', () => {
        cy.get('input.new-todo').should('have.attr', 'placeholder', "What need's to be done?");
    });
});










