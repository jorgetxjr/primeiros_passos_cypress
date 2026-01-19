import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginpage"
import DashboardPage from "../pages/dashboardPage"


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM Tests', () => {
  it('Login - Fail',()=>{
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.invalidUser,userData.invalidPassword)
    loginPage.wrongUserAndPassword()
  })

  it('Login - Success',()=>{
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.validUser,userData.validPassword)
    dashboardPage.checkLocation("/web/index.php/dashboard/index")
  })
 
})