import { Link } from "react-router-dom";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import HeaderStyled from "./HeaderStyled";

const Header = () => (
  <HeaderStyled className="header">
    <div className="header__container container">
      <Link to="" className="header__main-link">
        <StayCurrentPortraitIcon />
        <span className="header__title">eMobile</span>
      </Link>
      <div className="header__actions">
        <ThemeSwitch />
        <Badge color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </div>
    </div>
  </HeaderStyled>
);

export default Header;
