const USERNAME = 'admin'
const PASSWORD = 'password'
const PORT = 'http://localhost:8080/'

beforeEach(() => {
    cy.visit(`${PORT}login?from=%2F`)
    cy.get("#j_username").type(USERNAME)
    cy.get('input[name="j_password"]').type(PASSWORD)
    cy.get('button[name="Submit"]').click()
})