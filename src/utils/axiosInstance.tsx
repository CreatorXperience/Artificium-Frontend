import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://artificium-v2.onrender.com",
  withCredentials: true,
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     if (
//       response.data &&
//       typeof response.data === 'object' &&
//       'data' in response.data
//     ) {
//       response.data = response.data.data;
//     }

//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
export default axiosInstance;
