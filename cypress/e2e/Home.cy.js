describe("When navigating to the home page", () => {
  it("Then it should show a heading level 1 with the page title", () => {
    cy.visit("/");

    cy.get("h1").contains(
      "Welcome to your one-stop shop for brand new phones!",
    );
  });

  it("Then it should show the mobile Iconia Talk S", () => {
    const model = "Iconia Talk S";

    cy.visit("/");

    cy.contains(model);
  });
});
