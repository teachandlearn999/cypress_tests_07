/// <reference types="cypress" />

describe("Cypress_Tests_07_logo", () => {

    it("Checking Logo", () => {
        cy.get("#jenkins-name-icon").should("have.attr", "src").should("include", "title.svg");
    });
});