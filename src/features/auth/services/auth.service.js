import axios from "axios";

// La URL base de tu API en Render
const API_URL = "https://backend-e6v4.onrender.com/api";

/**
 * ✅ LOGIN REQUEST
 * Antes: /api/login (404)
 * Ahora: /api/auth/login (Correcto)
 */
export const loginRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/login`, user);
};

/**
 * ✅ REGISTER REQUEST
 * Antes: /api/register (404)
 * Ahora: /api/auth/register (Correcto)
 */
export const registerRequest = async (user) => {
  return await axios.post(`${API_URL}/auth/register`, user);
};