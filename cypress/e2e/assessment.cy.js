/// <reference types="cypress"/>

import adminpage from '../support/pageObjects/AdminPage';
import Buttons from '../support/pageObjects/Buttons'
import Forms from '../support/pageObjects/Forms';

const click = new Buttons();
const fill = new Forms
const Admin = new adminpage
const populate = require('../../cypress/fixtures/testData.json')

describe('Admin', () => {
  beforeEach(() => {
    cy.Loginhelper(populate.loginDetails.validUsername, populate.loginDetails.validPassword)
  });
    it('Create Admin', () => {
      click.sidebarMenu('Admin')
      click.universalButton('Add')
      cy.pickUserRole('Admin')
      cy.status('Enabled')
      fill.employeeName()
      cy.wait(2000)
      Admin.employeeNameDropdown()
      fill.adminPageFields('Username', populate.adminDetails.username)
      fill.adminPageFields('Password', populate.adminDetails.password)
      fill.adminPageFields('Confirm password', populate.adminDetails.password)
      click.universalButton('Save')
      cy.wait(5000)
      fill.searchUsername(populate.adminDetails.username)
    });

    it('Edit Admin', () => {
      click.sidebarMenu('Admin')
      fill.searchUsername(populate.adminDetails.username)
      cy.wait(3000)
      click.editButton()
      cy.wait(5000)
      cy.pickUserRole('Admin')
      fill.adminPageFields('Username', populate.adminDetails.editedUsername)
      click.universalButton('Save')
      cy.wait(5000)
      fill.searchUsername(populate.adminDetails.editedUsername)
    });

    it('Delete Admin', () => {
      click.sidebarMenu('Admin')
      fill.searchUsername(populate.adminDetails.editedUsername)
      cy.wait(5000)
      click.deleteButton()
      click.confirmDelete()
      cy.wait(2000)
      fill.searchUsername(populate.adminDetails.editedUsername)
    });
});

describe('Employee', () => {
  beforeEach(() => {
    cy.Loginhelper(populate.loginDetails.validUsername, populate.loginDetails.validPassword)
  });
    it('Create Employee', () => {
      click.sidebarMenu('PIM')
      click.universalButton('Add')
      fill.firstname()
      fill.lastname()
      fill.employeeId()
      click.clickPicture
      click.uploadPicure()
      click.universalButton('Save')
      cy.wait(5000)
    });

    it('Edit', () => {
      click.sidebarMenu('PIM')
      fill.searchEmployeeID(populate.employeeDetails.employeeId)
      cy.wait(3000)
      click.editButton()
      cy.wait(5000)
      fill.firstname()
      click.universalButton('Save')
    });

    it('Delete', () => {
      click.sidebarMenu('PIM')
      fill.searchEmployeeID(populate.employeeDetails.employeeId)
      cy.wait(3000)
      click.deleteButton()
      click.confirmDelete()
      cy.wait(2000)
      fill.searchEmployeeID(populate.employeeDetails.employeeId)
    });
});