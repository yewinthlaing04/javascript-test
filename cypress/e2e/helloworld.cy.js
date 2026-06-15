context("index.html", () => {
  beforeEach(() => {
    cy.visit("../../app/index.html");
  });
  it('should contain a paragraph with "Hello World!"', () => {
    cy.get("p").should("have.text", "Hello world !!!");
  });
});
