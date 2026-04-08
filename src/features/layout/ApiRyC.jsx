import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./ApiRyC.css";

const fetchCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  if (!res.ok) throw new Error("Error al cargar datos");
  const data = await res.json();
  return data.results.slice(0, 6);
};

export default function ApiRyC() {
  const { data: characters, isLoading, isError } = useQuery({
    queryKey: ["rick-morty-preview"],
    queryFn: fetchCharacters,
  });

  const statusColor = (status) => {
    if (status === "Alive") return "#55cc44";
    if (status === "Dead") return "#d63d2e";
    return "#9e9e9e";
  };

  return (
    <div className="ryc-wrapper">
      {/* Navbar */}
      

      <div className="ryc-header">
        <span className="ryc-badge">CONSUMO DE API EXTERNA</span>
        <h1 className="ryc-title">
          Integración con <span className="ryc-accent">API REST</span>
        </h1>
        <p className="ryc-desc">
          Ejemplo de consumo de API externa .
          Los datos provienen de la API pública de Rick & Morty.
        </p>
        <div className="ryc-tech-pills">
          <span className="pill">Fetch API</span>
          <span className="pill">React Query</span>
          <span className="pill">useQuery Hook</span>
          <span className="pill">Manejo de estados</span>
        </div>
      </div>

     
      <div className="ryc-code-block">
        <div className="code-header">
          <div className="preview-dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="code-filename">fetchCharacters.js</span>
        </div>
        <pre className="code-body">{`const { data, isLoading } = useQuery({
  queryKey: ["characters"],
  queryFn: () =>
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
});`}</pre>
      </div>

      {/* Estados */}
      {isLoading && (
        <div className="ryc-state">
          <div className="ryc-loader" />
          <p>Cargando datos de la API...</p>
        </div>
      )}

      {isError && (
        <div className="ryc-state error">
          <p>❌ Error al conectar con la API</p>
        </div>
      )}

      {/* Grid */}
      {!isLoading && !isError && (
        <>
          <p className="ryc-count">{characters?.length} registros obtenidos de la API</p>
          <div className="ryc-grid">
            {characters?.map((char) => (
              <div key={char.id} className="ryc-card">
                <img src={char.image} alt={char.name} className="ryc-img" />
                <div className="ryc-card-body">
                  <h2 className="ryc-char-name">{char.name}</h2>
                  <div className="ryc-status">
                    <span className="ryc-dot" style={{ background: statusColor(char.status) }} />
                    {char.status} — {char.species}
                  </div>
                  <p className="ryc-label">Última ubicación</p>
                  <p className="ryc-location">{char.location.name}</p>
                </div>
              </div>
            ))}
            
          </div>
        </>
      )}

      {/* CTA */}
      <div className="ryc-cta">
        <p>¿Listo para unirte ahora?</p>
        <Link to="/register" className="ryc-cta-btn">Crear cuenta gratis →</Link>
      </div>
    </div>
  );
}

