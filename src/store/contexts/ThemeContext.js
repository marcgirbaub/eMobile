/* eslint-disable object-shorthand */
import { createContext } from "react";

const ThemeContext = createContext({
  mode: localStorage.getItem("mode") ?? "light",
  toggleMode: () => {},
});

export default ThemeContext;
