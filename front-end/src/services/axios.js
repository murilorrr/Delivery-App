import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('user');
    if (user) config.headers.Authorization = user.token;
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosConfig;
