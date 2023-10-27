/// <reference types="cypress" />

describe("testTimeZone", () => {

    it("Check User Time Zone", () => {
        cy.get('button[data-href*="admin"]').click({ force: true })
        cy.get('#jenkins').find('#tippy-2').then(($el) => {
            if($el.length){
                cy.get('a[href="/user/admin/configure"]').click()
            } else {
                expect(false).to.be.false
            }
        })
        cy.get('select[name="_.timeZoneName"]').select('America/Puerto_Rico')
        cy.get('button[name="Submit"]').click()
        cy.get('a[href="/user/admin/configure"]').click()
        cy.get('select[name="_.timeZoneName"]').should('have.attr', 'value').should('include','America/Puerto_Rico')
       
    })

    it("Default User Time Zone", () => {
        cy.get('a[href="/user/admin"]').click()
        cy.get('a[href="/user/admin/configure"]').click()
        cy.get('select[name="_.timeZoneName"]').select('Default')
        cy.get('button[name="Submit"]').click()
        cy.get('a[href="/user/admin/configure"]').click()
        cy.get('select[name="_.timeZoneName"]').should('have.attr', 'value').should('include','')
    })
});