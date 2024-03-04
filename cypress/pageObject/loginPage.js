class loginPage {

    userInputSelector = `#loginusername`
    passwordInputSelector = `#loginpassword`
    loginButtonSelector=`[onclick="logIn()"]`
    nameofUserSelector=`#nameofuser`

    login(user,pass){
        cy.get(this.userInputSelector).type(user)
        cy.wait(3000)
        cy.get(this.passwordInputSelector).type(pass)
        cy.wait(3000)
        cy.get(this.loginButtonSelector).click()
        cy.wait(3000)
    }
    getProfileNameButton(){
      return cy.get(this.nameofUserSelector)
    }
}

export default loginPage