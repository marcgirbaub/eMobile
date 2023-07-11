import { useState } from "react";
import { useAppDispatch } from "../../store/redux/index";
import ActionsStyled from "./ActionsStyled";
import useAddToCart from "../../hooks/useAddToCart/useAddToCart";
import { addMobileToCartActionCreator } from "../../store/redux/features/mobiles/mobilesSlice";

const Actions = ({ mobileId, options: { colors, storages } }) => {
  const dispatch = useAppDispatch();

  const [selectedStorage, setSelectedStorage] = useState(
    storages.length > 1 ? "" : storages[0].code,
  );
  const [selectedColor, setSelectedColor] = useState(
    colors.length > 1 ? "" : colors[0].code,
  );

  const addToCartQuery = useAddToCart(mobileId, selectedColor, selectedStorage);

  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    addToCartQuery.refetch();
    dispatch(addMobileToCartActionCreator());
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
              className={`actions__button ${getActiveClass(storage.code)}`}
              onClick={() => handleStorageSelection(storage.code)}
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
              className={`actions__button ${getActiveClass(color.code)}`}
              onClick={() => handleColorSelection(color.code)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
      <button
        className="actions__add-button"
        disabled={isDisabled}
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </ActionsStyled>
  );
};

export default Actions;
