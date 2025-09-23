/// <reference types="cypress" />

// Custom command to select DOM element by data-test attribute.
// Usage: cy.getByData('selector') will select elements with [data-test="selector"].
declare namespace Cypress {
  interface Chainable {
    getByData(selector: string): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})
