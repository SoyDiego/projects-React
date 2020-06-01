import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";

import {TAREAS_PROYECTO} from '../../types'

const TareaState = (props) => {
	const initialState = {
		tareas: [
			{
				nombre: "Elegir Plataforma",
				estado: true,
				proyectoId: 1,
			},
			{ nombre: "Elegir Colores", estado: false, proyectoId: 2 },
			{ nombre: "Elegir Hosting", estado: false, proyectoId: 3 },
			{ nombre: "Elegir Pago", estado: true, proyectoId: 4 },
			{ nombre: "Elegir Colores", estado: false, proyectoId: 1 },
			{ nombre: "Elegir Hosting", estado: false, proyectoId: 2 },
			{ nombre: "Elegir Pago", estado: true, proyectoId: 3 },
			{ nombre: "Elegir Colores", estado: false, proyectoId: 4 },
			{ nombre: "Elegir Hosting", estado: false, proyectoId: 1 },
			{ nombre: "Elegir Pago", estado: true, proyectoId: 2 },
        ],

        tareasProyecto: null
	};

	//crear dispatch y state
    const [state, dispatch] = useReducer(tareaReducer, initialState);
    
    //Crear las funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

	return (
		<TareaContext.Provider value={{
            tareas: state.tareas,
            tareasProyecto: state.tareasProyecto,
            obtenerTareas
        }}>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
