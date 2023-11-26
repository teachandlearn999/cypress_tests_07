/// <reference types='cypress' />

let people;

describe("Add user description", ()=>{

    it('Add user description', function() {
        cy.get('a[href="/asynchPeople/"]').click();
        cy.get('a[href="/user/admin/"]').click()
        cy.get('#description-link').click()
        cy.get('textarea[name="description"]').clear().type('Hello, user. This is my description.')
        cy.get('button[name ="Submit"]').click()
        cy.get('#description div:first-child').should('have.text', people.description)


    });
})
