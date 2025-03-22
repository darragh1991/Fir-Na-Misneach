/// <reference types="cypress" />

describe('Faq Page', () => {
  it('P should render the faq page as expected', () => {

    cy.GIVEN('the user is on the faq page'); {

      cy.intercept('GET', '/api/faqs', { fixture: 'faqs.json' }).as('faqs');
      cy.visit('/faq');
    }
  });
});
