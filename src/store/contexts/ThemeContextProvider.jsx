import { useCallback, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import useMaterialTheme from "../../hooks/useMaterialTheme/useMaterialTheme";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [usedMode, setUsedMode] = useState(
    localStorage.getItem("mode") ?? "light",
  );

  const theme = useMaterialTheme(usedMode);

  const handleToggleMode = useCallback(() => {
    if (usedMode === "light") {
      setUsedMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      setUsedMode("light");
      localStorage.setItem("mode", "light");
    }
  }, [theme]);

  const store = useMemo(() => ({
    mode: usedMode,
    toggleMode: handleToggleMode,
  }));

  return (
    <ThemeContext.Provider value={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
