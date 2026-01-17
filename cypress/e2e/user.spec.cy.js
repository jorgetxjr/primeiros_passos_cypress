import userData from "../fixtures/user-data.json"

describe('Orange HRM Tests', () => {
  const selectorsList={
    urlTarget:'/auth/login', 
    usernameField:'[name="username"]',
    passwordField:'[name="password"]',
    loginButton:'.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    dashboadGrid: ".orangehrm-dashboard-grid",
    credentialWrong:'.oxd-alert-content > .oxd-text',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField:'[name="middleName"]',
    lastNameField: '[name="lastName"]',
    employeeIDField: ':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    driverLicenseField:':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    dateplaceField:'[placeholder="yyyy-mm-dd"]',
    dateCloseButton:".--close",//surgiu magicamente durante a aula, eu não consegui repetir
    saveButton:'[type="submit"]'
  }

  it.only('User info update - sucess', () => {
    cy.visit(selectorsList.urlTarget)
    cy.get(selectorsList.usernameField).type(userData.validUser)
    cy.get(selectorsList.passwordField).type(userData.validPassword)
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal","/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboadGrid)
    // going to my info
    cy.get(selectorsList.myInfoButton).click()
    //filling the fields
    cy.get(selectorsList.firstNameField).clear()
    cy.get(selectorsList.firstNameField).type("João")
    cy.get(selectorsList.lastNameField).clear()
    cy.get(selectorsList.lastNameField).type("da Silva")
    cy.get(selectorsList.employeeIDField).clear()
    cy.get(selectorsList.employeeIDField).type("102030")
    cy.get(selectorsList.driverLicenseField).clear().type("987654")
    cy.get(selectorsList.dateplaceField).eq(0).clear().type("2026-01-28")//yyy-mm-dd
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    //cy.get('.oxd-toast-close').click()
    cy.get('body').should('contain','Successfully Updated')
    //cy.get('.oxd-toast-close')
    
  })
  it('Login - Fail',()=>{
    cy.visit(selectorsList.urlTarget)
    cy.get(selectorsList.usernameField).type(userData.invalidUser)
    cy.get(selectorsList.passwordField).type(userData.invalidPassword)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.credentialWrong)
  })
})