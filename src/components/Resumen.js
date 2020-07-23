import React from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #FFF;
margin-top: 1rem;
`;

const Resumen = ({ datos }) => {

    // Extraer datos
    const { marca, year, plan } = datos;

    // Si no hay datos no muestra el componente
    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del año: {year}</li>
            </ul>
        </ContenedorResumen>
    );
}
Resumen.protoType = {
    datos: PropTypes.object.isRequired
}

export default Resumen;