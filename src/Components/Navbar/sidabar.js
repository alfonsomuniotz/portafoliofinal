// Sidebar.js
import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import supabase from "../../supabase/supabase";
import Foto from '../../images/perfil.png';
import './sidebar.css';

export function Sidebar(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const perfil = props.perfil;
    const nombre = perfil?.nombre;
    const cargo = perfil?.cargo;

    const [isFlotaOpen, setFlotaOpen] = useState(false);
    const [isOperationsOpen, setOperationsOpen] = useState(false);
    const [isClientesOpen, setClientesOpen] = useState(false); // Nuevo estado para Clientes

    const toggleFlotaDropdown = () => {
        setFlotaOpen(!isFlotaOpen);
        setOperationsOpen(false);
    };

    const toggleOperationsDropdown = () => {
        setOperationsOpen(!isOperationsOpen);
        setFlotaOpen(false);
    };

    const handleClientesClick = () => {
        setClientesOpen(!isClientesOpen);
        navigate("/clientes"); // Navega a la página de Clientes
    };

    const isActive = (path) => location.pathname === path;

    const styleHr = { margin: '0.5rem 0', marginTop: '1px', border: 'none', height: '1px', backgroundColor: '#f7ac3d', width: 'auto', opacity: 1 };

    return (
        <Nav className="Sidebar">
            <div className='CardPer'>
                <img src={Foto} className='foto' alt="Avatar" />
                <div className="nombre" style={{ textAlign: 'center' }}>{nombre}</div>
                <div className="cargo" style={{ textAlign: 'center' }}>{cargo}</div>
            </div>
            <hr style={{ border: 'none', height: '4px', backgroundColor: '#f7ac3d', width: '80%', opacity: 1 }} />

            <div className="items-side">
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/" className={`items-nav ${isActive('/') ? 'active-link' : ''}`}>
                        <i className="fa-solid fa-house fa-lg" style={{ color: "#f7ac3d" }}></i> INICIO
                    </Nav.Link>
                </Nav.Item>
                <hr style={styleHr} />

                {/* CLIENTES SECTION */}
                <Nav.Item onClick={handleClientesClick} style={{ cursor: 'pointer' }}>
                    <Nav.Link className={`items-nav ${isActive('/clientes') ? 'active-link' : ''}`}>
                        <i className="fa-solid fa-users fa-lg" style={{ color: "#f7ac3d" }}></i> CLIENTES
                    </Nav.Link>
                </Nav.Item>
                {isClientesOpen && (
                    <>
                        <Nav.Item>
                            <Nav.Link className={`items-nav ${isActive('/contratos') ? 'active-link' : ''}`} href="/contratos" style={{ marginLeft: '30px' }}>
                                <i className="fa-solid fa-file-contract fa-lg" style={{ color: "#f7ac3d" }}></i> CONTRATOS
                            </Nav.Link>
                        </Nav.Item>
                        <hr style={{ ...styleHr, marginLeft: '20px' }} />
                    </>
                )}
                <hr style={styleHr} />

                {/* RESTO DE SECCIONES */}

                <Nav.Item  style={{textAlign: 'start' , marginLeft: '4px' }}>
                    <Nav.Link className={`items-nav ${isActive('/asistencia') ? 'active-link' : ''}`} href="/asistencia">
                        <i className="fa-solid fa-clipboard-user fa-lg" style={{ color: "#f7ac3d" }}></i> ASISTENCIA
                    </Nav.Link>
                </Nav.Item>
                <hr style={styleHr} />

                {/* FLOTA SECTION */}
                <Nav.Item onClick={toggleFlotaDropdown} style={{ cursor: 'pointer' }}>
                    <Nav.Link className={`items-nav ${isActive('/') ? 'active-link' : ''}`} href="#">
                        <i className="fa-solid fa-truck-moving fa-lg" style={{ color: "#f7ac3d" }}></i> FLOTA
                    </Nav.Link>
                </Nav.Item>
                {isFlotaOpen && (
                    <>
                        <Nav.Item style={{textAlign: 'end' , marginLeft: '10px' }}>
                            <Nav.Link className={`items-nav ${isActive('/proveedores') ? 'active-link' : ''}`} href="/proveedores">
                                <i className="fa-solid fa-truck-moving fa-lg" style={{ color: "#f7ac3d", marginRight:'5px' }}></i> PROVEEDORES
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item style={{textAlign: 'center' , marginLeft: '4px' }}>
                            <Nav.Link className={`items-nav ${isActive('/contrato') ? 'active-link' : ''}`} href="/contrato">
                                <i className="fa-solid fa-file-contract fa-lg" style={{ color: "#f7ac3d", marginRight:'10px' }}></i>     CONTRATO
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{textAlign: 'center' , marginLeft: '4px' }}>
                            <Nav.Link className={`items-nav ${isActive('/vehiculos') ? 'active-link' : ''}`} href="/vehiculos">
                                <i className="fa-solid fa-car fa-lg" style={{ color: "#f7ac3d" , marginRight:'10px' }}></i> VEHÍCULOS
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item style={{textAlign: 'end' , marginLeft: '20px' }}>
                            <Nav.Link className={`items-nav ${isActive('/conductores') ? 'active-link' : ''}`} href="/conductores">
                                <i className="fa-regular fa-id-card fa-lg" style={{ color: "#f7ac3d" , marginRight:'10px' }}></i> CONDUCTORES
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item style={{textAlign: 'center' , marginLeft: '4px' }}>
                            <Nav.Link className={`items-nav ${isActive('/peonetas') ? 'active-link' : ''}`} href="/peonetas">
                                <i className="fa-solid fa-user fa-lg" style={{ color: "#f7ac3d", marginRight:'10px'  }}></i> PEONETAS
                            </Nav.Link>
                        </Nav.Item>
                    </>
                )}
                <hr style={styleHr} />

                {/* OPERACIONES SECTION */}
                <Nav.Item onClick={toggleOperationsDropdown} style={{ cursor: 'pointer' }}>
                    <Nav.Link className={`items-nav ${isActive('/') ? 'active-link' : ''}`} href="#">
                        <i className="fa-solid fa-earth-americas fa-lg" style={{ color: "#f7ac3d" }}></i> OPERACIONES
                    </Nav.Link>
                </Nav.Item>
                {isOperationsOpen && (
                    <>
                        <Nav.Item>
                            <Nav.Link
                                as={NavLink}
                                to="/asistencia-op"
                                className={`items-nav ${isActive('/asistencia-op') ? 'active-link' : ''}`}
                                style={{ marginLeft: '20px' , textAlign:'center'}}
                            >
                                <i className="fa-solid fa-user-check fa-lg" style={{ color: "#f7ac3d" }}></i> ASISTENCIA
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className={`items-nav ${isActive('/tarifa') ? 'active-link' : ''}`}
                                href="/tarifas"
                                style={{ marginLeft: '50px', textAlign:'start' }}
                            >
                                <i className="fa-solid fa-dollar-sign fa-lg" style={{ color: "#f7ac3d", marginRight:'10px'  }}></i> TARIFA
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={NavLink}
                                to="/reporteria"
                                className={`items-nav ${isActive('/reporteria') ? 'active-link' : ''}`}
                                style={{ marginLeft: '20px',textAlign:'center' }}
                            >
                                <i className="fa-solid fa-chart-line fa-lg" style={{ color: "#f7ac3d" }}></i> REPORTERIA
                            </Nav.Link>
                        </Nav.Item>
                    </>
                )}
                <hr style={styleHr} />

                <Nav.Item>
                    <Nav.Link className={`items-nav ${isActive('/') ? 'active-link' : ''}`} href="#">
                        <i className="fa-solid fa-gears fa-lg" style={{ color: "#f7ac3d" }}></i> GESTIÓN PERFIL
                    </Nav.Link>
                </Nav.Item>
                <hr style={styleHr} />

                <Nav.Item>
                    <Nav.Link className={`items-nav ${isActive('/') ? 'active-link' : ''}`} href="#">
                        <i className="fa-solid fa-square-poll-vertical fa-lg" style={{ color: "#f7ac3d" }}></i> GESTIÓN ENCUESTAS
                    </Nav.Link>
                </Nav.Item>
                <hr style={styleHr} />
            </div>
            
            <Button className='btn btn-danger-rgt btn-custom' onClick={() => supabase.auth.signOut()} style={{color:'black'}}>
               Cerrar Sesión
                  </Button>

        </Nav>
    );
}
