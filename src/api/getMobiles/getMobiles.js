import apiClient from "../apiClient";
import { productEndpoint } from "../apiConstants";

const getMobiles = async () => {
  const mobiles = await apiClient.get(`${productEndpoint}`);

  return mobiles.data;
};

export default getMobiles;
