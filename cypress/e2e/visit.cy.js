describe("When nagivating to the home page and clicking in the Acer Iconia Talk S", () => {
  it("Then the url should contain the `product` endpoint", () => {
    const urlEndpoint = "product/ZmGrkLRPXOTpxsU4jjAcv";

    cy.visit("/");

    cy.get('a[href*="product/ZmGrkLRPXOTpxsU4jjAcv"]').click();

    cy.url().should("include", urlEndpoint);
  });
});
