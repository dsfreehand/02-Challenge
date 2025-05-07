import Quiz from '../../client/src/components/Quiz';
import { mount } from '@cypress/react';

describe('Quiz Component', () => {
  it('Displays questions and handles answers correctly', () => {
    const mockQuestions = [
      { 
        question: 'Capital of France?', 
        answers: [{ text: 'Paris', isCorrect: true }]
      }
    ];
    
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('contain', mockQuestions[0].question);
  });
});
