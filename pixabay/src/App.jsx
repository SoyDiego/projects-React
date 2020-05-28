import React, { useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import ListadoImagenes from "./Components/ListadoImagenes";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);

	useEffect(() => {
		if (busqueda === "") return;

		(async () => {
			const imagenesPorPagina = 30;
      const key = process.env.REACT_APP_API_KEY;
			const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

			const respuesta = await fetch(url);
			const resultado = await respuesta.json();

			guardarImagenes(resultado.hits);
		})();
	}, [busqueda]);

	return (
		<div className="container">
			<div className="jumbotron">
				<p className="lead text-center">Buscador de Imagenes</p>
				<Formulario guardarBusqueda={guardarBusqueda} />
			</div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes}/>
      </div>
		</div>
	);
}

export default App;
