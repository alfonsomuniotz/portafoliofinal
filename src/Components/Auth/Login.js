import React, { useState, useEffect } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import './Login.css';
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de inicio de sesión (futura o personalizada)
        navigate('/');
    }

    useEffect(() => {
        // Lógica futura de verificación de usuario autenticado
        navigate('/');
    }, [navigate])

    return (
        <div className="Login">
            <Col className="Column" >
                <Card className="Cards">
                    <Card.Body>
                        <div className="titBox" >
                            <div className="tit">ACCESO </div>
                        </div>
                        <div className="text" style={{ padding: '2px' }}>
                            <div>
                                Digitar el RUT con guión como se indica en el siguiente <br />
                                ejemplo: (XX.XXX.XXX-X)
                            </div>
                        </div>
                        <Form onSubmit={handleSubmit} style={{ padding: '10px' }}>
                            <Form.Group id="email" style={{ padding: '10px' }}>
                                <Row>
                                    <Col className="tit2">
                                        <div>CORREO</div>
                                    </Col>
                                    <Col>
                                        <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group id="password" style={{ padding: '10px' }}>
                                <Row>
                                    <Col className="tit2">
                                        <div>CLAVE (*)</div>
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <div style={{ textAlign: 'center' }}>
                                <Button className="bton" variant="none" type="submit">
                                    INGRESAR
                                </Button>
                            </div>

                            <div className="text" style={{ padding: '2px' }}>
                                {/* 
                                Información adicional opcional 
                                */}
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            {/* Espacio central (vacío o con contenido) */}
            <Col md={4}>
                {/* Contenido opcional */}
            </Col>
            <Col md={4}>
                {/* Contenido opcional */}
            </Col>
        </div>
    );
}

