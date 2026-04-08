import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener instalado react-router-dom
import './footer.css'; // Asegúrate de crear un archivo CSS para estilos específicos del footer
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="footer-brand">
        <span>✦</span>GastosDiarios
      </div>

      <nav className="footer-links">
        {/* Usamos 'a' para anclas internas de la misma página */}
        <a href="#beneficios">Beneficios</a>
        <a href="#como">Cómo funciona</a>
        <a href="#precios">Precios</a>
        
        {/* Usamos 'Link' para navegación entre rutas de la App */}
        <Link to="/login">Iniciar Sesión</Link>
      </nav>

      <p>© {currentYear} GastosDiarios · Todos los derechos reservados</p>
    </footer>
  );
};

 Footer;