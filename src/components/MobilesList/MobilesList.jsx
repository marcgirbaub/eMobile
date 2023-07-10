import Mobile from "../Mobile/Mobile";
import MobilesListStyled from "./MobilesListStyled";

const MobilesList = ({ mobiles }) => (
  <MobilesListStyled>
    {mobiles.map((mobile) => (
      <li key={mobile.id}>
        <Mobile mobile={mobile} />
      </li>
    ))}
  </MobilesListStyled>
);

export default MobilesList;
