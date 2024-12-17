import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mecanico = () => {
    
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const handleLogout = () => {
       navigate('/');
    }
    return (
        <div>
            <h1>Bienvenido, Mecánico</h1>
            <p>Esta es tu página personalizada.</p>
            <button onClick={handleLogout}>Cerrar sesión</button>  {/* Botón de logout */}
        </div>
    );
};

export default Mecanico;
