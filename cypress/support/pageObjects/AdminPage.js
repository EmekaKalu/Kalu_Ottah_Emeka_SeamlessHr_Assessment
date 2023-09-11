class adminpage {
    dropdown(text){
        if (text == 'userRole') {
            return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click();
        } 
        else {
            return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
            .click();
        }
    }
    selectDropdown(text){
        return cy.get('div[role="option"]')
        .contains(text)
        .click();
    }
    employeeNameDropdown(){
        return cy.get('div[role="option"]')
        .first()
        .click()
    }
}
export default adminpage