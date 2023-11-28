/// <reference types="cypress" />
import NewJobPage from "../../pageObjects/NewJobPage";
import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

import buildTriggersOptions from "../../fixtures/pom_fixtures/buildTriggersOptions.json";
import projectData from "../../fixtures/pom_fixtures/projectData.json";

describe("Verify Help Icons Names", () => {
  const homePage = new HomePage();
  const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();
  const headerAndFooter = new HeaderAndFooter();
  const jobNameLinkLocator = `#job_${projectData.projectName} a[href="job/${projectData.projectName}/"]`;
  const deleteProjectNameLinkLocator = `a[data-url="/job/${projectData.projectName}/doDelete"]`;

  beforeEach(function () {
    homePage
      .clickNewJobLink()
      .typeProjectName(projectData.projectName)
      .clickFreestyleProjectButton()
      .clickOkButton();

    freestyleProjectConfigurePage.getBuildTriggers().as("list");
  });

  buildTriggersOptions.triggerOptions.forEach((option, ind) => {
    const name = Object.keys(option)[0];
    const iconName = Object.values(option)[0];

    it(`Verify Help icon name  for feature ${name} `, function () {
      cy.wrap(this.list[ind])
        .find(freestyleProjectConfigurePage.getIndividualBuildTrigger)
        .should("have.text", name);
    });
  });

  afterEach(function () {
    headerAndFooter
      .clickLogoLink()
      .clickProjectNameLink(jobNameLinkLocator)
      .clickDeleteProjectNameLink(deleteProjectNameLinkLocator);
  });
});
