class MenuPage
{
    selectorsList()
    {
        const selectors={
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }

        return selectors
    }

    clickingMyInfo()
    {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    //TODO: Criar as automações para todos os itens do menu
}

export default MenuPage