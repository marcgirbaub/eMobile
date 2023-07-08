import axios from "axios";
import { baseUrl } from "./apiConstants";

const apiClient = axios.create({ baseURL: baseUrl });

export default apiClient;
