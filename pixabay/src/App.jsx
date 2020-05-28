import React, {useState} from 'react';
import Formulario from './Components/Formulario'

function App() {

  const [busqueda, guardarBusqueda] = useState('')

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de Imagenes
        </p>
        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>
    </div>
  );
}

export default App;
