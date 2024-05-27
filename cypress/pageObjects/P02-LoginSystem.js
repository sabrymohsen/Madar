class system{
    EnterPhoneNumber(Phone){
        cy.get('#mat-input-1').type(Phone);

    }
    SetPassword(password){
        cy.get('#mat-input-0').type(password);

    }
LoginBNT(btn){
    cy.get('.mdc-button__label').click()
}
code(code_1){
    cy.get('#mat-input-2').type(code_1);


}
submitcode(){
    cy.get('.fade-in > .ng-star-inserted > .mt-4 > .btn > .mdc-button__label').click()
}
verifyLogin(){
    cy.get(".welcome-element__title").should('have.text','لوحة التحكم')
}

}
module.exports=new system();
