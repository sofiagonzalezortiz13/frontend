import axios from "axios";

// Configura la URL base de tu backend (ajusta el puerto si es necesario)
const API_URL = "https://backend-e6v4.onrender.com/api";

// ✅ EXPORTAR LOGIN
export const loginRequest = async (user) => {
  return await axios.post(`${API_URL}/login`, user);
};

// ✅ EXPORTAR REGISTER (Esta es la que te falta)
export const registerRequest = async (user) => {
  return await axios.post(`${API_URL}/register`, user);
};