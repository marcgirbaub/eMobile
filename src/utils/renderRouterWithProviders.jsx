import { RouterProvider } from "react-router-dom";
import { getComponentRouter, router } from "../router/router";
import renderWithProviders from "./renderWithProviders";

const renderRouterWithProviders = (ui) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
  );
};

export default renderRouterWithProviders;
