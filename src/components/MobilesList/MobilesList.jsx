import { Link } from "react-router-dom";
import Mobile from "../Mobile/Mobile";
import MobilesListStyled from "./MobilesListStyled";

const MobilesList = ({ mobiles }) => (
  <MobilesListStyled>
    {mobiles.map((mobile) => (
      <li key={mobile.id}>
        <Link to={`/product/${mobile.id}`}>
          <Mobile mobile={mobile} />
        </Link>
      </li>
    ))}
  </MobilesListStyled>
);

export default MobilesList;
