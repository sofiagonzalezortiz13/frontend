import { createContext, useContext, useState, useEffect } from 'react';

// 1. Creamos el contexto
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // Inicializamos el token buscando directamente en el localStorage
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Función para iniciar sesión
    const login = (jwt) => {
        if (!jwt) return;
        localStorage.setItem('token', jwt);
        setToken(jwt);
    };

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        // Opcional: Redirigir al login o recargar
        window.location.href = '/'; 
    };

    // isAuth se actualiza automáticamente cada vez que el token cambia
    const isAuth = !!token;

    return (
        <AuthContext.Provider value={{ token, login, logout, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

// 2. EXPORTACIÓN CRÍTICA: Esto es lo que le faltaba a tu Login.jsx
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};