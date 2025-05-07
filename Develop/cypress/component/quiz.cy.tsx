describe('Quiz App End-to-End', () => {
  it('Completes a full quiz session', () => {
    cy.visit('/');
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').each(($btn) => cy.wrap($btn).click());
    cy.get('.alert-success').should('contain', 'Your score');
  });
});
