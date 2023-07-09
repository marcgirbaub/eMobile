import { screen } from "@testing-library/react";
import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show the name of the application `eMobile`", () => {
      const pageTitle = "eMobile";

      renderRouterWithProviders(<Header />);

      const pageTitleElement = screen.getByText(pageTitle);

      expect(pageTitleElement).toBeInTheDocument();
    });
  });
});
