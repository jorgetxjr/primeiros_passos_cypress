class MyInfoPage
{
    selectorsList()
    {
        const selectors={
            firstNameField: '[name="firstName"]',
            middleNameField:'[name="middleName"]',
            lastNameField: '[name="lastName"]',
            employeeIDField: ':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            driverLicenseField:':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            dateplaceField:'[placeholder="yyyy-dd-mm"]',
            dateCloseButton:".--close",//surgiu magicamente durante a aula, eu não consegui repetir
            saveButton:'[type="submit"]',
            nationalityMenu:':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
            nationItem: '.oxd-select-dropdown > :nth-child'
        }
        return selectors
    }

    fillName(firstName,lastName)
    {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        
    }
    
    fillDocuments(employeeID,driverLicense,date)
    {
        cy.get(this.selectorsList().employeeIDField).clear().type(employeeID)
        cy.get(this.selectorsList().driverLicenseField).clear().type(driverLicense)
        cy.get(this.selectorsList().dateplaceField).eq(0).clear().type(date)//yyy-mm-dd
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillPersonalInfo(nationNumber)
    {
        cy.get(this.selectorsList().nationalityMenu).click()
        cy.get(this.selectorsList().nationItem+"("+nationNumber+")").click()
        //TODO: Preencher os outros campos

    }

    saveForm()
    {
        //cy.get(this.selectorsList().saveButton).click({force:true})
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('body').should('contain','Successfully Updated')
        
    }

}

export default MyInfoPage