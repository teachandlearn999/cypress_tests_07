import HomePage from "./HomePage";

class FreestyleProjectStatusPage{
    getDeleteProjectNameLink = (name) => cy.get(name)

    clickDeleteProjectNameLink (name) {
        this.getDeleteProjectNameLink(name).click();
        return new HomePage()
    }
    
}
export default FreestyleProjectStatusPage;