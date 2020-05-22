import React, {useState} from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper'

function App() {

	const [resumen, setResumen] = useState({
		resultado: '',
		datos: {}
	})

	const cotizarSeguro = (datos) =>{
		const {marca, plan, year} = datos

		let resultado = 2000;

		const diferencia = obtenerDiferenciaAnio(year)

		resultado -= ((diferencia * 3) * resultado) / 100

		resultado = calcularMarca(marca) * resultado

		let incrementoPlan = obtenerPlan(plan)

		resultado = parseFloat(incrementoPlan * resultado).toFixed(2);


		setResumen({
			resultado: resultado,
			datos: {marca, plan, year}
		})

	}

	return (
		<>
			<div className="contenedor">
				<Header titulo="Cotizador de seguro de Auto" />
			</div>

			<div className="contenedor-formulario">
				<Formulario cotizarSeguro={cotizarSeguro} />
			</div>

			<Resumen datos={resumen.datos} resultado={resumen.resultado}/>
		</>
	);
}

export default App;
