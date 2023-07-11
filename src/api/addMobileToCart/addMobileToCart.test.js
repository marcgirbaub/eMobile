import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import addMobileToCart from "./addMobileToCart";

describe("Given a addMobileToCart function", () => {
  const mobileId = "ZmGrkLRPXOTpxsU4jjAcv";
  const colorCode = 1000;
  const storageCode = 2000;

  describe("When called with the id `ZmGrkLRPXOTpxsU4jjAcv`, colorCode `1000` and storageCode `2000`", () => {
    test("Then it should return a response with a property count equal to 1 so that the mobile has been added to the cart", async () => {
      const expectedResponse = { count: 1 };

      const response = await addMobileToCart(mobileId, colorCode, storageCode);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When called and there is an error in the request", () => {
    beforeEach(() => server.resetHandlers(...errorHandlers));

    test("Then it should throw an error", async () => {
      await expect(
        addMobileToCart(mobileId, colorCode, storageCode),
      ).rejects.toThrow();
    });
  });
});
