import React, { useContext, useState, useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
	// Extraer si un proyecto está activo
	const proyectosContext = useContext(proyectoContext);
	const { proyecto } = proyectosContext;

	//Obtener la funcion del context de tarea
	const tareasContext = useContext(tareaContext);
	const {
		tareaSeleccionada,
		errorTarea,
		agregarTarea,
		validarTarea,
		obtenerTareas,
		actualizarTarea,
		limpiarTarea
	} = tareasContext;

	//Detecta si hay una tarea seleccionada
	useEffect(() => {
		if (tareaSeleccionada !== null) {
			guardarTarea(tareaSeleccionada);
		} else {
			guardarTarea({
				nombre: "",
			});
		}
	}, [tareaSeleccionada]);

	//State del formulario
	const [tarea, guardarTarea] = useState({
		nombre: "",
	});

	//Extraemos nombre del proyecto
	const { nombre } = tarea;

	//Si no hay proyecto seleccionado
	if (!proyecto) return null;

	//Array destructuring para extraer el proyecto actual
	const [proyectoActual] = proyecto;

	//Leer los valores del formulario

	const handleChange = (e) => {
		guardarTarea({
			...tarea,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		//Validar
		if (nombre.trim() === "") {
			validarTarea();
			return;
		}

		//Revisar si es EDICION o si es NUEVA TAREA
		if (tareaSeleccionada === null) {
			//Agregar la nueva tarea al state de tareas
			tarea.proyectoId = proyectoActual.id;
			tarea.estado = false;
			agregarTarea(tarea);
		}
		else{
			//Actualiza tarea existente
			actualizarTarea(tarea);

			//Elimina tareaSeleccionada del state
			limpiarTarea()
		}

		//Obtener y filtrar tareas del proyecto actual
		obtenerTareas(proyectoActual.id);

		//Reiniciar
		guardarTarea({
			nombre: "",
		});
	};

	return (
		<div className="formulario">
			<form onSubmit={onSubmit}>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Tarea..."
						name="nombre"
						value={nombre}
						onChange={handleChange}
					/>
				</div>

				<div className="contenedor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value={
							tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"
						}
					/>
				</div>
			</form>

			{errorTarea && (
				<p className="mensaje error">
					El nombre de la tarea es obligatorio.
				</p>
			)}
		</div>
	);
};

export default FormTarea;
