import FreestyleProjectStatusPage from "./FreestyleProjectStatusPage";

class FreestyleProjectConfigurePage {
    getSaveButton = () => cy.get('button[name="Submit"]');


    clickSaveButton () {
        this.getSaveButton ().click();
        return new FreestyleProjectStatusPage();
    }
}
export default FreestyleProjectConfigurePage;