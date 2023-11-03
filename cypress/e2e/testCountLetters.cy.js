/// <reference types="cypress" />

describe("Cypress_Tests_07", () => {
    
  it("Create a job", () => {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get("#name").type("Freestyle");
    cy.get(".hudson_model_FreeStyleProject").click();
    cy.get("#ok-button").click();
    cy.get("button[suffix='builder']").click({ force: true });
    let count = 0;
    cy.get('.yui-module.yui-button-menu.visible li[id^="yui-gen"]').each(($el, i) => {
        let text = $el.text();
        count += text.toLowerCase().split("a").length - 1;
    }).then(() => {
        expect(count).to.be.equal(7)
    });
  });
});
