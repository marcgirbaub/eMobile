import { screen } from "@testing-library/react";
import App from "./App";
import renderRouterWithProviders from "./utils/renderRouterWithProviders";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the header with the title of the page", () => {
      const pageTitle = "eMobile";

      renderRouterWithProviders(<App />);

      const pageTitleElement = screen.getByText(pageTitle);

      expect(pageTitleElement).toBeInTheDocument();
    });
  });
});
