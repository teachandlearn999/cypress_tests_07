import FreestyleProjectConfigurePage from "./FreestyleProjectConfigurePage";

class NewJobPage {
    getInputNameField = () => cy.get('#name');
    getFreestyleProject = () => cy.get('.hudson_model_FreeStyleProject');
    getOkButton = () => cy.get('#ok-button');


    typeProjectName (projectName) {
        this.getInputNameField().type(projectName);
        return this;
    }

    clickFreestyleProjectButton () {
        this.getFreestyleProject().click();
        return this;

    }

    clickOkButton () {
        this.getOkButton().click();
        return new FreestyleProjectConfigurePage();
    }
}
export default NewJobPage;