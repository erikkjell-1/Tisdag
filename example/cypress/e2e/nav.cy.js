describe('allows the user to book multiple lanes/players on a specific date and time', () => {
    it('passes', () => {
      cy.visit('http://localhost:5177/')
  
  cy.get('img').first().click()

  cy.wait(1000);
  
  cy.get('a').last().click();

  cy.wait(1000);

  cy.get('img').first().click()

  cy.wait(1000);

  cy.get('a').first().click();

    })
});