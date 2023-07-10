import { rest } from "msw";
import { baseUrl, idEndpoint, productEndpoint } from "../api/apiConstants";
import { mobilesResponse, mobileResponse } from "./mobilesMocks";

export const handlers = [
  rest.get(`${baseUrl}${productEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mobilesResponse)),
  ),
  rest.get(`${baseUrl}${productEndpoint}${idEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mobileResponse)),
  ),
];

export const errorHandlers = [
  rest.get(`${baseUrl}${productEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(500)),
  ),
  rest.get(`${baseUrl}${productEndpoint}${idEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(500)),
  ),
];
