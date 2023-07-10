import apiClient from "../apiClient";
import { productEndpoint } from "../apiConstants";

const getMobile = async (id) => {
  const mobile = await apiClient.get(`${productEndpoint}${id}`);

  return mobile.data;
};

export default getMobile;
