import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const routes = [
  { element: <App />, children: [{ path: "", element: <Home /> }] },
];

export const router = createBrowserRouter(routes);
