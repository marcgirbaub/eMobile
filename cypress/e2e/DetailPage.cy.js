describe("When navigating to the detail page of the Acer Liquid Z6 Plus", () => {
  it("Then it should its price equal to 250 €", () => {
    const price = "250 €";

    cy.visit("/product/cGjFJlmqNPIwU59AOcY8H");

    cy.contains(price);
  });

  describe("And clicking on the `Black` button and Add to cart button", () => {
    it("It should add the product to the cart and number 1 should be shown on the cart badge", () => {
      const colorOption = "Black";
      const addButton = "Add to cart";

      cy.visit("/product/cGjFJlmqNPIwU59AOcY8H");

      cy.contains(colorOption).click();
      cy.contains(addButton).click();

      cy.get(".MuiBadge-badge").contains("1");
    });
  });
});
