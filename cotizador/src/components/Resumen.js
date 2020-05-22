import React from "react";
import Resultado from "./Resultado";
import {primeraMayuscula} from "../helper"

const Resumen = (resumen) => {
    const {marca, year, plan} = resumen.datos

    if (!marca || !year || !plan) return null
	return (
		<div>
			<div className="resumen">
                <h2>Resumen de Cotización:</h2>
					<li>Marca: {primeraMayuscula(marca)}</li>
					<li>Plan: {primeraMayuscula(plan)}</li>
					<li>Año del auto: {year}</li>
			</div>
            <Resultado resultado={resumen.resultado}/>
		</div>
	);
};

export default Resumen;
