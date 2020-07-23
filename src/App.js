import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
background-color: #FFF;
padding: 3rem;
`;

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

  // Extraer datos
  const { datos } = resumen;

  const titulo = 'Cotizador de Seguros'
  return (
    <Contenedor>
      <Header titulo={titulo} />

      <ContenedorFormulario>
        <Formulario guardarResumen={guardarResumen} />

        <Resumen datos={datos} />

        <Resultado />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
