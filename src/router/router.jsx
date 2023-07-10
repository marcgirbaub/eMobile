import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import endpoints from "./endpoints";
import DetailPage from "../pages/DetailPage/DetailPage";

const routes = [
  {
    element: <App />,
    children: [
      { path: endpoints.home, element: <Home /> },
      { path: endpoints.detail, element: <DetailPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
