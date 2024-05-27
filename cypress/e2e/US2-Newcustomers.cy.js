import CustomersPage from '../pageObjects/P03-CustomersPage';
import AddCustomerPage from '../pageObjects/P05-AddCustomerPage';
const LoginSystem = require('../pageObjects/P02-LoginSystem')

describe('Customer Management', () => {
  const customersPage = new CustomersPage();
  const addCustomerPage = new AddCustomerPage();

  it('should search for an existing customer or add a new one', () => {
    // Visit the customers page
    cy.visit('https://test-admin.madar.app/auth/login')
    cy.wait(10000)
    cy.get(':nth-child(2) > .tab-link').click()
    LoginSystem.EnterPhoneNumber('553783435')
    LoginSystem.SetPassword('Madar@123')
    LoginSystem.LoginBNT()
    LoginSystem.code('0000')
    LoginSystem.submitcode()
    
    cy.wait(20000)
    // LoginSystem.verifyLogin()
    cy.wait(7000)
    customersPage.clickCustomer()
    // Click on the "Add New Customer" button
    customersPage.clickAddNewCustomer();

    // Check if the customer exists, if not, create a new one
    const customerName = 'Test Customer Name';
    customersPage.searchCustomer(customerName);

    cy.get('body').then($body => {
      if ($body.find(customersPage.getCustomerRowSelector(customerName)).length > 0) {
        // Customer exists
        cy.log('Customer already exists');
      } else {
        // Customer does not exist, create a new one
        cy.log('Creating a new customer');
        addCustomerPage.fillMandatoryFields({
          companyName: customerName,
          firstName: 'sabryyy',
          lastName: 'Doee',
          mobileNumber: '909022222',
          companyMail: 'test@examplessssss33333333.com',
          arabicCommercialName: 'اسم الشركة',
          englishCommercialName: 'Company Name',
          address: '123 Street, City, Country',
          arabicaddress:'الشروق',
          vatNumber: 'VAT12345',
          waitingChargePerDay: '10',

           // Assuming you have a way to select this value
          crNumber: 'CR123456'
        });
        addCustomerPage.submitForm()
        cy.wait(10000)
        
      }
    });
  });
  
});
