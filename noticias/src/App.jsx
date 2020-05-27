import React, { Fragment } from 'react';
import Header from './components/Header'
import Formulario from "./components/Formulario";

function App() {
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>

    <div class="container white">
      <Formulario/>
    </div>



    </Fragment>
  );
}

export default App;
