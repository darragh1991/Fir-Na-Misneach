describe('Error Handling', () => {
  it('P: should navigate to /error on 500 error', () => {

    cy.GIVEN('an api endpoint that returns a 500 error'); {
      cy.intercept('GET', '/api/some-endpoint', {
        statusCode: 500,
      }).as('serverError');
    }

    cy.WHEN('I visit /some-page'); {
      cy.visit('/some-page');
    }

    cy.THEN('I should see the error page'); {
      cy.url().should('include', '/error');
    }

    cy.AND('the error compoonent should exist'); {
      cy.get('app-error').should('exist');
    }
  });
});
