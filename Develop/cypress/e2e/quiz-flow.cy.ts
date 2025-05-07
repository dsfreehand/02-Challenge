describe('Quiz App End-to-End', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'mockQuestions.json' }).as('getMockQuestions');
    cy.visit('/');
  });

  it('Starts quiz with mock data', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getMockQuestions');
    cy.get('h2').should('contain', 'What is the capital of France?');
  });

  it('Handles answer selection with mock data', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getMockQuestions');
    cy.get('button').eq(1).click();
    cy.get('button').eq(2).click();
    cy.get('h2').should('contain', 'What is 2 + 2?');
  });
});
