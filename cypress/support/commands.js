// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../pageObject/loginPage"
import HomePage from "../pageObject/homePage"

const loginpage = new LoginPage()
const homePage = new HomePage()

// Cypress.Commands.add('personalDetailPage', () => {
//     cy.visit('/subscriptions/#account')
//     cy.wait(500)
//     cy.fixture('correct-login').then((data) => {
//         login.setEmail(data.email)
//         login.setPassword(data.password)
//         login.clickLogin()
//         personal.verifyHeader()
//         personal.clickEdit()
//     })
//     cy.wait(500)

// })
