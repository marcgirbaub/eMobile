import MobileStyled from "./MobileStyled";

const Mobile = ({ mobile }) => (
  <MobileStyled>
    <div className="mobile__image-container">
      <img
        className="mobile__image"
        src={mobile.imgUrl}
        alt={`The ${mobile.model} from ${mobile.brand}`}
        width={170}
        height={220}
      />
    </div>
    <div className="mobile__info">
      <h3 className="mobile__model">{`${mobile.brand} - ${mobile.model}`}</h3>
      {mobile.price === "" ? (
        <span className="mobile__price">{140}€</span>
      ) : (
        <span className="mobile__price">{`${mobile.price}€`}</span>
      )}
    </div>
  </MobileStyled>
);

export default Mobile;
