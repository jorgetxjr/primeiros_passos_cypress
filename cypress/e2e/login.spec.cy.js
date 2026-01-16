import userData from "../fixtures/user-data.json"

describe('Orange HRM Tests', () => {
  const selectorsList={
    urlTarget:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 
    usernameField:'[name="username"]',
    passwordField:'[name="password"]',
    loginButton:'.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboadGrid: ".orangehrm-dashboard-grid",
    credentialWrong:'.oxd-alert-content > .oxd-text',
  }

  it('Login - sucess', () => {
    cy.visit(selectorsList.urlTarget)
    cy.get(selectorsList.usernameField).type(userData.validUser)
    cy.get(selectorsList.passwordField).type(userData.validPassword)
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal","/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboadGrid)
  })
  it('Login - Fail',()=>{
    cy.visit(selectorsList.urlTarget)
    cy.get(selectorsList.usernameField).type(userData.invalidUser)
    cy.get(selectorsList.passwordField).type(userData.invalidPassword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.credentialWrong)
  })
})