
/// <reference types="cypress" />


describe('Sample test', () => {


  it('Valid', () => {
    cy.log("launch url")
    cy.visit('https://example.cypress.io/todo')
    cy.log("verify assertions")
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

  it('Invalid', () => {
    cy.log("launch url")
    cy.visit('https://example.cypress.io/todo')
    cy.log("verify assertions")
    cy.get('.todo-list li').should('have.length', 2)
    cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    cy.log("again launch url")
    cy.visit('https://exampl.io/todo')
  })


    it('Example Test Case', function () {
        cy.allure().step('Visit Example Page', () => {
            cy.visit('https://example.com');
        });

        cy.allure().step('Click Example Button', () => {
            cy.get('button').click();
        });

        cy.allure().step('Check Result', () => {
            cy.get('result').should('contain', 'Expected Result');
        });
    
});

  // afterEach(function () {
  //   if (this.currentTest.state === 'failed') {
  //     cy.screenshot(`${this.currentTest.title} - ${this.currentTest.state}`);
  //     const screenshotFileName = `${this.currentTest.title} - ${this.currentTest.state}.png`;
  //     cy.allure().attachment(screenshotFileName, 'image/png');
  //   }
  // });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
        const screenshotFileName = `${this.currentTest.title} -- failed.png`;
        cy.screenshot(screenshotFileName);
        cy.allure().attachment('Screenshot', `./cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`, 'image/png');
    }
});



})
