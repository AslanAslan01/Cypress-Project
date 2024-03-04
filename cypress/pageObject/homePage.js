class homePage {

    loginLinkSelector =`#login2`
    signupLinkSelector=`#signin2`


    clickLoginLink(){
        cy.get(this.loginLinkSelector).click()
        cy.wait(3000)
    }

    getSignUpLocator(){
        return cy.get(this.signupLinkSelector)
    }


}

export default homePage