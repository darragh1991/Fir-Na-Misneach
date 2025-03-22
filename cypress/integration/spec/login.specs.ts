describe('Login page', () => {
  it('should display the login form', () => {

    cy.WHEN('the users visits the login page'); {
      cy.visit('/login');
    }

    cy.THEN('the login page should exist'); {
      cy.get('app-login').should('exist');
    }
  });
});
