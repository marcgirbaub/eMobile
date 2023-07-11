import { Switch } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useContext } from "react";
import ThemeContext from "../../store/contexts/ThemeContext";
import ThemeSwitchStyled from "./ThemeSwitchStyled";

const ThemeSwitch = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <ThemeSwitchStyled>
      <Brightness4Icon />
      <Switch
        onChange={toggleMode}
        checked={mode === "dark"}
        edge="end"
        data-testid="dark-theme-switch"
      />
    </ThemeSwitchStyled>
  );
};

export default ThemeSwitch;
