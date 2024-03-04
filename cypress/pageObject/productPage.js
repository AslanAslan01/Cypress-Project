

class productPage {
    firstProductLinkSelector =`.card-title [href="prod.html?idp_=1"]`
    addToCartBtnSelector=`[onclick="addToCart(1)"]`
    logoutBtnSelector=`#logout2`
    deleteLinkSelector=`#tbodyid a`


    clickLoginLink(){
        cy.get(this.loginLinkSelector).click()
    }

    addToCartProduct(){
        cy.get(this.firstProductLinkSelector).click()
        cy.wait(2000)
        cy.get(this.addToCartBtnSelector).click()
        cy.wait(3000)
        cy.visit("https://www.demoblaze.com/cart.html")
        cy.wait(2000)
    }

    clickLogout(){
        cy.get(this.logoutBtnSelector).click()
    }

    removeProduct(){
        cy.get(this.deleteLinkSelector).click()
    }
}

export default productPage