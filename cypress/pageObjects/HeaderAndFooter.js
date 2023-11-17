import HomePage from "./HomePage";

class HeaderAndFooter {
    getLogoLink = () => cy.get("#jenkins-home-link");


    clickLogoLink() {
        this.getLogoLink().click();
        return new HomePage();
    }

}
export default HeaderAndFooter;