import apiClient from "../apiClient";
import { baseUrl, productEndpoint } from "../apiConstants";
import isDataExpired from "../../utils/isDataExpired";

const getMobiles = async () => {
  const url = `${baseUrl}${productEndpoint}`;

  const localStoragedData = JSON.parse(localStorage.getItem(url));

  if (localStoragedData && !isDataExpired(localStoragedData)) {
    return localStoragedData.data;
  }

  localStorage.removeItem(url);

  const response = await apiClient.get(`${productEndpoint}`);

  localStorage.setItem(
    url,
    JSON.stringify({ data: response.data, fetchDate: Date.now() }),
  );

  return response.data;
};

export default getMobiles;
