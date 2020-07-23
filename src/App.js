import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import styles from '@emotion/styled';

const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
background-color: #FFF;
padding: 3rem;
`;

function App() {
  const titulo = 'Cotizador de Seguros'
  return (
    <Contenedor>
      <Header titulo={titulo} />

      <ContenedorFormulario>
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
