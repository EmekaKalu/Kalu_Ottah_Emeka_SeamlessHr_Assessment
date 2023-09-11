
class Forms{
    username(text){
        return cy.get('input[name="username"]')
        .type(text)
    }
    password(text){
        return cy.get('input[name="password"]')
        .type(text)
    }
    employeeId(){
        function generateRandomNumber() {
            const min = 270; // Minimum value (0262)
            const max = 300; // Maximum value (0300)
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            return random.toString().padStart(4, '0');
        }
        
        const randomFourDigitNumber = generateRandomNumber();
        const testDataJson = require('../../fixtures/testData.json')
        testDataJson.employeeDetails.employeeId = randomFourDigitNumber
  
        return cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input')
        .clear()
        .type(randomFourDigitNumber)
        .writeFile('cypress/fixtures/testData.json', testDataJson)
    }
    firstname(){
        const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah"];

        function generateRandomName() {
            const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            return randomFirstName;
        }

        // Generate a random name
        const randomName = generateRandomName();
        const testDataJson = require('../../fixtures/testData.json')
        testDataJson.employeeDetails.firstname = randomName
        

        return cy.get('input[name="firstName"]')
        .clear()
        .type(randomName)
        .writeFile('cypress/fixtures/testData.json', testDataJson)
        
    }
    lastname(){
        const lastNames = ["Smith", "Johnson", "Brown", "Davis", "Miller", "Wilson"];

        // Function to generate a random name
        function generateRandomName() {
            const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            return randomLastName;
        }

        // Generate a random name
        const randomName = generateRandomName();
        const testDataJson = require('../../fixtures/testData.json')
        testDataJson.employeeDetails.lastname = randomName

        return cy.get('input[name="lastName"]')
        .clear()
        .type(randomName)
        .writeFile('cypress/fixtures/testData.json', testDataJson)
    }
    employeeName(){
        function getRandomLetter() {
            const randomNumber = Math.floor(Math.random() * 26); // Random number between 0 and 25
            const randomLetter = String.fromCharCode(65 + randomNumber); // ASCII code for 'A' is 65
            return randomLetter;
        }
        
        const randomLetter = getRandomLetter();
        return cy.get('input[placeholder="Type for hints..."]')
        .click()
        .type(randomLetter)
    }
    adminPageFields(text, text2){
        if (text == 'Username') {
            return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .clear()
            .type(text2)
        }
        if (text == 'Password') {
            return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .clear()
            .type(text2)
        }
        else {
            return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .clear()
            .type(text2)
        }
    }
    searchUsername(text){
        return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .type(text)
            .type('{enter}')
    }
    searchEmployeeID(text){
        return cy.get(':nth-child(2) > .oxd-input')
        .type(text)
        .type('{enter}')
    }
}
export default Forms