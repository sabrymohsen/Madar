class CustomersPage {
  clickCustomer(){
    cy.get('[href="/customers/b2b"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .flex > .nav-item__title').click();
  }
  
    clickAddNewCustomer() {
        cy.get('.mat-mdc-tooltip-trigger > .btn-primary > .mdc-button__label').click();
    }
  
    searchCustomer(name) {
        cy.get('#mat-input-38').type(name);
        cy.get('.ml-md-auto > .w-100 > .mdc-button__label').click();
    }
  
    getCustomerRowSelector(name) {
      return `tr:contains(${name})`;
    }
  }
  
  export default CustomersPage;
  