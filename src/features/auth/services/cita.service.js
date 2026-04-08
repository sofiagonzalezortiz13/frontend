import api from "../api/axios";

// Obtener todas las citas (acepta filtros como params)
export const getCitas = (params = {}) => 
    api.get("/citas", { params }); 

// Crear una nueva cita médica
export const createCita = (data) => 
    api.post("/citas", data);

// Obtener una sola cita por su ID
export const getCitaById = (id) => 
    api.get(`/citas/${id}`);

// Actualizar una cita (por ejemplo, cambiar el estado)
export const updateCita = (id, data) => 
    api.put(`/citas/${id}`, data);

// Eliminar/Cancelar una cita
export const deleteCita = (id) => 
    api.delete(`/citas/${id}`);