import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.RAILWAY_API_URL, 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
