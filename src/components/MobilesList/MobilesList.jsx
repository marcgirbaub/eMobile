import { Link } from "react-router-dom";
import Mobile from "../Mobile/Mobile";
import MobilesListStyled from "./MobilesListStyled";
import endpoints from "../../router/endpoints";

const MobilesList = ({ mobiles }) => (
  <MobilesListStyled>
    {mobiles.map((mobile) => (
      <li key={mobile.id}>
        <Link to={`/${endpoints.product}${mobile.id}`}>
          <Mobile mobile={mobile} />
        </Link>
      </li>
    ))}
  </MobilesListStyled>
);

export default MobilesList;
