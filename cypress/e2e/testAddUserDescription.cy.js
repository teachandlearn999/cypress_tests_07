/// <reference types="cypress" />
let people;
describe("testAddUserDescription", () => {

    beforeEach(function() {
        cy.fixture('users.json').then(function(data) {
            people = data.users
        });
        cy.visit("http://localhost:8080/login?from=%2F");
        cy.get("#j_username").type("admin");
        cy.get('input[name="j_password"]').type("password");
        cy.get('button[name="Submit"]').click();
    });

    it("addUserDescription test", function() {
        cy.get('a[href="/asynchPeople/"]').click();
        cy.get(`a[href="/user/${people.userId}/"]`).click();
        cy.get('#description-link').click();
        cy.get('textarea[name="description"]').clear().type(people.description);
        cy.get('form button[name="Submit"]').click();
        cy.get('#description div:first-child').should('have.text', people.description);
    });
});