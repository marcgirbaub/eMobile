import { Switch } from "@mui/material";
import { useContext } from "react";
import ThemeContext from "../../redux/contexts/ThemeContext";

const ThemeSwitch = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleMode}
      checked={mode === "dark"}
      edge="end"
      data-testid="dark-theme-switch"
    />
  );
};

export default ThemeSwitch;
