/// <reference types = "Cypress" />

import HomePage from "../pageObject/homePage";
import LoginPage from "../pageObject/loginPage";
import ProductPage from "../pageObject/productPage";

describe("test login page", () => {
  const user = Cypress.env('user')
  const password = Cypress.env('password')

  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const productPage = new ProductPage()


  it('Verify user can Add and remove product from Cart.', function () {
    cy.visit('/')
    homePage.clickLoginLink()

    loginPage.login(user, password)
    loginPage.getProfileNameButton().should('have.text', 'Welcome test')
    productPage.addToCartProduct()
    productPage.removeProduct()
    productPage.clickLogout()
    homePage.getSignUpLocator().should('have.text', 'Sign up')
  })
}) 