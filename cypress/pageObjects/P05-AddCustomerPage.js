/// <reference types="cypress" />
class AddCustomerPage {
    fillMandatoryFields(details) {
        cy.get('#mat-input-39').type(details.companyName);
        cy.get('#mat-input-42').type(details.firstName);
        cy.get('#mat-input-43').type(details.lastName);
      cy.get('#mat-input-40').type(details.mobileNumber);
      cy.get('#mat-input-41').type(details.companyMail);
      cy.get('#mat-input-44').type(details.arabicCommercialName);
      cy.get('#mat-input-45').type(details.englishCommercialName);
      cy.get('#mat-input-46').type(details.address);
      cy.get('#mat-input-47').type(details.arabicaddress);
      cy.get('#mat-input-48').type(details.vatNumber);
      cy.get('#mat-input-51').type(details.waitingChargePerDay);
      this.selectCustomerType('OPS');
      
      cy.get('#mat-input-49').type(details.crNumber);
    }
    selectCustomerType(optionText) {
        cy.get(':nth-child(6) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click()
        cy.contains('mat-option', optionText).click();
        
      }
   
  
    submitForm() {
        cy.get('.ml-sm-auto').click();
    }
  }
  
  export default AddCustomerPage;
  