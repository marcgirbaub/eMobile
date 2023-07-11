import { Link, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/redux";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import HeaderStyled from "./HeaderStyled";
import endpoints from "../../router/endpoints";

const Header = () => {
  const location = useLocation();
  const { id } = useParams();

  const cart = useAppSelector((state) => state.mobiles.cart);

  const getActiveClass = (path) =>
    location.pathname === path ? "breadcrumbs__link--active" : "";

  return (
    <HeaderStyled className="header">
      <div className="header__container container">
        <Link to="/" className="header__main-link">
          <StayCurrentPortraitIcon />
          <span className="header__title">eMobile</span>
        </Link>
        <nav className="header__breadcrumbs breadcrumbs">
          <Link to="/" className={`breadcrumbs__link ${getActiveClass("/")}`}>
            Home
          </Link>
          {location.pathname.includes("product") && (
            <>
              <ArrowForwardIosIcon fontSize="small" sx={{ margin: "0 4px" }} />
              <Link
                to={location.pathname}
                className={`breadcrumbs__link ${getActiveClass(
                  `/${endpoints.product}${id}`,
                )}`}
              >
                Product
              </Link>
            </>
          )}
        </nav>
        <div className="header__actions">
          <ThemeSwitch />
          <Badge color="secondary" badgeContent={cart}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
