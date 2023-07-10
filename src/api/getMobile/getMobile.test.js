import getMobile from "./getMobile";
import { mobileResponse } from "../../mocks/mobilesMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a getMobile function", () => {
  const mobileId = "ZmGrkLRPXOTpxsU4jjAcv";

  describe("When called with the id `ZmGrkLRPXOTpxsU4jjAcv`", () => {
    test("Then it should return the detail of the Acer Iconia mobile", async () => {
      const expectedMobileResponse = mobileResponse;

      const response = await getMobile(mobileId);

      expect(response).toStrictEqual(expectedMobileResponse);
    });
  });

  describe("When called and there is an error in the request", () => {
    beforeEach(() => server.resetHandlers(...errorHandlers));

    test("Then it should throw an error", async () => {
      await expect(getMobile(mobileId)).rejects.toThrow();
    });
  });
});
