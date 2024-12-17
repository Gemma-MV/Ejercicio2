import React from 'react';
import { useNavigate } from 'react-router-dom';

const Encargado = () => {
   const navigate = useNavigate(); // Hook para navegar entre rutas
   
       const handleLogout = () => {
          navigate('/');
       }
    return (
        <div>
            <h2>Bienvenido, Encargado</h2>
            <p>Esta es tu página personalizada.</p>
            <button onClick={handleLogout}>LOGOUT</button> 
        </div>
    );
};

export default Encargado;
