/// <reference types="cypress" />
describe("testFormValidation", () => {


    it("show when username is blank validation error", function() {
        cy.get('div:nth-child(4) > span > a').click();
        cy.get('a[href="securityRealm/"]').click()
        cy.get('div#page-body a[href="addUser"]').click()
        //  // do not fill username
        
        cy.get('div.form-content input[name="username"]').clear().should('be.empty')
        cy.get('input[name="password1"]').type('1234')
        cy.get('input[name="password2"]').type('1234')
        cy.get('input[name="fullname"]').type('FName')
        cy.get('input[name="email"]').type('qa@qa.com')
        cy.get('button[name="Submit"]').click()
        cy.get('.error')
        .should('be.visible')
        .and('contain', 'is prohibited as a username for security reasons.')
    });
})

