import { rest } from "msw";
import { baseUrl, productEndpoint } from "../api/apiConstants";
import { mobilesResponse } from "./mobilesMocks";

export const handlers = [
  rest.get(`${baseUrl}${productEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mobilesResponse)),
  ),
];

export const errorHandlers = [
  rest.get(`${baseUrl}${productEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(500)),
  ),
];
