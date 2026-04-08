import { useState } from 'react';
import { createCita } from '../services/cita.service';

export default function CitaForm({ onSaved }) {
  const [form, setForm] = useState({
    medico_id: '',
    fecha_hora: '',
    motivo: '',
    estado: 'Programada'
  });
  const [saving, setSaving] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.medico_id || !form.fecha_hora || !form.motivo) {
      return alert('Por favor, completa todos los campos obligatorios (*).');
    }
    try {
      setSaving(true);
      await createCita(form);
      setForm({ medico_id: '', fecha_hora: '', motivo: '', estado: 'Programada' });
      alert('✅ Cita programada con éxito');
      onSaved?.();
    } catch (err) {
      console.error(err);
      alert('❌ Error al programar la cita. Revisa la conexión.');
    } finally {
      setSaving(false);
    }
  };

  const inputStyle = {
    padding: '11px 14px',
    border: '1.5px solid #334155',
    borderRadius: '10px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '13.5px',
    backgroundColor: '#1e293b',
    color: '#e2e8f0',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.07em'
  };

  const fieldStyle = { display: 'flex', flexDirection: 'column' };

  const estadoColors = {
    Programada: '#60a5fa',
    Completada: '#34d399',
    Cancelada: '#f87171'
  };

  return (
    <div style={{
      background: 'linear-gradient(160deg, #0f172a, #1e293b)',
      borderRadius: '18px',
      padding: '26px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
      border: '1px solid #334155'
    }}>

      {/* Encabezado */}
      <div style={{ marginBottom: '22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', boxShadow: '0 4px 12px rgba(99,102,241,0.4)'
          }}>🩺</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#f1f5f9' }}>
              Nueva Cita Médica
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#64748b' }}>
              Completa los datos para agendar
            </p>
          </div>
        </div>
        <div style={{
          height: '1.5px',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, transparent)',
          borderRadius: '2px',
          marginTop: '16px'
        }} />
      </div>

      <form onSubmit={onSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

          {/* ID Médico */}
          <div style={fieldStyle}>
            <label style={labelStyle}>🥼 ID Médico *</label>
            <input
              name="medico_id"
              placeholder="Ej: 65f1a2b3c4d5e6f7a8b9c0d2"
              style={inputStyle}
              value={form.medico_id}
              onChange={onChange}
              required
            />
          </div>

          {/* Fecha y Estado */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={fieldStyle}>
              <label style={labelStyle}>📅 Fecha y Hora *</label>
              <input
                name="fecha_hora"
                type="datetime-local"
                style={{ ...inputStyle }}
                value={form.fecha_hora}
                onChange={onChange}
                required
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>🏷️ Estado</label>
              <select
                name="estado"
                style={{
                  ...inputStyle,
                  color: estadoColors[form.estado],
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
                value={form.estado}
                onChange={onChange}
              >
                <option value="Programada">🔵 Programada</option>
                <option value="Completada">🟢 Completada</option>
                <option value="Cancelada">🔴 Cancelada</option>
              </select>
            </div>
          </div>

          {/* Motivo */}
          <div style={fieldStyle}>
            <label style={labelStyle}>📝 Motivo de la consulta *</label>
            <textarea
              name="motivo"
              placeholder="Describe el motivo de la cita..."
              style={{ ...inputStyle, height: '90px', resize: 'none', lineHeight: '1.6' }}
              value={form.motivo}
              onChange={onChange}
              required
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={saving}
            style={{
              marginTop: '6px',
              width: '100%',
              padding: '14px',
              background: saving ? '#334155' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: saving ? '#64748b' : 'white',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '800',
              fontSize: '14px',
              cursor: saving ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s',
              boxShadow: saving ? 'none' : '0 4px 18px rgba(99,102,241,0.5)',
              letterSpacing: '0.03em'
            }}
          >
            {saving ? '⏳ Guardando...' : '✅ Confirmar y Agendar Cita'}
          </button>

        </div>
      </form>
    </div>
  );
}