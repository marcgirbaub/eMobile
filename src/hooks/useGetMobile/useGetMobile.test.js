import { mobileResponse } from "../../mocks/mobilesMocks";
import { useQuery } from "react-query";
import useGetMobile from "./useGetMobile";

const mockedUseQuery = useQuery;

jest.mock("react-query");

describe("Given the useGetMobile hook", () => {
  const mobileId = "ZmGrkLRPXOTpxsU4jjAcv";

  describe("When called and the data is loaded", () => {
    test("Then it should return the detail of the mobile in the data property", () => {
      const expectedMobileResponse = mobileResponse;

      mockedUseQuery.mockReturnValue({
        isLoading: false,
        data: mobileResponse,
        error: undefined,
        isError: false,
        isFetching: false,
      });

      const response = useGetMobile(mobileId);

      expect(response.isLoading).toBe(false);
      expect(response.data).toStrictEqual(expectedMobileResponse);
    });
  });

  describe("Whan called and the data is still being loaded", () => {
    test("Then it should return a property isLoading equal to true", () => {
      mockedUseQuery.mockReturnValue({
        isLoading: true,
        data: undefined,
      });

      const response = useGetMobile(mobileId);

      expect(response.isLoading).toBe(true);
    });
  });
});
