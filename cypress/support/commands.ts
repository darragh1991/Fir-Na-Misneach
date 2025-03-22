/// <reference types="cypress" />


Cypress.Commands.add('GIVEN', (givenStatement, autoEnd=true ) => {
  return bddLogger('Given', givenStatement, autoEnd);
});

Cypress.Commands.add('WHEN', (givenStatement, autoEnd=true ) => {
  return bddLogger('When', givenStatement, autoEnd);
});

Cypress.Commands.add('THEN', (givenStatement, autoEnd=true ) => {
  return bddLogger('Then', givenStatement, autoEnd);
});

Cypress.Commands.add('AND', (givenStatement, autoEnd=true ) => {
  return bddLogger('And', givenStatement, autoEnd);
});

Cypress.Commands.add('getQaTag', (qaTag) => {
  return cy.get( `[data-qa]="${qaTag}"`, { log: false });
});

function bddLogger(step: string, statement: unknown, autoEnd=true) {
  return Cypress.log({
    name: step,
    message: statement,
    autoEnd: autoEnd
  });
}
