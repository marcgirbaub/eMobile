import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import Mobile from "./Mobile";
import { mockMobile } from "../../mocks/mobilesMocks";

describe("Given a Mobile component", () => {
  describe("When rendered with an Acer mobile", () => {
    const acerMobile = mockMobile;

    beforeEach(() => {
      renderWithProviders(<Mobile mobile={acerMobile} />);
    });

    test("Then it should show it name along with the model", () => {
      const expectedName = `${acerMobile.brand} - ${acerMobile.model}`;

      const mobileNameElement = screen.getByRole("heading", {
        level: 3,
        name: expectedName,
      });

      expect(mobileNameElement).toBeInTheDocument();
    });

    test("Then it should show its image with an alt text", () => {
      const altText = `The ${acerMobile.model} from ${acerMobile.brand}`;

      const imageElement = screen.getByRole("img", { name: altText });

      expect(imageElement).toBeInTheDocument();
    });
  });
});
