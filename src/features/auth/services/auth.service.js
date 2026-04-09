import axios from "axios";

// Configura la URL base de tu backend
const API_URL = "https://backend-e6v4.onrender.com/api";

// ✅ EXPORTAR LOGIN corregido con /auth
export const loginRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/login`, user);
};

// ✅ EXPORTAR REGISTER corregido con /auth
export const registerRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/register`, user);
};