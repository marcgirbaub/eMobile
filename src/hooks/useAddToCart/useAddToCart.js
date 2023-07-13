import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { addMobileToCartActionCreator } from "../../store/redux/features/mobiles/mobilesSlice";
import { cartEndpoint } from "../../api/apiConstants";
import apiClient from "../../api/apiClient";

const useAddToCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.mobiles.cart);

  const [isError, setIsError] = useState(false);

  const addToCart = async (id, colorCode, storageCode) => {
    try {
      await apiClient.post(cartEndpoint, {
        id,
        colorCode,
        storageCode,
      });

      dispatch(addMobileToCartActionCreator());
      localStorage.setItem("cart", Number(cart) + 1);

      setIsError(false);
    } catch {
      setIsError(true);
    }
  };

  return { addToCart, isError };
};

export default useAddToCart;
