// api.js
import axios from 'axios';

// Replace with your actual API URL
const API_URL = 'https://nss-new-1.onrender.com'; // or your deployed URL

export const login = async (formData) => {
  return await axios.post(`${API_URL}/login`, formData);
};

export const register = async (formData) => {
  return await axios.post(`${API_URL}/register`, formData);
};
