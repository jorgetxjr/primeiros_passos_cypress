describe('Orange HRM Tests', () => {
  const selectorsList={
    urlTarget:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 
    usernameField:'[name="username"]',
    passwordField:'[name="password"]',
    loginButton:'.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    credentialWrong:'.oxd-alert-content > .oxd-text',
  }
  it('Login - sucess', () => {
    cy.visit(selectorsList.urlTarget)
    cy.get(selectorsList.usernameField).type("Admin")
    cy.get(selectorsList.passwordField).type("admin123")
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal","/web/index.php/dashboard/index")
    cy.get(selectorsList.sectionTitleTopBar).contains("Dashboard")
  })
  it('Login - Fail',()=>{
    cy.visit(selectorsList.urlTarget)
    cy.get(selectorsList.usernameField).type("Test")
    cy.get(selectorsList.passwordField).type("test")
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.credentialWrong)
  })
})