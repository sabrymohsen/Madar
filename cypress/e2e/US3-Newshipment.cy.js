import ShipmentsPage from '../pageObjects/P04-ShipmentsPage';
import AddShipmentPage from '../pageObjects/P06-AddShipmentPage';
import Login2 from '../pageObjects/P01-Login2';
const login= new Login2
const shipmentsPage = new ShipmentsPage();
const addShipmentPage = new AddShipmentPage();
describe('Add New Shipment', () => {
 

  before(() => {
    login.visit();
    cy.wait(5000)
    login.login('553783435', 'Madar@123','0000'); // Replace with actual Phone number and password
  });

  it('should add and assign a new shipment', () => {
    // Navigate to Shipments page and click on "Add New Shipment"
    shipmentsPage.visit();
    shipmentsPage.clickAddNewShipment();

    const newShipment = {
      shipFrom: 'Amr GR', // The option to choose in "Ship From" dropdown
      fleetProvider: 'test specific', // Option to choose in "Fleet Provider" dropdown
      truck: '1299', // Option to choose in "Truck" dropdown
      driver: 'ARSHAD' // Option to choose in "Driver" dropdown
    };

    // Step 1: Select "Ship From" which auto-generates date, product type, and vehicle type
    addShipmentPage.selectShipFrom(newShipment.shipFrom);

    // Step 2: Check "Assign Shipment" checkbox to make the dropdowns appear
    addShipmentPage.checkAssignShipment();

    // Step 3: Select options for "Fleet Provider", "Truck", and "Driver"
    addShipmentPage.chooseAssignmentDetails({
      fleetProvider: newShipment.fleetProvider,
      truck: newShipment.truck,
      driver: newShipment.driver
    });

    // Step 4: Click the final save button to save the shipment
    addShipmentPage.save();

    // Add assertions to verify the shipment was added 
    cy.get('.mat-mdc-snack-bar-label').contains('Shipment added successfully').should('be.visible');
    
  });
});
