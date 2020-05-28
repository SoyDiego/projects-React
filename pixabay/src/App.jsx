import React, { useState, useEffect } from "react";
import Formulario from "./Components/Formulario";
import ListadoImagenes from "./Components/ListadoImagenes";

function App() {
	const [busqueda, guardarBusqueda] = useState("");
	const [imagenes, guardarImagenes] = useState([]);
	const [paginaActual, guardarPaginaActual] = useState(1);
	const [ŧotalPaginas, guardarTotalPaginas] = useState(1);

	useEffect(() => {
		if (busqueda === "") return;

		(async () => {
			const imagenesPorPagina = 30;
			const key = process.env.REACT_APP_API_KEY;
			const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

			const respuesta = await fetch(url);
			const resultado = await respuesta.json();

			guardarImagenes(resultado.hits);

			//Calcula total de paginas
			const calcularTotalPaginas = Math.ceil(
				resultado.totalHits / imagenesPorPagina
			);
			guardarTotalPaginas(calcularTotalPaginas);
		})();
	}, [busqueda, paginaActual]);

	const paginaAnterior = () => {
		const nuevaPaginaActual = paginaActual - 1;

		if (nuevaPaginaActual === 0) return null;

		guardarPaginaActual(nuevaPaginaActual);
	};

	const paginaSiguiente = () => {
		const nuevaPaginaActual = paginaActual + 1;

		if (nuevaPaginaActual === ŧotalPaginas) return null;

		guardarPaginaActual(nuevaPaginaActual);
	};

	return (
		<div className="container">
			<div id="top-images" className="jumbotron">
				<p className="lead text-center">Buscador de Imagenes</p>
				<Formulario guardarBusqueda={guardarBusqueda} />
			</div>
			<div className="row justify-content-center">
				<ListadoImagenes imagenes={imagenes} />

				{paginaActual !== 1 && (
					<a href="#top-images">
						<button
							type="button"
							className="py-2 btn-info mr-1"
							onClick={paginaAnterior}
						>
							&#171; Anterior
						</button>
					</a>
				)}

				{paginaActual !== ŧotalPaginas && (
					<a href="#top-images">
						<button
							type="button"
							className="py-2 btn-info"
							onClick={paginaSiguiente}
						>
							Siguiente &#187;
						</button>
					</a>
				)}
			</div>
		</div>
	);
}

export default App;
