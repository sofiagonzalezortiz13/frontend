import React from 'react';
import { Link } from "react-router-dom";
import "./content.css";

export const Content = () => {
  const beneficios = [
    { icon: "📊", title: "Control total", desc: "Visualiza todos tus gastos diarios en un solo lugar con estadísticas en tiempo real." },
    { icon: "🗂️", title: "Categorías", desc: "Organiza tus gastos por categorías: alimentación, transporte, salud y más." },
    { icon: "🔔", title: "Alertas inteligentes", desc: "Recibe notificaciones cuando estés cerca de superar tu presupuesto mensual." },
    { icon: "📈", title: "Reportes visuales", desc: "Genera gráficas de tus hábitos financieros por semana o por mes." },
    { icon: "💡", title: "Consejos de ahorro", desc: "Recibe recomendaciones personalizadas para mejorar tus finanzas." },
    { icon: "📱", title: "Siempre disponible", desc: "Accede a tu información desde cualquier dispositivo, en cualquier momento." },
  ];

  const pasos = [
    { num: "01", title: "Crea tu cuenta", desc: "Regístrate gratis con tu correo en menos de un minuto." },
    { num: "02", title: "Registra tus gastos", desc: "Agrega tus gastos diarios con categoría, monto y descripción." },
    { num: "03", title: "Analiza y ahorra", desc: "Visualiza tus patrones de gasto y toma mejores decisiones financieras." },
  ];

  const planes = [
    {
      nombre: "Básico",
      precio: "Gratis",
      desc: "Perfecto para empezar",
      features: ["Hasta 50 gastos/mes", "3 categorías", "Reporte mensual", "Soporte por email"],
      destacado: false,
    },
    {
      nombre: "Pro",
      precio: "$9.900",
      desc: "Para usuarios frecuentes",
      features: ["Gastos ilimitados", "Categorías ilimitadas", "Reportes avanzados", "Alertas inteligentes", "Soporte prioritario"],
      destacado: true,
    },
    {
      nombre: "Empresarial",
      precio: "$29.900",
      desc: "Para equipos y empresas",
      features: ["Todo lo de Pro", "Múltiples usuarios", "Panel administrativo", "Exportar a Excel", "Soporte 24/7"],
      destacado: false,
    },
  ];

  const testimonios = [
    { nombre: "María López", cargo: "Ama de casa", texto: "Desde que uso GastosDiarios sé exactamente en qué gasto mi dinero. ¡Ahorro un 20% más cada mes!" },
    { nombre: "Carlos Ruiz", cargo: "Freelancer", texto: "Por fin tengo control de mis ingresos variables. Los reportes son clarísimos y fáciles de entender." },
    { nombre: "Ana Martínez", cargo: "Estudiante", texto: "Me ayudó a organizar mi mesada y ahora puedo ahorrar para lo que quiero sin quedarme sin plata." },
  ];

  return (
    <div className="landing-content">

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-badge">💡 Finanzas personales inteligentes</span>
          <h1 className="hero-title">
            Controla tus<br />
            <span className="hero-accent">gastos diarios</span><br />
            sin esfuerzo
          </h1>
          <p className="hero-desc">
            La plataforma más simple para registrar, organizar y analizar
            tus gastos. Toma el control de tu dinero hoy mismo.
          </p>
          <div className="hero-actions">
            <Link to="/portal" className="hero-btn-primary">Empezar gratis →</Link>
            <a href="#como" className="hero-btn-secondary">Ver cómo funciona</a>
          </div>
          <div className="hero-trust">
            <span>✓ Sin tarjeta de crédito</span>
            <span>✓ Cancela cuando quieras</span>
            <span>✓ 100% seguro</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="dashboard-preview">
            <div className="dash-header">
              <span className="dash-title">💰 Resumen del mes</span>
              <span className="dash-date">Abril 2026</span>
            </div>
            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-label">Total gastos</span>
                <span className="dash-stat-value red">- $847.500</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-label">Presupuesto</span>
                <span className="dash-stat-value">$1.200.000</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-label">Disponible</span>
                <span className="dash-stat-value green">$352.500</span>
              </div>
            </div>
            <div className="dash-divider" />
            <div className="dash-items">
              {[
                { cat: "🍔 Alimentación", val: "- $320.000", color: "#f472b6" },
                { cat: "🚌 Transporte", val: "- $180.000", color: "#a78bfa" },
                { cat: "💊 Salud", val: "- $95.000", color: "#34d399" },
                { cat: "🎮 Entretenimiento", val: "- $252.500", color: "#fbbf24" },
              ].map((item) => (
                <div key={item.cat} className="dash-item">
                  <div className="dash-item-left">
                    <span className="dash-item-dot" style={{ background: item.color }} />
                    <span className="dash-item-cat">{item.cat}</span>
                  </div>
                  <span className="dash-item-val">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        {[
          { val: "+5.000", label: "Usuarios activos" },
          { val: "$2.3B", label: "Gastos registrados" },
          { val: "99.9%", label: "Uptime garantizado" },
          { val: "4.9★", label: "Calificación promedio" },
        ].map((s) => (
          <div key={s.label} className="stats-bar-item">
            <span className="stats-val">{s.val}</span>
            <span className="stats-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Beneficios */}
      <section className="section" id="beneficios">
        <div className="section-header">
          <span className="section-badge">BENEFICIOS</span>
          <h2 className="section-title">Todo lo que necesitas para<br />controlar tus finanzas</h2>
          <p className="section-desc">Una plataforma completa pensada para que ahorres tiempo y dinero.</p>
        </div>
        <div className="benefits-grid">
          {beneficios.map((b) => (
            <div key={b.title} className="benefit-card">
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section alt" id="como">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-badge">CÓMO FUNCIONA</span>
            <h2 className="section-title">Empieza en 3 simples pasos</h2>
            <p className="section-desc">Sin configuraciones complicadas. Listo en minutos.</p>
          </div>
          <div className="steps-grid">
            {pasos.map((p, i) => (
              <div key={p.num} className="step-card">
                <div className="step-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {i < pasos.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="section" id="precios">
        <div className="section-header">
          <span className="section-badge">PRECIOS</span>
          <h2 className="section-title">Planes para cada necesidad</h2>
          <p className="section-desc">Comienza gratis y escala cuando lo necesites.</p>
        </div>
        <div className="pricing-grid">
          {planes.map((plan) => (
            <div key={plan.nombre} className={`pricing-card ${plan.destacado ? "destacado" : ""}`}>
              {plan.destacado && <div className="pricing-badge">⭐ Más popular</div>}
              <div className="pricing-top">
                <h3 className="pricing-nombre">{plan.nombre}</h3>
                <div className="pricing-precio">{plan.precio}</div>
                <p className="pricing-desc">{plan.desc}</p>
              </div>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}><span className="check">✓</span> {f}</li>
                ))}
              </ul>
              <Link to="/portal" className={plan.destacado ? "pricing-btn-primary" : "pricing-btn-secondary"}>
                Comenzar
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="section alt" id="testimonios">
        <div className="section-inner">
          <div className="section-header">
            <span className="section-badge">TESTIMONIOS</span>
            <h2 className="section-title">Lo que dicen nuestros usuarios</h2>
            <p className="section-desc">Miles de personas ya controlan mejor sus finanzas.</p>
          </div>
          <div className="testimonios-grid">
            {testimonios.map((t) => (
              <div key={t.nombre} className="testimonio-card">
                <div className="testimonio-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonio-texto">"{t.texto}"</p>
                <div className="testimonio-autor">
                  <div className="testimonio-avatar">{t.nombre.charAt(0)}</div>
                  <div>
                    <div className="testimonio-nombre">{t.nombre}</div>
                    <div className="testimonio-cargo">{t.cargo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-glow" />
        <h2>¿Listo para tomar control<br />de tus finanzas?</h2>
        <p>Únete a más de 5.000 personas que ya controlan sus gastos.</p>
        <Link to="/portal" className="hero-btn-primary">Crear cuenta gratis →</Link>
      </section>

    </div>
  );
};

