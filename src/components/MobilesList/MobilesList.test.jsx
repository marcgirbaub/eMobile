import renderWithProviders from "../../utils/renderWithProviders";
import { screen } from "@testing-library/react";
import { getRandomMobileList } from "../../mocks/mobilesFactory";
import MobilesList from "./MobilesList";

describe("Given a MobilesList component", () => {
  describe("When it receives a list of 10 mobiles", () => {
    const mockListOfMobiles = getRandomMobileList(10);

    beforeEach(() => {
      renderWithProviders(<MobilesList mobiles={mockListOfMobiles} />);
    });

    test("Then it should show every mobile brand and model", () => {
      mockListOfMobiles.forEach((mobile) =>
        expect(
          screen.getByText(`${mobile.brand} - ${mobile.model}`),
        ).toBeInTheDocument(),
      );
    });

    test("Then it should show their images", () => {
      mockListOfMobiles.forEach((mobile) => {
        expect(
          screen.getByRole("img", {
            name: `The ${mobile.model} from ${mobile.brand}`,
          }),
        ).toBeInTheDocument();
      });
    });
  });
});
