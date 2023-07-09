import Layout from "./Layout";
import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";

describe("Given a Layout component", () => {
  describe("When rendered", () => {
    test("Then it should show the header with the title of the page", () => {
      const pageTitle = "eMobile";

      renderRouterWithProviders(<Layout />);

      const pageTitleElement = screen.getByText(pageTitle);

      expect(pageTitleElement).toBeInTheDocument();
    });
  });
});
