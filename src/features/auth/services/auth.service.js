import axios from "axios";

// La URL base de tu API en Render
const API_URL = "https://backend-e6v4.onrender.com/api";
/**
 * ✅ REGISTER REQUEST
 * Antes: /api/register (404)
 * Ahora: /api/auth/register (Correcto)
 */
export const registerRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/register`, user);
};

export const loginRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/login`, user); // ✅ Esto es lo correcto
};