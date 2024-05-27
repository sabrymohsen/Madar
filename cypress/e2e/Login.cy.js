/// <reference types="cypress" />
const loginPage = require('../pageObjects/loginPage');
describe('Mobile Number Input Field Tests', () => {
 


  beforeEach(() => {
      cy.visit('https://test-admin.madar.app/auth/login');
  });

  it('Enter a valid mobile number and ensure it is accepted', () => {
      loginPage.inputMobileNumber().type('1234567890');
      loginPage.inputMobileNumber().should('have.value', '1234567890');
  });

  it('Verify placeholder text is displayed correctly when the input field is empty', () => {
      loginPage.inputMobileNumber().should('have.attr', 'placeholder', 'أدخل القيمة');
  });

  
});
  
describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('https://test-admin.madar.app/auth/login');
    });

    it('Should display the password input', () => {
        loginPage.assertPasswordInputVisible();
    });

    it('Should have the correct placeholder in the password input', () => {
        loginPage.assertPasswordInputPlaceholder();
    });

    it('Should have the correct type in the password input', () => {
        loginPage.assertPasswordInputType();
    });

    it('Should have the required attribute in the password input', () => {
        loginPage.assertPasswordInputRequired();
    });

    it('Should have the aria-required attribute in the password input', () => {
        loginPage.assertPasswordInputAriaRequired();
    });

    it('Should be able to type a password', () => {
        const password = 'TestPassword123';
        loginPage.enterPassword(password);
        loginPage.elements.passwordInput().should('have.value', password);
    });
    


});