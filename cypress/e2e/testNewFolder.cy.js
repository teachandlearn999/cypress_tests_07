/// <reference types="cypress" />

describe('New folder', () => {

    const FOLDER = 'Folder'
    const NEW_FOLDER = 'New_Folder'

    it('Adding new folder', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(FOLDER)
        cy.get('.icon-folder').click()
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click();
        cy.get("#jenkins-name-icon").click();
        cy.get(`#job_${FOLDER} a[href="job/${FOLDER}/"]`)
           .should('have.text', FOLDER)
    })

    it('Rename folder', () => {
        cy.get('#jenkins-home-link').click()
        cy.get(`#job_${FOLDER} a[href="job/${FOLDER}/"]`).click()
        cy.get(`#tasks a[href="/job/${FOLDER}/confirm-rename"]`).click()
        cy.get('input[checkdependson="newName"]').clear().type(NEW_FOLDER)
        cy.get('button[name="Submit"]').click()
        cy.get('#jenkins-name-icon').click();
        cy.get(`#job_${NEW_FOLDER} a[href="job/${NEW_FOLDER}/"]`).click()
        cy.get('#main-panel > h1').then(($h1) => {
            const text = $h1.text().trim()
            expect(text).to.equal(NEW_FOLDER)
        })
    })

    it('Delete folder', () => {
        cy.get(`#job_${NEW_FOLDER} a[href="job/${NEW_FOLDER}/"]`)
        .click();
        cy.get('.icon-edit-delete')
        .click();
        cy.get('button[formnovalidate="formNoValidate"]').click()
        cy.get('#jenkins-name-icon').click();
        cy.get(`#job_${NEW_FOLDER} a[href="job/${NEW_FOLDER}/"] span`)
        .should('not.exist');
    })



})