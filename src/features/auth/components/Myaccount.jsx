import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginRequest, registerRequest} from '../services/auth.service';
import {
  Box, Button, TextField, Typography, Container,
  Stack, Paper, IconButton, InputAdornment, Link
} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'; // ✅ Ícono médico
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Myaccount = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [view, setView] = useState('login'); 
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setAuthError('');
    setSuccessMsg('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await loginRequest({ email: form.email, password: form.password });
      if (res?.data?.token) {
        login(res.data.token);
        navigate('/portal');
      }
    } catch (err) {
      setAuthError(err.response?.data?.message || 'Credenciales incorrectas');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await registerRequest(form);
      setSuccessMsg('¡Cuenta creada! Ya puedes iniciar sesión.');
      setView('login');
    } catch (err) {
      setAuthError(err.response?.data?.message || 'Error al registrar');
    } finally {
      setLoading(false);
    }
  };

  const handleRecover = async (e) => {
    e.preventDefault();
    if (!form.email) {
      setAuthError("Por favor ingresa tu correo electrónico.");
      return;
    }
    try {
      setLoading(true);
      await recoverPasswordRequest(form.email);
      setSuccessMsg('Se ha enviado un enlace de recuperación a tu correo.');
      setAuthError('');
    } catch (err) {
      setAuthError(err.response?.data?.message || 'No se pudo enviar el correo de recuperación.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff, #eaf3fa 90%)',
      display: 'flex', alignItems: 'center', py: 5
    }}>
      <Container maxWidth="xs">
        <Paper elevation={0} sx={{ borderRadius: 6, p: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #f0f0f0' }}>
          
          <Stack alignItems="center" spacing={2} mb={4}>
            <Box sx={{ backgroundColor: '#000', borderRadius: '12px', p: 1.5, display: 'flex' }}>
              <LocalHospitalIcon sx={{ color: '#fff', fontSize: 32 }} /> {/* ✅ Ícono médico */}
            </Box>
            <Typography variant="h5" fontWeight={800} color="#1d1d1f">
              {view === 'login' && "Bienvenido"}
              {view === 'register' && "Crear Cuenta"}
              {view === 'forgot' && "Recuperar Acceso"}
            </Typography>
            <Typography variant="body2" color="#6B7280" textAlign="center">
              {view === 'login' && "Gestiona tus citas médicas"}
              {view === 'register' && "Regístrate para agendar citas"}
              {view === 'forgot' && "Te enviaremos un enlace a tu correo"}
            </Typography>
          </Stack>

          {authError && <Typography color="error" variant="body2" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>{authError}</Typography>}
          {successMsg && <Typography color="primary" variant="body2" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>{successMsg}</Typography>}

          <Box component="form" onSubmit={view === 'login' ? handleLogin : view === 'register' ? handleRegister : handleRecover}>
            <Stack spacing={2}>
              
              {view === 'register' && (
                <TextField label="Nombre de usuario" name="username" fullWidth required onChange={handleChange} InputProps={{ sx: { borderRadius: 3 } }} />
              )}

              <TextField label="Correo electrónico" name="email" type="email" fullWidth required onChange={handleChange} InputProps={{ sx: { borderRadius: 3 } }} />

              {view !== 'forgot' && (
                <TextField 
                  label="Contraseña" name="password" type={showPassword ? 'text' : 'password'} fullWidth required onChange={handleChange}
                  InputProps={{
                    sx: { borderRadius: 3 },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }} 
                />
              )}

              {view === 'login' && (
                <Link component="button" type="button" variant="body2" onClick={() => setView('forgot')} sx={{ alignSelf: 'flex-end', color: '#666', textDecoration: 'none' }}>
                  ¿Olvidaste tu contraseña?
                </Link>
              )}

              <Button variant="contained" type="submit" fullWidth disabled={loading} sx={{ mt: 1, backgroundColor: '#000', borderRadius: 3, fontWeight: 700, py: 1.5, textTransform: 'none', '&:hover': { backgroundColor: '#222' } }}>
                {loading ? 'Procesando...' : (view === 'login' ? 'Entrar' : view === 'register' ? 'Registrarme' : 'Enviar enlace')}
              </Button>

              <Box sx={{ mt: 2, textAlign: 'center' }}>
                {view === 'login' ? (
                  <Typography variant="body2">
                    ¿No tienes cuenta?{' '}
                    <Link component="button" type="button" onClick={() => setView('register')} sx={{ fontWeight: 700, color: '#1976d2', textDecoration: 'none' }}>
                      Crea una nueva aquí
                    </Link>
                  </Typography>
                ) : (
                  <Button startIcon={<ArrowBackIcon />} onClick={() => setView('login')} sx={{ textTransform: 'none', color: '#666' }}>
                    Volver al inicio
                  </Button>
                )}
              </Box>

            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};