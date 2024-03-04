# E2E Testing

This repository demonstrates end-to-end testing using Cypress using POM.
Web application: https://www.demoblaze.com/

### Technology: <br>
* Automation Framework: Cypress <br>
* Build tool: npm <br>
* Bundled Tools: Mocha, Chai
* Language: Javascript <br>
* Report: mochawesome <br>
* Dependency/Packages:{
    "cypress": "^13.6.2",
    "mochawesome": "^7.1.3"
} <br>
* IDE: Visual Studio Code <br>

### Prerequisite:
The following software are required:

1. nodejs : Download and Install Node JS from<br>
    https://nodejs.org/en/download/<br>

### Installation:
1. Clone the repo using below URL<br>
2. Navigate to folder and install npm packages using:<br>
```typescript
  npm install
  ```


  ### Usage:
  1. Execute this command to run the automation:<br>
  ```typescript
  npm run specific-spec
  ```

### Config
Config file is the main and root of this project. All the configuration related information like browser information, Specs file, URL will be written here.

```typescript
// cypress.config.js
module.exports = defineConfig({
  viewportHeight:660,
  viewportWidth:1400,
  videosFolder:'cypress/failvideo',
  videoUploadOnPasses:false,
  screenshotOnRunFailure:true,
  screenshotsFolder:'cypress/failScreenshot',
    reporter:'mochawesome',
  reporterOptions:{
    "reportDir":"cypress/test-reports",
    "overwrite":true,
    "html":true
  },
  e2e: {
    env:{
      user: "**",
      password: "***"
    },
    setupNodeEvents(on, config) {
    },
    baseUrl:"https://www.demoblaze.com/"
  },
});

```

### Page Objects
Page objects are located in the [cypress/pageObject] folder. They are an abstraction of the page we are running the tests on. And they contain the selectors and methods to interact with the page. So instead of having a step with a lot of code, we can call a method from the page object.

```typescript
//cypress/pageObject/loginPage.js
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
```
### Specs
Specs are located in the [cypress/e2e] folder. They are the main test scenarios. Following POM, the spec file will call the page functions from the pages and execute in this spec file. All the test steps will be found here.


```typescript
//cypress/e2e/cart-product-test.cy.js
  it('Verify user can Add and remove product from Cart.', function () {
    cy.visit('/')
    homePage.clickLoginLink()

    loginPage.login(user, password)
    loginPage.getProfileNameButton().should('have.text', 'Welcome test')
    productPage.addToCartProduct()
    productPage.removeProduct()
    productPage.clickLogout()
    homePage.getSignUpLocator().should('have.text', 'Sign up45')
  })
```

###  Mochawesome Report view:
<img width="1437" alt="Screenshot 2024-03-04 at 11 23 56 PM" src="https://github.com/AslanAslan01/Playwright-Project/assets/128255111/96a1bf0f-a22b-4707-ad52-295b70cc290d">
