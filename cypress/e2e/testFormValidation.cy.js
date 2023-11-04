/// <reference types="cypress" />
import manageJenkinsSecurityCreateUser from "../fixtures/manageJenkinsSecurityCreateUser.json";
describe.only("testFormValidation", () => {
  it("show validation error when username is blank ", function () {
    cy.get("div:nth-child(4) > span > a").click();
    cy.get('a[href="securityRealm/"]').click();

    cy.title().should("contain", "Users");

    cy.get('div#page-body a[href="addUser"]').click();

    cy.get('div.form-content input[name="username"]')
      .clear()
      .should("be.empty");
    
    cy.get('input[name="password1"]').type(
      manageJenkinsSecurityCreateUser.userFormFields.password1);
    cy.get('input[name="password2"]').type(manageJenkinsSecurityCreateUser.userFormFields.password2);
    cy.get('input[name="fullname"]').type(manageJenkinsSecurityCreateUser.userFormFields.fullname);
    cy.get('input[name="email"]').type(manageJenkinsSecurityCreateUser.userFormFields.email);
    cy.get('button[name="Submit"]').click();
   
    cy.get(".error")
      .should("be.visible")
      .and("contain", manageJenkinsSecurityCreateUser.userFormFields.errorNoUserName);
  });
});
