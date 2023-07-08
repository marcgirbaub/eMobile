import { backgroundDark, backgroundLight } from "./colors";

const buildThemeOptions = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? { background: { default: backgroundLight } }
      : { background: { default: backgroundDark } }),
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.4rem",
      fontWeight: 500,
    },
  },
});

export default buildThemeOptions;
