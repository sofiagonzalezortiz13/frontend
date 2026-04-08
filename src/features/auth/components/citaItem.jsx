import { useState } from 'react';
import { deleteCita, updateCita } from '../services/cita.service';

export default function CitaItem({ cita, onChange, style }) {
    const [editando, setEditando] = useState(false);
    const [form, setForm] = useState({
        motivo: cita.motivo,
        estado: cita.estado,
        fecha_hora: cita.fecha_hora?.slice(0, 16)
    });

    const onDelete = async () => {
        if (!confirm('¿Estás seguro de que deseas eliminar esta cita?')) return;
        try {
            await deleteCita(cita._id);
            onChange?.();
        } catch (err) {
            alert('Error al eliminar la cita');
        }
    };

    const onUpdate = async () => {
        try {
            await updateCita(cita._id, form);
            setEditando(false);
            onChange?.();
        } catch (err) {
            alert('Error al actualizar la cita');
        }
    };

    const getEstadoStyle = (estado) => {
        const styles = {
            'Programada': { background: '#ebf8ff', color: '#2b6cb0' },
            'Completada': { background: '#f0fff4', color: '#2f855a' },
            'Cancelada':  { background: '#fff5f5', color: '#c53030' },
        };
        return styles[estado] || { background: '#eee', color: '#666' };
    };

    // ✅ Extraer email del objeto populate
    const pacienteEmail = cita.paciente_id?.email || cita.paciente_id || 'N/A';
    const medicoEmail   = cita.medico_id?.email   || cita.medico_id   || 'N/A';

    return (
        <>
            <tr style={style}>
                <td style={cellStyle}>
                    <div style={{ fontSize: '11px', color: '#7f8c8d', fontWeight: 'bold' }}>
                        ID: {cita._id.slice(-6)}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '500' }}>
                        {new Date(cita.fecha_hora).toLocaleString('es-ES', {
                            day: '2-digit', month: '2-digit', year: 'numeric',
                            hour: '2-digit', minute: '2-digit'
                        })}
                    </div>
                </td>
                <td style={cellStyle}>
                    <div style={{ fontSize: '12px', color: '#4a5568' }}>👤 Paciente:</div>
                    {/* ✅ Ahora muestra el email, no el objeto */}
                    <div style={{ fontWeight: '500', fontSize: '13px' }}>{pacienteEmail}</div>
                </td>
                <td style={cellStyle}>
                    <div style={{ fontSize: '12px', color: '#4a5568' }}>👨‍⚕️ Médico:</div>
                    {/* ✅ Ahora muestra el email, no el objeto */}
                    <div style={{ fontWeight: '500', fontSize: '13px' }}>{medicoEmail}</div>
                </td>
                <td style={{ ...cellStyle, maxWidth: '200px' }}>
                    {editando ? (
                        <input
                            value={form.motivo}
                            onChange={e => setForm(f => ({ ...f, motivo: e.target.value }))}
                            style={{ width: '100%', padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '13px' }}
                        />
                    ) : (
                        <div style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {cita.motivo}
                        </div>
                    )}
                </td>
                <td style={cellStyle}>
                    {editando ? (
                        <select
                            value={form.estado}
                            onChange={e => setForm(f => ({ ...f, estado: e.target.value }))}
                            style={{ padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e0', fontSize: '13px' }}
                        >
                            <option value="Programada">Programada</option>
                            <option value="Completada">Completada</option>
                            <option value="Cancelada">Cancelada</option>
                        </select>
                    ) : (
                        <span style={{
                            padding: '4px 10px', borderRadius: '12px',
                            fontSize: '11px', fontWeight: 'bold',
                            ...getEstadoStyle(cita.estado)
                        }}>
                            {cita.estado}
                        </span>
                    )}
                </td>
                <td style={cellStyle}>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {editando ? (
                            <>
                                <button onClick={onUpdate} style={btnStyle('#2f855a', '#f0fff4', '#9ae6b4')}>
                                    ✅ Guardar
                                </button>
                                <button onClick={() => setEditando(false)} style={btnStyle('#4a5568', '#edf2f7', '#e2e8f0')}>
                                    Cancelar
                                </button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => setEditando(true)} style={btnStyle('#2b6cb0', '#ebf8ff', '#bee3f8')}>
                                    ✏️ Editar
                                </button>
                                <button onClick={onDelete} style={btnStyle('#e53e3e', '#fff5f5', '#fed7d7')}>
                                    🗑️ Eliminar
                                </button>
                            </>
                        )}
                    </div>
                </td>
            </tr>
        </>
    );
}

const cellStyle = {
    padding: '15px',
    borderBottom: '1px solid #edf2f7',
    verticalAlign: 'middle'
};

const btnStyle = (color, bg, hoverBg) => ({
    color,
    border: `1px solid ${hoverBg}`,
    background: bg,
    padding: '5px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
    transition: '0.2s'
});