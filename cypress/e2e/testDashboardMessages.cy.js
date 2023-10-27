/// <reference types="cypress" />

describe("Dashboard Messages", () => {
 
    it("Dashboard System Message", () => {
        cy.get('a[href="/manage"]').click();
        cy.get('a[href="configure"]').click();
        cy.get('textarea[name="system_message"]').clear().type("Hello QA");
        cy.get('button[name="Submit"]').click();
        cy.get('#systemmessage').should('have.text', "Hello QA");
    });

    it("Dashboard Edit Description", () => {
        cy.get('#description-link').click();
        cy.get('textarea[name="description"]').clear().type("Hello RedRover");
        cy.get('button[name="Submit"]').click();
        cy.get('#description div:first-child').should('have.text', "Hello RedRover");
    });

    it("Clear Data", () => {
        cy.get('a[href="/manage"]').click();
        cy.get('a[href="configure"]').click();
        cy.get('textarea[name="system_message"]').clear();
        cy.get('button[name="Submit"]').click();

        cy.get('#description-link').click();
        cy.get('textarea[name="description"]').clear();
        cy.get('button[name="Submit"]').click();        
    });
});