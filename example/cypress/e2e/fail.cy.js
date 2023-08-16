describe('a test that gets a fail', () => {
    it('passes', () => {
      cy.visit('http://localhost:5177/')
  
      cy.wait(1000);
  
      cy.get('input').first().type('2023-08-27');
  
      cy.wait(1000);
  
      cy.get('input').eq(1).type('13.00');
  
      cy.wait(1000);
  
      cy.get('input').eq(2).type('1');
  
      cy.wait(1000);
  
      cy.get('input').eq(3).type('1');
  
      cy.wait(1000);

      cy.get('button').eq(1).click();

    })
});