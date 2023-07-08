import { useCallback, useState } from "react";
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

  return (
    <ThemeContext.Provider
      value={{
        mode: usedMode,
        toggleMode: handleToggleMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
