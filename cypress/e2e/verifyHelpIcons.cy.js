
import buildTriggersOptions from "../fixtures/buildTriggersOptions.json"
import freestyleProjectData from "../fixtures/freestyleProjectData.json"

describe('Verify Help Icons Names', () => {

    beforeEach(function () {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get("#name").type(freestyleProjectData.projectName);
        cy.get(".hudson_model_FreeStyleProject").click();
        cy.get("#ok-button").click();
        cy.get("#build-triggers").parent().find('.optionalBlock-container').as('list')
        
    });

    buildTriggersOptions.triggerOptions.forEach((option, ind) => {
    const name = Object.keys(option)[0]
    const iconName = Object.values(option)[0]
        it(`Verify Help icon name  for feature ${name} `, function () {
            cy.wrap(this.list[ind]).find('.optional-block-start label.attach-previous').should('have.text', name)   

            cy.wrap(this.list[ind]).find('.jenkins-checkbox-help-wrapper a ').trigger('mouseenter').get('a[aria-describedby*="tippy-"]')
            cy.contains(iconName).should('be.visible')
        });
    });
    
    afterEach(function () {

        cy.get(".logo a[href='/']").click()
        cy.get(`#job_${freestyleProjectData.projectName} a[href="job/${freestyleProjectData.projectName}/"]`).click();
        cy.get(`a[data-url="/job/${freestyleProjectData.projectName}/doDelete"]`).click();
    });
})

