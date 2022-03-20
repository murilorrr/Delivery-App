import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'https://delivery-app-2932.herokuapp.com' || 'http://localhost:3001';

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) config.headers.authorization = user.token;
    return config;
  },
);

export default api;
