import { createTheme } from "@mui/material";
import buildThemeOptions from "../../styles/buildThemeOptions";

const useMaterialTheme = (mode) => {
  const themeOptions = buildThemeOptions(mode);

  return createTheme(themeOptions);
};

export default useMaterialTheme;
