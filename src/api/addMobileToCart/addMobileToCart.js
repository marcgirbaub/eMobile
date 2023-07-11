import apiClient from "../apiClient";
import { cartEndpoint } from "../apiConstants";

const addMobileToCart = async (id, colorCode, storageCode) => {
  const response = await apiClient.post(cartEndpoint, {
    params: { id, colorCode, storageCode },
  });

  return response.data;
};

export default addMobileToCart;
