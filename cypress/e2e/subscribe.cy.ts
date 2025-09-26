describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("allows users to subscribe to the email list", () => {
    cy.getByData("email-input").type("crisss@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("crisss@gmail.com")
  })

  it("does NOT allows a invalid email adress", () => {
    cy.getByData("email-input").type("crisss")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it("shows an error message if the email is already registered", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("john@example.com")
  })
})
