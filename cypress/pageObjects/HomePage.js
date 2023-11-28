import FreestyleProjectStatusPage from "./FreestyleProjectStatusPage";
import NewJobPage from "./NewJobPage";
//import projectData from "../fixtures/pom_fixtures/projectData.json";


class HomePage {
    getNewJobLink = () => cy.get('a[href="/view/all/newJob"]');
    // getProjectNameLink = () => cy.get(`#job_${projectData.projectName} a[href="job/${projectData.projectName}/"] span`)
    //getProjectNameLink = () => cy.get('#projectstatus a[href*="job"].jenkins-table__link span')
    getProjectNameLink = (name) => cy.get(name)


    clickNewJobLink () {
        this.getNewJobLink().click();
        return new NewJobPage();
    }

    clickProjectNameLink (name) {
        this.getProjectNameLink(name).click();
        return new FreestyleProjectStatusPage()
    }

}
export default HomePage