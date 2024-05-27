
const LoginSystem = require('../pageObjects/P02-LoginSystem')

describe('Login in system ', () => {
  beforeEach(() => {
    cy.visit('https://test-admin.madar.app/auth/login')
    cy.wait(10000)
  })

  it('should login into system with valid data', () => {
    LoginSystem.EnterPhoneNumber('553783435')
    LoginSystem.SetPassword('Madar@123')
    LoginSystem.LoginBNT()
    LoginSystem.code('0000')
    LoginSystem.submitcode()
    cy.wait(20000)
    LoginSystem.verifyLogin()
   

        
  })
})