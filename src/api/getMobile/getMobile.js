import isDataExpired from "../../utils/isDataExpired";
import apiClient from "../apiClient";
import { baseUrl, productEndpoint } from "../apiConstants";

const getMobile = async (id) => {
  const url = `${baseUrl}${productEndpoint}/${id}`;

  const localStoragedData = JSON.parse(localStorage.getItem(url));

  if (localStoragedData && !isDataExpired(localStoragedData)) {
    return localStoragedData.data;
  }

  localStorage.removeItem(url);

  const response = await apiClient.get(`${productEndpoint}/${id}`);

  localStorage.setItem(
    url,
    JSON.stringify({ data: response.data, fetchDate: Date.now() }),
  );

  return response.data;
};

export default getMobile;
