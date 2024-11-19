describe('Login page', () => {
  it('should display the login form', () => {
    cy.visit('/login');
    cy.get('app-login').should('exist');
  });
});
