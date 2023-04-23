import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axios.interceptors.request.use((config) => {
  console.log("Entro al interceptor");
  return config;
});
