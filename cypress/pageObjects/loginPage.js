/// <reference types ="cypress"/>
class LoginPage {
  inputMobileNumber() {
    return cy.get('input[formcontrolname=mobileNumber]');
}

errorMessage() {
    return cy.get('mat-mdc-error-15');
}

submitButton() {
    return cy.get('button[type=submit]');
}
    constructor() {
      this.passwordInput = '#mat-input-0';
  }
  enterPassword(password) {
      cy.get(this.passwordInput).type(password);
  }

  assertPasswordInputVisible() {
      cy.get(this.passwordInput).should('be.visible');
  }

  assertPasswordInputType() {
      cy.get(this.passwordInput).should('have.attr', 'type', 'password');
  }

  assertPasswordInputPlaceholder() {
      cy.get(this.passwordInput).should('have.attr', 'placeholder', 'أدخل كلمة المرور');
  }

  elements = {
    passwordInput: () => cy.get('#mat-input-0')
}

enterPassword(password) {
    this.elements.passwordInput().type(password);
}

assertPasswordInputVisible() {
    this.elements.passwordInput().should('be.visible');
}

assertPasswordInputPlaceholder() {
    this.elements.passwordInput().should('have.attr', 'placeholder', 'أدخل كلمة المرور');
}

assertPasswordInputType() {
    this.elements.passwordInput().should('have.attr', 'type', 'password');
}

assertPasswordInputRequired() {
    this.elements.passwordInput().should('have.attr', 'required');
}

assertPasswordInputAriaRequired() {
    this.elements.passwordInput().should('have.attr', 'aria-required', 'true');
}

 
  
  }
  
  module.exports = new LoginPage();