import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Encargado from './components/Encargado';
import Mecanico from './components/Mecanico';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/StyleComponents.css';

function App() {
  return (
    <>
    <Header/>
    <div className='Main'>
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Form />} />
        {/* Página para el rol 'Encargado' */}
        <Route path="/encargado" element={<Encargado />} />
        {/* Página para el rol 'Mecánico' */}
        <Route path="/mecanico" element={<Mecanico />} />
      </Routes>
    </Router>
    </div>
    <Footer/>
    </>
  );
}

export default App;
