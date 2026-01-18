import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginpage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menu = new MenuPage()

describe('Orange HRM Tests', () => {
 
  it.only("Login with Page Objects",()=>{
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.validUser,userData.validPassword)
    dashboardPage.checkLocation("/web/index.php/dashboard/index")
    menu.clickingMyInfo()

  })
  it('User info update - sucess', () => {
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
  // it.only('Challenge Menu dropdown',()=>{
    // cy.visit(selectorsList.urlTarget)
    // cy.get(selectorsList.usernameField).type(userData.validUser)
    // cy.get(selectorsList.passwordField).type(userData.validPassword)
    // cy.get(selectorsList.loginButton).click()
    // cy.location("pathname").should("equal","/web/index.php/dashboard/index")
    // cy.get(selectorsList.dashboadGrid)
    // // going to my info
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.nationalityMenu).click()
    // for(let i=1;i<196;i++)
    // {
    //   let nation=selectorsList.nationItem+"("+i+")"
    //   if(cy.get(nation).text=="Brazilian")
    //   {
    //     cy.get(nation).click()
    //     break
    //   }
    // }
    // cy.get(selectorsList.nationItem+"(27)").click()
    

  // })

})