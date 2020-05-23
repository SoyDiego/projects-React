import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = () => {
	const [cantidad, guardarCantidad] = useState(0);
	const [error, guardarError] = useState(false);

	const definirPresupuesto = (e) => {
		guardarCantidad(parseInt(e.target.value, 10));
	};

	const agregarPresupuesto = (e) => {
		e.preventDefault();

		if (cantidad < 1 || isNaN(cantidad)) {
			guardarError(true);
			return;
		}

		guardarError(false);
	};

	return (
		<Fragment>
			<h2>Coloca tu presupuesto</h2>

			{error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

			<form onSubmit={agregarPresupuesto}>
				<input
					type="number"
					className="u-full-width"
					placeholder="Coloca tu presupuesto"
					onChange={definirPresupuesto}
				/>

				<input
					type="submit"
					className="button-primary u-full-width"
					value="Definir presupuesto"
				/>
			</form>
		</Fragment>
	);
};

export default Pregunta;
