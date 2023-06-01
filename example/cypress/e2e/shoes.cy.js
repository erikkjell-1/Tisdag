describe('allows the user to book shoes for the amount of players and remove shoes if they click an invalid amount', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')

      cy.get('input').first().type('2023-09-10');

      cy.wait(1000);
  
      cy.get('input').eq(1).type('17.00');
  
      cy.wait(1000);
  
      cy.get('input').eq(2).type('2');
  
      cy.wait(1000);
  
      cy.get('input').eq(3).type('2');
  
      cy.wait(1000);
  
      cy.get('button').first().click()
  
      cy.wait(1000);
  
      cy.get('input').eq(4).type('43');
  
      cy.wait(1000);
  
      cy.get('button').eq(1).click()
  
      cy.wait(1000);
  
      cy.get('input').eq(5).type('42');
  
      cy.get('button').eq(2).click()
  
      cy.wait(1000);
  
      cy.get('button').eq(2).click()

    })
});