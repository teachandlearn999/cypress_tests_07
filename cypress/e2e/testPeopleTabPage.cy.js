// <reference types="cypress"/>

describe.only("People- Tab and page", () => {
  
    it("Verify  People : tab and page", () => {
      cy.get("a.task-link").eq(1).should("contain", "People")
        .click();
      cy.url().should('includes','/asynchPeople/')
      cy.get('[tooltip="Large"]').click()
    })
})
  