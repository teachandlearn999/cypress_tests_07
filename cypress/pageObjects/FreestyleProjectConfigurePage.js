import FreestyleProjectStatusPage from "./FreestyleProjectStatusPage";

class FreestyleProjectConfigurePage {
    getSaveButton = () => cy.get('button[name="Submit"]');
    getBuildTriggers = () => cy.get("#build-triggers").parent().find('.optionalBlock-container');
    getIndividualBuildTrigger = '.optional-block-start label.attach-previous';
    
    clickSaveButton () {
        this.getSaveButton ().click();
        return new FreestyleProjectStatusPage();
    }

}
export default FreestyleProjectConfigurePage;