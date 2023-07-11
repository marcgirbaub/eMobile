import { rest } from "msw";
import {
  baseUrl,
  cartEndpoint,
  idEndpoint,
  productEndpoint,
} from "../api/apiConstants";
import {
  mobilesResponse,
  mobileResponse,
  addToCartResponse,
} from "./mobilesMocks";

export const handlers = [
  rest.get(`${baseUrl}${productEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mobilesResponse)),
  ),
  rest.get(`${baseUrl}${productEndpoint}${idEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(mobileResponse)),
  ),

  rest.post(`${baseUrl}${cartEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json(addToCartResponse)),
  ),
];

export const errorHandlers = [
  rest.get(`${baseUrl}${productEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(500)),
  ),
  rest.get(`${baseUrl}${productEndpoint}${idEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(500)),
  ),
  rest.post(`${baseUrl}${cartEndpoint}`, (_req, res, ctx) =>
    res(ctx.status(400)),
  ),
];
