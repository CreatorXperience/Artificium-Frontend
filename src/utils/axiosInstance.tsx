import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://artificium-v2.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
