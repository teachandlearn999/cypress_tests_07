/// <reference types="cypress" />

describe("newApiTest", () => {
    const Base_URL = "https://reqres.in/api"

    beforeEach(function() {
        cy.request('GET', `${Base_URL}/users?per_page=20`)
        .its('status')
        .should('be.eq', 200)
        });

    it('Verify that user exists in api data', () => {
        cy.request('GET', `${Base_URL}/users?per_page=20`)
        .then((response) => {
            let users = response.body.data           
            for (let i = 0; i < users.length; i++) {
                if (users[i].first_name === "George" && users[i].last_name === "Edwards") {
                    expect(true).to.be.true
                    return
                }
            }
            expect(false).to.be.false
        })
    })

    it('Verify that user exists in api data', () => {
        cy.request('GET', `${Base_URL}/users?per_page=20`)
        .then((response) => {
            let users = response.body.data           
            let res = users.filter((el) => el.first_name === "George" && el.last_name === "Edwards")
            let name = `${res[0].first_name} ${res[0].last_name}`
            expect(name).to.be.eq("George Edwards")
        })
    })

    it('Verify that user exists in api data', () => {
        cy.request('GET', `${Base_URL}/users?per_page=20`)
        .then((response) => {
            let users = response.body.data
            const getName = (acc, cur) => {
               return acc + cur.first_name === "George" && cur.last_name === "Edwards" ? cur.first_name + ' ' + cur.last_name : acc
            }           
            let res = users.reduce(getName, '')
            expect(res).to.be.equal("George Edwards")
        })
    })
})