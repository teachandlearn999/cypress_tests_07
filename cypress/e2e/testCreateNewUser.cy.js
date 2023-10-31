/// <reference types="cypress" />



describe('testCreateNewUser', () => {
    before, () => {
      cy.visit('http://localhost:8080/login?from=%2F');
      cy.get('#j_username').type('admin');
      cy.get('#j_password').type('password');
      cy.get('button[name="Submit"]').click();
    }
  });


  it('CreateNewUser', () => {
    cy.get('a[href="/manage"]').click();
    cy.get('a[href="securityRealm/"]').click();
    cy.get('a[href="addUser"]').click();
    cy.get('#username').type('Alona');
    cy.get('.jenkins-form-item.tr:nth-child(2)').type('1234');
    cy.get('.jenkins-form-item.tr:nth-child(3)').type('1234');
    cy.get('.jenkins-form-item.tr:nth-child(4)').type('Dem');
    cy.get('.jenkins-form-item.tr:nth-child(5)').type('Alona@gmail.com');
    cy.get('button[formnovalidate]').click();
    cy.get('a[href="user/alona/"]').contains('Alona');
  });

  // it('DeleteCreatedUser', () => {
  //   cy.get('a[data-title]').click();
  //   cy.get('button[data-id="ok"]').click();
  // });
