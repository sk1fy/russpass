import axios from "axios";

const apiClient = axios.create({
  baseURL: `188.225.39.86:105/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default apiClient;