describe('allows the user to book multiple lanes/players on a specific date and time', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')
  
      cy.wait(1000);
  
      cy.get('input').first().type('2023-09-10');
  
      cy.wait(1000);
  
      cy.get('input').eq(1).type('17.00');
  
      cy.wait(1000);
  
      cy.get('input').eq(2).type('2');
  
      cy.wait(1000);
  
      cy.get('input').eq(3).type('2');
  
      cy.wait(1000);

    })
});