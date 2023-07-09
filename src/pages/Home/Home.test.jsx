import renderWithProviders from "../../utils/renderWithProviders";
import Home from "./Home";
import useGetMobiles from "../../hooks/useGetMobiles/useGetMobiles";
import { screen } from "@testing-library/react";
import { getRandomMobileList } from "../../mocks/mobilesFactory";

jest.mock("../../hooks/useGetMobiles/useGetMobiles");

describe("Given a Home component", () => {
  describe("When rendered and the fetched data is a list of 10 mobiles", () => {
    const mockListOfMobiles = getRandomMobileList(10);

    beforeEach(() => {
      useGetMobiles.mockReturnValue({
        isLoading: false,
        data: mockListOfMobiles,
      });

      renderWithProviders(<Home />);
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
