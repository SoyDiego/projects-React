import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA } from "../../types";

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

		tareasProyecto: null,
		errorTarea: false,
	};

	//crear dispatch y state
	const [state, dispatch] = useReducer(tareaReducer, initialState);

	//Crear las funciones

	//Obtener las tareas de un proyecto
	const obtenerTareas = (proyectoId) => {
		dispatch({
			type: TAREAS_PROYECTO,
			payload: proyectoId,
		});
	};

	//Agregar tarea al proyecto seleccionado

	const agregarTarea = (tarea) => {
		dispatch({
			type: AGREGAR_TAREA,
			payload: tarea,
		});
	};

	//Valida y muestra un error en caso de que sea necesario
	const validarTarea = () => {
		dispatch({
			type: VALIDAR_TAREA
		});
	};

	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasProyecto: state.tareasProyecto,
				errorTarea: state.errorTarea,
				obtenerTareas,
                agregarTarea,
                validarTarea,
			}}>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
