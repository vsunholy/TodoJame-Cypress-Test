/// <reference types="cypress" />
beforeEach(() => {
    cy.visit('https://todolist.james.am/#/');
});

it('Ar informacija issisaugoja po puslapio persikrovimo', () => {
    cy.setCookie('test','1');
    cy.setCookie('test2','test2');
    cy.setCookie('test3', '{"test3": "test3"}');
    cy.reload();
    cy.getAllCookies().should('exist');
});

it('sessija', ()=> {
    cy.session('sesija' , () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('Pirmas uzduotis{enter}');
        cy.setCookie('test','1');
    });
    cy.visit('https://todolist.james.am/#/');
})