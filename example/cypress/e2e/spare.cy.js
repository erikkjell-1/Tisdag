describe('all the tests combined + getting the bookingnumber/price', () => {
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

    cy.get('button').last().click()

    cy.wait(1000);

    cy.get('input').eq(0).should('be.visible');

    cy.get('input').eq(1).should('be.visible');

    cy.get('input').eq(2).should('be.visible');

    cy.get('input').eq(3).should('be.visible');

    cy.get('p').eq(1).should('be.visible');

  })
});