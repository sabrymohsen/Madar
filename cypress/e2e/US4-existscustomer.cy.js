import CustomersPage from '../pageObjects/P03-CustomersPage';
import Login2 from '../pageObjects/P01-Login2';
const login= new Login2
const LoginSystem = require('../pageObjects/P02-LoginSystem')

describe('Customer Management', () => {
  const customersPage = new CustomersPage();
  before(() => {
    login.visit();
    cy.wait(5000)
    login.login('553783435', 'Madar@123','0000'); // Replace with actual Phone number and password
  });

  it('should search for an existing customer or add a new one', () => {
    // Visit the customers page
    
    
    cy.wait(20000)
    // LoginSystem.verifyLogin()
    cy.wait(7000)
    customersPage.clickCustomer()
    // Click on the "Add New Customer" button
    customersPage.clickAddNewCustomer();

    
    const customerName = 'Test Customer Name';
    customersPage.searchCustomer(customerName);

    
  });
  
});
