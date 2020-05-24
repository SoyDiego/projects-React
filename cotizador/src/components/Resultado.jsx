import React from 'react'
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const ResultadoCotizacion = styled.div`
	text-align: center;
	padding: 0.5rem;
	border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Cotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Resultado = ({cotizacion}) => {

    return cotizacion === 0 ? (
			<Mensaje>Elige marca, año y tipo de seguro</Mensaje>
		) : (
			<ResultadoCotizacion>
						<Cotizacion>
							El total es: $ {cotizacion}
						</Cotizacion>
			</ResultadoCotizacion>
		);
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado
