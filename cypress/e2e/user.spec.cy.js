import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginpage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menu = new MenuPage()
const myInfoPage = new MyInfoPage()
const Chance = require('chance')
const chance = new Chance()

describe('Orange HRM Tests', () => {
 
  it("Login with Page Objects",()=>{
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.validUser,userData.validPassword)

    dashboardPage.checkLocation("/web/index.php/dashboard/index")

    menu.clickingMyInfo()

    myInfoPage.fillName(chance.first(),chance.last({nationality:it}))
    myInfoPage.fillDocuments("1020","101112","2025-28-01")
    myInfoPage.fillPersonalInfo(27)
    myInfoPage.saveForm()
  })
 
})