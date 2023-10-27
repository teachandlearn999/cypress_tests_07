/// <reference types="cypress" />
import configurePage from "../fixtures/configurePage.json"

describe('', () => {

    it('', ()=> {
        cy.get('a[href="/user/admin"]').click()
        cy.get('a[href="/user/admin/configure"]').click()
        cy.get('[checkdependson ="timeZoneName"]').select(configurePage.timeZone)
        cy.get('.jenkins-button--primary').click()
        cy.get('a[href="/user/admin/configure"]').click()
        
        cy.get('.validated.select').should('have.text', configurePage.timeZone)
    })
})
