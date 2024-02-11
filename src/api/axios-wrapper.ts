import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwtToken");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    if (err.response.status === 401) {
      redirect("../auth/login");
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
