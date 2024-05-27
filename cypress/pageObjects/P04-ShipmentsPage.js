class ShipmentsPage {
    visit() {
        cy.get('[href="/shipments/b2b/all"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .flex > .nav-item__title').contains('Shipments').click({force: true});
    }
  
    clickAddNewShipment() {
        cy.get('.mdc-button__label > span.unified-line-height').contains('Add New Shipment').click();
    }
  }
  
  export default ShipmentsPage;
  