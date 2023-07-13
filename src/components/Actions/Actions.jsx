import Snackbar from "@mui/material/Snackbar";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ActionsStyled from "./ActionsStyled";
import useAddToCart from "../../hooks/useAddToCart/useAddToCart";

const Actions = ({ mobileId, options: { colors, storages } }) => {
  const { addToCart, isError } = useAddToCart();

  const [selectedStorage, setSelectedStorage] = useState(
    storages.length > 1 ? "" : storages[0].code,
  );
  const [selectedColor, setSelectedColor] = useState(
    colors.length > 1 ? "" : colors[0].code,
  );

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleStorageSelection = (storage) => {
    setSelectedStorage(storage);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    setIsLoading(true);

    setTimeout(() => {
      addToCart(mobileId, selectedColor, selectedStorage);

      setIsLoading(false);
      setSnackbarOpen(true);
    }, 1000);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const getActiveClass = (value) =>
    value === selectedColor || value === selectedStorage
      ? "actions__button--selected"
      : "";

  const isDisabled = !selectedColor || !selectedStorage || isLoading;

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
        {isLoading && (
          <CircularProgress size={16} thickness={8} color="inherit" />
        )}
        Add to cart
      </button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message={
          <div className="snackbar">
            {isError ? (
              <>
                <ErrorIcon color="error" />
                <span className="snackbar__text">
                  There was an error adding your item
                </span>
              </>
            ) : (
              <>
                <CheckCircleIcon color="success" />
                <span className="snackbar__text">Added to cart</span>
              </>
            )}
          </div>
        }
      />
    </ActionsStyled>
  );
};

export default Actions;
