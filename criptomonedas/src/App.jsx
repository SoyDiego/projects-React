import React from 'react';
import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	@media (min-width:992px){
		display: grid;
		grid-template-columns: repeat(2,1fr);
		column-gap: 2rem;
	}
`

const Imagen = styled.img`
	max-width: 100%;
	margin-top: 5rem;
`

const Heading = styled.h1`
	font-family: 'Bebas Neue', cursive;
	color: #FFFFFF;
	text-align: left;
	font-weight: 700;
	margin-bottom: 50px;
	margin-top: 80px;

	&::after{
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66A2fe;
		display: block;
	}
`

function App() {
	return (
		<Contenedor>
			<div>
				<Imagen
					src={imagen}
					alt="imagen criptomonedas"
				/>
			</div> 
			<div>
				<Heading>Cotizador Criptomonedas al instante</Heading>
				<Formulario/>
			</div>
		</Contenedor>
	);
}

export default App;
