import { baseUrl } from "./apiConstants";
import axios from "axios";

const apiClient = axios.create({ baseURL: baseUrl });

export default apiClient;
