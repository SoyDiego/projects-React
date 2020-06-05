import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";

import {
	TAREAS_PROYECTO,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
	ESTADO_TAREA,
	TAREA_ACTUAL,
	ACTUALIZAR_TAREA,
	LIMPIAR_TAREA,
} from "../../types";

import clienteAxios from "../../config/axios";

const TareaState = (props) => {
	const initialState = {
		tareasProyecto: [],
		errorTarea: false,
		tareaSeleccionada: null,
	};

	//crear dispatch y state
	const [state, dispatch] = useReducer(tareaReducer, initialState);

	//Crear las funciones

	//Obtener las tareas de un proyecto
	const obtenerTareas = async(proyecto) => {
		try {
			const resultado = await clienteAxios.get('/api/tareas', {params: {proyecto}})
			dispatch({
				type: TAREAS_PROYECTO,
				payload: resultado.data.tareas
			});
		} catch (error) {
			console.log(error);
		}
	};

	//Agregar tarea al proyecto seleccionado

	const agregarTarea = async (tarea) => {
		try {
			const resultado = await clienteAxios.post("/api/tareas", tarea);
			dispatch({
				type: AGREGAR_TAREA,
				payload: tarea,
			});
		} catch (error) {
			console.log(error);
		}
	};

	//Valida y muestra un error en caso de que sea necesario
	const validarTarea = () => {
		dispatch({
			type: VALIDAR_TAREA,
		});
	};

	//Eliminar tarea por su ID
	const eliminarTarea = (id) => {
		dispatch({
			type: ELIMINAR_TAREA,
			payload: id,
		});
	};

	//Cambia el estado de cada tarea
	const cambiarEstadoTarea = (tarea) => {
		dispatch({
			type: ESTADO_TAREA,
			payload: tarea,
		});
	};

	//Extrae una tarea para edición
	const guardarTareaActual = (tarea) => {
		dispatch({
			type: TAREA_ACTUAL,
			payload: tarea,
		});
	};

	//Edita o modifica una tarea
	const actualizarTarea = (tarea) => {
		dispatch({
			type: ACTUALIZAR_TAREA,
			payload: tarea,
		});
	};

	//Elimina la tarea seleccionada
	const limpiarTarea = () => {
		dispatch({
			type: LIMPIAR_TAREA,
		});
	};

	return (
		<TareaContext.Provider
			value={{
				tareasProyecto: state.tareasProyecto,
				errorTarea: state.errorTarea,
				tareaSeleccionada: state.tareaSeleccionada,
				obtenerTareas,
				agregarTarea,
				validarTarea,
				eliminarTarea,
				cambiarEstadoTarea,
				guardarTareaActual,
				actualizarTarea,
				limpiarTarea,
			}}>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
