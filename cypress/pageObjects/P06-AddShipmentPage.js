/// <reference types="cypress" />
class AddShipmentPage {
    fillForm(shipment) {
      this.selectShipFrom(shipment.shipFrom);
      
    //   this.selectDate(shipment.scheduledPickDate);
    }
  
    selectShipFrom(shipFrom) {
        cy.wait(9000)
        cy.get('#mat-select-value-113').click()
        cy.get('#mat-input-38').type(shipFrom)
        cy.wait(5000)
        cy.get('.dropdown').contains(shipFrom).click({force: true});
    }
     // Check the "Assign Shipment" checkbox to make the dropdowns appear
  checkAssignShipment() {
    cy.get('#mat-mdc-checkbox-2-input').check();
  }

  // Select options for "Fleet Provider", "Truck", and "Driver"
  chooseAssignmentDetails(assignmentDetails) {
    cy.get('#mat-select-value-133').click()
    cy.get('#mat-input-54').type(assignmentDetails.fleetProvider);
    cy.wait(5000)
    cy.get('.dropdown').contains(assignmentDetails.fleetProvider).click()
    cy.wait(3000)
    cy.get('#mat-select-value-135').click()
    cy.wait(5000)
    cy.get('#mat-input-55').type(assignmentDetails.truck);
    cy.wait(3000)
    cy.get('.dropdown').contains(assignmentDetails.truck).click()

    cy.get('#mat-select-value-137').click()
    cy.wait(3000)
    cy.get('#mat-input-56').type(assignmentDetails.driver);
    cy.wait(3000)
    cy.get('.dropdown').contains(assignmentDetails.driver).click()

  }

  // Click the final save button to save the shipment
  save() {
    cy.get('button').contains('Save').click();
  }
}
  
    
  
    
  
  
  export default AddShipmentPage;
  