import renderRouterWithProviders from "../../utils/renderRouterWithProviders";
import DetailPage from "./DetailPage";
import useGetMobile from "../../hooks/useGetMobile/useGetMobile";
import { mobileResponse } from "../../mocks/mobilesMocks";
import { screen } from "@testing-library/react";

jest.mock("../../hooks/useGetMobile/useGetMobile");

describe("Given a DetailPage component", () => {
  describe("When rendered with the id of the Acer Iconia Talk S", () => {
    test("Then it should show its image", () => {
      const mockMobile = mobileResponse;
      const altImageText = `The ${mobileResponse.model} from ${mobileResponse.brand}`;

      useGetMobile.mockReturnValue({ data: mockMobile, isLoading: false });

      renderRouterWithProviders(<DetailPage />);

      const mobileImage = screen.getByRole("img", { name: altImageText });

      expect(mobileImage).toBeInTheDocument();
    });
  });
});
