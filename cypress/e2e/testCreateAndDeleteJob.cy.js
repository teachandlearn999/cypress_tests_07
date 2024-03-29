/// <reference types="cypress" />

describe("Cypress_Tests_07", () => {

    it('Create a job', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type('Freestyle');
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click();
        cy.get("#jenkins-name-icon").click();
        cy.get('#job_Freestyle a[href="job/Freestyle/"] span').should('have.text', 'Freestyle');
    });
// version 1
    it('Delete a job', () => {
        cy.get('#job_Freestyle a[href="job/Freestyle/"]').click();
        cy.get('a[data-url="/job/Freestyle/doDelete"]').click();
        cy.get('#job_Freestyle a[href="job/Freestyle/"] span').should('not.exist');
    });
//// version 2
//     it('Delete a job2', () => {
//         cy.get('#job_Freestyle a[href="job/Freestyle/"] button').click({force: true});
//         cy.get('button[href="/job/Freestyle/doDelete"]').click();
//         cy.get('#job_Freestyle a[href="job/Freestyle/"] span').should('not.exist');
//     });
});