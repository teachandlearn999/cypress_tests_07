/// <reference types="cypress" />
import logInPage from "../fixtures/loginPage.json"

describe('Header: verify that Logout button clickable and redirected to login page', () => {
    it('Verify logout', () => {
        cy.get('a[href="/logout"]')
            .should('exist')
            .and('have.text','log out').click()
        cy.url().should('contain', 'http://localhost:8080/login')
        cy.get('#loginIntroDefault').should('have.text', logInPage.loginPageHeader)
    })
})




