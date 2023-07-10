import { screen, fireEvent } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import Home from "./Home";
import useGetMobiles from "../../hooks/useGetMobiles/useGetMobiles";
import { getRandomMobileList } from "../../mocks/mobilesFactory";

jest.mock("../../hooks/useGetMobiles/useGetMobiles");

describe("Given a Home component", () => {
  const mockListOfMobiles = getRandomMobileList(10);

  beforeEach(() => {
    useGetMobiles.mockReturnValue({
      isLoading: false,
      data: mockListOfMobiles,
    });

    renderWithProviders(<Home />);
  });

  describe("When rendered and the fetched data is a list of 10 mobiles", () => {
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

  describe("When rendered and the user introduces the model of a mobile in the input", () => {
    const searchValue = mockListOfMobiles[0].model;

    test("Then it should show the Mobile searched", () => {
      const searchInput = screen.getByRole("textbox", { name: "Search" });

      fireEvent.change(searchInput, { target: { value: searchValue } });

      const mobileNameElement = screen.getByText(
        `${mockListOfMobiles[0].brand} - ${searchValue}`,
      );

      expect(mobileNameElement).toBeInTheDocument();
    });

    test("Then it should not show a mobile that does not match the search criteria", () => {
      const unsearchedMobile = mockListOfMobiles[1];

      const searchInput = screen.getByRole("textbox", { name: "Search" });

      fireEvent.change(searchInput, { target: { value: searchValue } });

      const mobileNameElement = screen.queryByText(
        `${unsearchedMobile.brand} - ${unsearchedMobile.model}`,
      );

      expect(mobileNameElement).not.toBeInTheDocument();
    });
  });
});
