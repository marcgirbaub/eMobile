import { useCallback, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material";
import useMaterialTheme from "../../hooks/useMaterialTheme/useMaterialTheme";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [usedMode, setUsedMode] = useState("light");

  const theme = useMaterialTheme(usedMode);

  const handleToggleMode = useCallback(() => {
    if (usedMode === "light") {
      setUsedMode("dark");
    } else {
      setUsedMode("light");
    }
  }, [theme]);

  const store = useMemo(() => ({
    mode: usedMode,
    toggleMode: handleToggleMode,
  }));

  return (
    <ThemeContext.Provider value={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
