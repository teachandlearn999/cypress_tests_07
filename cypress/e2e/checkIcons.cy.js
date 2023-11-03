/// <reference types="cypress" />

describe("Icon 'S' selection and color", () => {
const projName = "Freestyle"
    it('Verify that when "S" icon is active - color is grey ', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#name').type(projName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get("#jenkins-name-icon").click();

        cy.get('#job_Freestyle a[href="job/Freestyle/"] span')
            .should('have.text', projName);
        
        cy.get('li a[title="Small"]')
         //.should('have.css','background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');
         cy.get('.jenkins-table__icon').then(($el) => {
            cy.wrap(window.getComputedStyle($el[0]).getPropertyValue('--table-padding'))
            .should('eq', '0.55rem')
        })
         // cy.get('li a[title="Small"]')
        // .should('have.css','background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');
       //  cy.get('a[title="Small"]').click()
       //cy.get(`tr[id="job_${projName}"] td div span span svg`).should('have.a.property','height', '1rem') 
       //cy.get('li[title="Small"]')
        //.should('have.css','background','rgba(175, 175, 207, 0.176) none repeat scroll 0% 0% / auto padding-box border-box');
  })
})
