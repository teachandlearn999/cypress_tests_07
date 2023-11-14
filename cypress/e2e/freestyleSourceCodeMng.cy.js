/// <reference types="cypress" />
import configurePage from "../fixtures/ConfigurePage.json";
describe("US_04.02 | Freestyle > Source Code Management section", () => {
  it.only("TC_04.02.004 | Freestyle > Source Code Management > Git option has a tooltip", () => {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get("input#name").type("projectName1");
    cy.get(".hudson_model_FreeStyleProject").click();
    cy.get("#ok-button").click();
    cy.get('button[data-section-id="source-code-management"]').click();
    cy.get(".jenkins-radio-help-wrapper [tooltip]:nth-child(2)").trigger(
      "focus"
    );

    cy.get("#tippy-26").should("be.visible");
    cy.get("#tippy-26 .tippy-content").should(
      "have.text",
      configurePage.sourceCodeManagement.toolTips.git
    );
  });
});
