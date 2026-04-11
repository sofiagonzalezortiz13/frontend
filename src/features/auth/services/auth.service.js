import axios from "axios";


const API_URL = "https://backend-1-ct66.onrender.com/api";

export const registerRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/register`, user);
};

export const loginRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/login`, user); // ✅ Esto es lo correcto
};