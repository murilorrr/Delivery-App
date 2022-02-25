import axios from 'axios';

const baseURL = process.env.REACT_APP_HOST || 'http://localhost:3001';

const api = axios.create({
  baseURL,
});

export default api;
