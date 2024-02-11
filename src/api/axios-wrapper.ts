import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5139/api", //process.env.API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = token;
      console.log(token);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
