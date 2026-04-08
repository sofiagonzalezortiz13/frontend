import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

export const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuAbierto(false);
  };

  return (
    <nav className="landing-nav">
      <div className="nav-brand">✦ GastosDiarios</div>
      
      <div className={`nav-links ${menuAbierto ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('beneficios')} className="nav-link">Beneficios</button>
        <button onClick={() => scrollToSection('como')} className="nav-link">Cómo funciona</button>
        <button onClick={() => scrollToSection('precios')} className="nav-link">Precios</button>
        <button onClick={() => navigate('/publicaciones')} className="nav-link">API</button>
        <a href="/portal" className="nav-cta">Iniciar Sesión</a>
      </div>

      <button 
        className="nav-hamburger" 
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        {menuAbierto ? '✕' : '☰'}
      </button>
    </nav>
  );
};