class DashboardPage
{
    selectorsList()
    {
        const selectors={
            dashboadGrid: ".orangehrm-dashboard-grid",
            
        }
        return selectors
    }

    checkLocation(URL)
    {
        cy.location("pathname").should("equal",URL)
        cy.get(this.selectorsList().dashboadGrid).should("be.visible")
    }

}

export default DashboardPage