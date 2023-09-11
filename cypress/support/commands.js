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
import Forms from "./pageObjects/Forms"
import Buttons from "./pageObjects/Buttons";
import adminpage from "./pageObjects/AdminPage";

const fill = new Forms();
const click = new Buttons();
const Adminpage = new adminpage();

Cypress.Commands.add('fillLoginDetails', (username, password)=> {
    fill.username(username)
    fill.password(password)
})

Cypress.Commands.add('Loginhelper', (username, password) => {
    cy.visit(Cypress.env('baseUrl'))
    cy.fillLoginDetails(username, password)
    click.universalButton('Login')
})

Cypress.Commands.add('pickUserRole', (role)=> {
    Adminpage.dropdown('userRole')
    Adminpage.selectDropdown(role)
})

Cypress.Commands.add('status', (stat)=> {
    Adminpage.dropdown('status')
    Adminpage.selectDropdown(stat)
})
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