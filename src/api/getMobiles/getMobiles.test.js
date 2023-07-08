import getMobiles from "./getMobiles";
import { mobilesResponse } from "../../mocks/mobilesMocks";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a getMobiles function", () => {
  describe("When called", () => {
    test("Then it should return a list of two mobiles", async () => {
      const expectedMobilesResponse = mobilesResponse;

      const response = await getMobiles();

      expect(response).toStrictEqual(expectedMobilesResponse);
    });
  });

  describe("When called and there is an error in the request", () => {
    beforeEach(() => server.resetHandlers(...errorHandlers));

    test("Then it should throw an error", async () => {
      await expect(getMobiles()).rejects.toThrow();
    });
  });
});
