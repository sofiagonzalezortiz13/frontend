import axios from 'axios';
const api = axios.create({
baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
headers: { 'Content-Type': 'application/json' },
});
// Interceptor para adjuntar el token si existe:
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  
  // AÑADE ESTO PARA DEPURAR:
  console.log("¿Hay token en el interceptor?", !!token);
  
  if (token) {
    // Asegúrate de que haya un ESPACIO después de 'Bearer'
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;