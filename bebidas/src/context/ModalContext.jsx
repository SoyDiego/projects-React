import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
	const [idReceta, guardarIdReceta] = useState(null);
	const [informacion, guardarReceta] = useState({})

	//Una vez q tenemos la receta, llamar a api

	useEffect(() => {
		idReceta &&
			(async () => {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
				const resultado = await axios.get(url);
				guardarReceta(resultado.data.drinks[0])
			})();

	}, [idReceta]);

	return (
		<ModalContext.Provider
			value={{
				informacion,
				guardarIdReceta,
				guardarReceta
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
