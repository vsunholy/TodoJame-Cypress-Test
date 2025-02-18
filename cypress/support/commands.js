// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
 
 // Declare globally

 Cypress.Commands.add('AddToDos', (sessionName, hatePersons) => {
    cy.session(sessionName, () => {
        cy.visit('https://todolist.james.am/#/');
        
        hatePersons.forEach(villain => {
            cy.get('input.new-todo').type(`${villain}{enter}`);
        });
    });

    cy.log('All ToDos added');
});

    



// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })