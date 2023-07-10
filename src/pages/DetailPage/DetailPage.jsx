import { useParams } from "react-router-dom";
import useGetMobile from "../../hooks/useGetMobile/useGetMobile";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = () => {
  const { id } = useParams();
  const { data: mobile, isLoading } = useGetMobile(id);

  const getValueToDisplay = (value) =>
    value === "" || value === "-" ? "n/a" : value;

  let mobileCharacteristics = [];

  if (!isLoading) {
    mobileCharacteristics = [
      ["Brand:", mobile.brand],
      ["Model:", mobile.model],
      ["CPU:", mobile.cpu],
      ["RAM:", mobile.ram],
      ["Operating System:", mobile.os],
      ["Display Resolution:", mobile.displayResolution],
      ["Battery:", getValueToDisplay(mobile.battery)],
      ["Primary Camera:", [...mobile.primaryCamera].join(" ")],
      [
        "Secondary Camera:",
        mobile.secondaryCmera === "No"
          ? "n/a"
          : [...mobile.secondaryCmera].join(" "),
      ],
      ["Dimensions:", getValueToDisplay(mobile.dimentions)],
      ["Weight:", getValueToDisplay(mobile.weight)],
    ];
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <DetailPageStyled className="detail">
      <img
        src={mobile.imgUrl}
        alt={`The ${mobile.model} from ${mobile.brand}`}
        width={340}
        height={440}
        className="detail__image"
      />
      <div className="detail__info info">
        <h1>
          {mobile.brand} {mobile.model}
        </h1>
        <span className="info__price">{mobile.price} €</span>
        <div className="horizontal-separator"></div>
        <ul className="info__list">
          {mobileCharacteristics.map((characteristics) => (
            <li key={characteristics[0]}>
              <span className="info__title">
                {characteristics[0]}{" "}
                <span className="info__value">{characteristics[1]}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="horizontal-separator"></div>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
