class Login2 {
    visit() {
      cy.visit('https://test-admin.madar.app');
    }
  
    login(Phone, password,code) {
      cy.get(':nth-child(2) > .tab-link').click()
        cy.get('#mat-input-1').type(Phone);
        cy.get('#mat-input-0').type(password);
        cy.get('.mdc-button__label').click()
        cy.wait(6000)
        cy.get('#mat-input-2').type(code);
        cy.get('.fade-in > .ng-star-inserted > .mt-4 > .btn > .mdc-button__label').click()
        cy.wait(6000)
    }
  }
  
  export default Login2;
  