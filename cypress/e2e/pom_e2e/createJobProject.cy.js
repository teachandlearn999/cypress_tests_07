/// <reference types="cypress" />
import HomePage from "../../pageObjects/HomePage";
//import NewJobPage from "../../pageObjects/NewJobPage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";
import projectData from "../../fixtures/pom_fixtures/projectData.json";



describe("Cypress_Tests_07", () => {
    const homePage = new HomePage();
    //const newJobPage = new NewJobPage();
    const headerAndFooter = new HeaderAndFooter();
    const jobNameLinkLocator = `#job_${projectData.projectName} a[href="job/${projectData.projectName}/"] span`;


    it('Create a job', () => {
        homePage.clickNewJobLink()
                .typeProjectName(projectData.projectName)
                .clickFreestyleProjectButton()
                .clickOkButton()
                .clickSaveButton();

        headerAndFooter.clickLogoLink()
                        .getProjectNameLink(jobNameLinkLocator)
                        .should('be.visible')
                        .and('have.text', projectData.projectName);

    });
});