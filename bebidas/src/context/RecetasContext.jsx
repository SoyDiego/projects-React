import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
	const [recetas, guardarRecetas] = useState([]);
	const [busqueda, buscarRecetas] = useState({
		nombre: "",
		categoria: "",
    });

    const [consultar, guardarConsultar] = useState(false)
    
    const {nombre, categoria} = busqueda;

	useEffect(() => {
        if(consultar){
            		(async () => {
			const url =
				`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

			const resultado = await axios.get(url);
			guardarRecetas(resultado.data.drinks);
		})();
        }
	}, [busqueda, consultar, categoria, nombre]);

	return (
		<RecetasContext.Provider
			value={{
				recetas,
				buscarRecetas, 
				guardarConsultar
			}}
		>
			{props.children}
		</RecetasContext.Provider>
	);
};

export default RecetasProvider;
