/// <reference types='cypress' />

let people;

describe("Add user description", ()=>{

    beforeEach(function (){
        cy.fixture('users.json').then(function(data){
            people = data.users
        });
        cy.visit('http://localhost:8080/login?from=%2F')
        cy.get("#j_username").type("admin")
        cy.get("#j_password").type("password")
        cy.get("button[name='Submit']").click()
    })

    it('Add user description', function() {
        cy.get('a[href="/asynchPeople/"]').click();
        cy.get('a[href="/user/admin/"]').click()
        cy.get('#description-link').click()
        cy.get('textarea[name="description"]').clear().type('Hello, user. This is my description.')
        cy.get('button[name ="Submit"]').click()
        cy.get('#description div:first-child').should('have.text', people.description)


    });
})