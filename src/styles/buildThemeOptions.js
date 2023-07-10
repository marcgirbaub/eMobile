import {
  backgraoundButtonDark,
  backgroundButtonLight,
  backgroundDark,
  backgroundLight,
  darkColor,
  lightColor,
  secondaryTextColorDark,
  secondaryTextColorLight,
} from "./colors";

const buildThemeOptions = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: { default: backgroundLight },
          secondary: { main: secondaryTextColorLight, light: "#d9dbdd" },
          backgroundButton: backgroundButtonLight,
          contrast: darkColor,
        }
      : {
          background: { default: backgroundDark },
          secondary: { main: secondaryTextColorDark, light: "#717171" },
          backgroundButton: backgraoundButtonDark,
          contrast: lightColor,
        }),
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
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: { color: darkColor },
        colorPrimary: {
          "&.Mui-checked": {
            color: lightColor,
          },
        },
        track: {
          opacity: 0.4,
          backgroundColor: darkColor,
          ".Mui-checked.Mui-checked + &": {
            opacity: 0.6,
            backgroundColor: lightColor,
          },
        },
      },
    },
  },
});

export default buildThemeOptions;
