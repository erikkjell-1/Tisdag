describe('allows the user to book multiple lanes/players on a specific date and time', () => {
    it('passes', () => {
      cy.visit('http://localhost:5177/')
  
      cy.wait(1000);
  
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

      cy.wait(1000);

      cy.get('button').last().click()
      
      cy.wait(1000);

      cy.get('input').eq(0).should('have.text', '')
      cy.get('input').eq(1).should('have.text', '')
      cy.get('input').eq(2).should('have.text', '')
      cy.get('input').eq(3).should('have.text', '')
      cy.get('p').eq(1).should('have.text', '440 sek')

      cy.get('button').last().click()


    })
});