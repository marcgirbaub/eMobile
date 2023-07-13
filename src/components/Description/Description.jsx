import DescriptionStyled from "./DescriptionStyled";

const Description = ({ mobile }) => {
  const getValueToDisplay = (value) =>
    value === "" || value === "-" ? "n/a" : value;

  const mobileCharacteristics = [
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

  return (
    <DescriptionStyled className="description">
      <h1>
        {mobile.brand} {mobile.model}
      </h1>
      {mobile.price === "" ? (
        <span className="description__price">140 €</span>
      ) : (
        <span className="description__price">{mobile.price} €</span>
      )}
      <div className="horizontal-separator"></div>
      <ul className="description__list">
        {mobileCharacteristics.map((characteristics) => (
          <li key={characteristics[0]}>
            <span className="description__title">
              {characteristics[0]}{" "}
              <span className="description__value">{characteristics[1]}</span>
            </span>
          </li>
        ))}
      </ul>
    </DescriptionStyled>
  );
};

export default Description;
