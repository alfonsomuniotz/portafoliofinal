// withAuth.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return function AuthComponent(props) {
        const navigate = useNavigate();

        // Simular autenticación
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        if (!isAuthenticated) {
            navigate('/login');
            return null; // O algún mensaje mientras rediriges
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;

