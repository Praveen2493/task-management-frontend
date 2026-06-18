import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://server-i6ms.onrender.com/api',
});

axiosInstance.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem("token");

      console.log(
 localStorage.getItem("token")
);

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;
  }
);

export default axiosInstance;