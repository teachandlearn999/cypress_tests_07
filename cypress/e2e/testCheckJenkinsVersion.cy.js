/// <reference types="cypress" />

describe('Footer menu', () => {
    
    it('Checking Jenkins version', () => {
        cy.get('.jenkins_ver').click()
        cy.get('a[href = "/manage/about"]').click()
        cy.url().should('eq', 'http://localhost:8080/manage/about/')
        cy.get('.app-about-version').should('contain', 'Version 2.414.2')
    })

    it('Checking REST API', () => {
        cy.get('.rest-api').click()
        cy.url().should('eq', 'http://localhost:8080/api/')
        cy.get('h1').should('contain', 'REST')
    })
    // http://localhost:8080/api/

})