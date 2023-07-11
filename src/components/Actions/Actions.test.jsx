import renderWithProviders from "../../utils/renderWithProviders";
import Actions from "./Actions";
import { mobileResponse } from "../../mocks/mobilesMocks";
import { screen } from "@testing-library/react";

describe("Given an Actions component", () => {
  describe("When rendered with the options of the Acer Iconia Talk S", () => {
    const { options } = mobileResponse;

    test("Then it should show two options storages for 16 GB and 32 GB", () => {
      const firstStorageOption = "16 GB";
      const secondStorageOption = "32 GB";

      renderWithProviders(<Actions options={options} />);

      const firstStorageOptionElement = screen.getByRole("button", {
        name: firstStorageOption,
      });
      const secondStorageOptionElement = screen.getByRole("button", {
        name: secondStorageOption,
      });

      expect(firstStorageOptionElement).toBeInTheDocument();
      expect(secondStorageOptionElement).toBeInTheDocument();
    });

    test("Then it should show a button with the text `Add to cart`", () => {
      const textButton = "Add to cart";

      renderWithProviders(<Actions options={options} />);

      const addToCartButton = screen.getByRole("button", { name: textButton });

      expect(addToCartButton).toBeInTheDocument();
    });
  });
});
