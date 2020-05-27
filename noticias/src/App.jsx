import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias"

function App() {

  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
	const API_KEY = process.env.REACT_APP_API_KEY;
	  (async() => {
		  const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`;
		  const respuesta = await fetch(url);
		  const noticias = await respuesta.json()

		  guardarNoticias(noticias.articles);
	  })();

  }, [categoria])

  return (
	<Fragment>
	  <Header titulo="Buscador de Noticias"/>

	<div className="container white">
	  <Formulario
		guardarCategoria={guardarCategoria}
	  />

	  <ListadoNoticias noticias={noticias}/>
	</div>

	</Fragment>
  );
}

export default App;
