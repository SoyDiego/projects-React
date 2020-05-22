import React from "react";

const Resultado = (props) => {
	const resultado = props.resultado;
	return (
		<div className="gran-total">
			<span>{resultado}</span>
		</div>
	);
};

export default Resultado;
