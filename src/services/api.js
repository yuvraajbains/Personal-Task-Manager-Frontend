import axios from 'axios';

const API = axios.create({
  baseURL: 'personal-task-manager-production.up.railway.app', // your backend URL
});

// If you want to add token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
