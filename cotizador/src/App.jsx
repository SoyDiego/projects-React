import React, {useState} from 'react';
import Header from './components/Header'
import Formulario from "./components/Formulario";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({})

  return (
    <Contenedor>
      <Header 
        titulo="Cotizador de Seguros"
      />

      <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
          />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
