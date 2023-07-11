import { useState } from "react";
import ActionsStyled from "./ActionsStyled";

const Actions = ({ options: { colors, storages } }) => {
  const [selectedStorage, setSelectedStorage] = useState(
    storages.length > 1 ? "" : storages[0].name,
  );

  const [selectedColor, setSelectedColor] = useState(
    colors.length > 1 ? "" : colors[0].name,
  );

  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const getActiveClass = (value) =>
    value === selectedColor || value === selectedStorage
      ? "actions__button--selected"
      : "";

  const isDisabled = !selectedColor || !selectedStorage;

  return (
    <ActionsStyled className="actions">
      <div className="actions__storage">
        <h3 className="actions__title">Storage</h3>
        <div className="actions__buttons-container">
          {storages.map((storage) => (
            <button
              key={storage.name}
              className={`actions__button ${getActiveClass(storage.name)}`}
              onClick={() => handleStorageSelection(storage.name)}
            >
              {storage.name}
            </button>
          ))}
        </div>
      </div>
      <div className="actions__colors">
        <h3 className="actions__title">Colors</h3>
        <div className="actions__buttons-container">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`actions__button ${getActiveClass(color.name)}`}
              onClick={() => handleColorSelection(color.name)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
      <button className="actions__add-button" disabled={isDisabled}>
        Add to cart
      </button>
    </ActionsStyled>
  );
};

export default Actions;
