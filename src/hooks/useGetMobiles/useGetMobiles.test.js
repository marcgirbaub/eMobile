import { mobilesResponse } from "../../mocks/mobilesMocks";
import { useQuery } from "react-query";
import useGetMobiles from "./useGetMobiles";

const mockedUseQuery = useQuery;

jest.mock("react-query");

describe("Given the useGetMobiles hook", () => {
  describe("When called and the data is loaded", () => {
    test("Then it should return a list of two mobiles in the data property", () => {
      const expectedMobilesResponse = mobilesResponse;

      mockedUseQuery.mockReturnValue({
        isLoading: false,
        data: mobilesResponse,
        error: undefined,
        isError: false,
        isFetching: false,
      });

      const response = useGetMobiles();

      expect(response.isLoading).toBe(false);
      expect(response.data).toStrictEqual(expectedMobilesResponse);
    });
  });

  describe("Whan called and the data is still being loaded", () => {
    test("Then it should return a property isLoading equal to true", () => {
      mockedUseQuery.mockReturnValue({
        isLoading: true,
        data: undefined,
      });

      const response = useGetMobiles();

      expect(response.isLoading).toBe(true);
    });
  });
});
