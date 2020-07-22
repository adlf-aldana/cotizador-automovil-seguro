import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const titulo = 'Cotizador de Seguros'
  return (
    <Fragment>
      <Header titulo={titulo}/>
    </Fragment>
  );
}

export default App;
