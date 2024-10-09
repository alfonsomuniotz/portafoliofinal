import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './Components/Auth/Login';
import Home from './Components/Pages/Home';
import withAuth from './Components/Auth/withAuth';

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [dropdownAbierto, setDropdownAbierto] = useState(false);
  const navigate = useNavigate();

  const abrir_cerrar_menu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const abrir_cerrar_dropdown = () => {
    setDropdownAbierto(!dropdownAbierto);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <>
      <header className="header">
        <div className="logo-nombre">
          <button onClick={abrir_cerrar_menu} className="boton_menu"></button>
          <span className="nombre_logo">
            <span className="ku">KU</span><span className="ryu">RYU</span>
          </span>
        </div>
        <nav className={`desplegable ${menuAbierto ? 'abrir_menu' : ''}`}>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Publicaciones</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Mis compras</a></li>
          </ul>
        </nav>
        <div className="login">
          <div className="auth-buttons">
            <button onClick={abrir_cerrar_dropdown} className="btn">
              <FaUserCircle className="icon" />
            </button>
            {dropdownAbierto && (
              <div className="dropdown-menu">
                <button onClick={() => navigate('/login')} className="btn">Iniciar Sesión</button>
                <button onClick={() => alert('Crear Cuenta')} className="btn">Crear Cuenta</button>
                <button onClick={handleLogout} className="btn">Cerrar Sesión</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={withAuth(Home)} />
      </Routes>
    </>
  );
}

export default App;
