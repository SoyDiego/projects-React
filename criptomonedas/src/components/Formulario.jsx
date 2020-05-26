import React from 'react'
import styled from "@emotion/styled";

import useMoneda from '../hooks/useMoneda'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFFFFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`

const Formulario = () => {

    //Utilizando useMoneda (nuestro custom hook creado)
    const [moneda, SelectMonedas, actualizarState] = useMoneda(); 

    return (
        <form>

            <SelectMonedas />

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    )
}

export default Formulario
