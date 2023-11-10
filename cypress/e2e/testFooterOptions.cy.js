/// <reference types="cypress" />
import footerData from "../fixtures/footerData.json";

describe("Footer- test Footer Options", () => {
  it("US_15.03.001 | Verify Jenkins version in Footer and color", () => {
    cy.get(".jenkins_ver")

      .should("be.visible")
      .and("have.text", footerData.jenkinsVersion)
      .and("have.css", "color", "rgb(20, 20, 31)");
  });

  it('US_15.03.002|Verify dropdown option "Website" navigation to a new page', () => {
    cy.get(".jenkins_ver").invoke("removeAttr", "target").click();
    cy.get('a.jenkins-dropdown__item[href = "https://www.jenkins.io/"]')
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://www.jenkins.io/", () => {
      cy.get("h1.page-title").should("be.visible");
      cy.title().should("equal", "Jenkins");
    });
  });

  it('US_15.03.003 |Verify dropdown option "Get involved" navigation to a new page', () => {
    cy.get(".page-footer__links button.jenkins-button").click();
    cy.get('a.jenkins-dropdown__item[href="https://www.jenkins.io/participate/"]')
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://www.jenkins.io/participate/", () => {
      cy.get("div.col-md-12 h1").should("be.visible");
      cy.title().should("equal", "Participate and Contribute");
    });
  });
});
