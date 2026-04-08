import CitaItem from './citaItem';

export default function CitaList({ items, onChange }) {
    // Si no hay citas, mostrar mensaje amigable
    if (!items || !items.length) {
        return (
            <div style={{ textAlign: 'center', padding: '40px', color: '#397ce0', backgroundColor: '#779dc4', borderRadius: '8px' }}>
                <p style={{ fontSize: '18px' }}>📅 No hay citas médicas registradas actualmente.</p>
            </div>
        );
    }

    return (
        <div style={{ overflowX: 'auto', marginTop: '20px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <thead>
                    <tr style={{ backgroundColor: '#2d3748', color: '#ffffff' }}>
                        <th style={headerStyle}>ID / Fecha y Hora</th>
                        <th style={headerStyle}>Paciente</th>
                        <th style={headerStyle}>Médico</th>
                        <th style={headerStyle}>Motivo de Consulta</th>
                        <th style={headerStyle}>Estado</th>
                        <th style={headerStyle}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((cita, index) => (
                        <CitaItem 
                            key={cita._id} 
                            cita={cita} 
                            onChange={onChange}
                            // Estilo de filas cebra (una blanca, una gris clara)
                            style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f7fafc' }}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const headerStyle = { 
    padding: '15px', 
    textAlign: 'left', 
    fontSize: '13px', 
    fontWeight: '600', 
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
};