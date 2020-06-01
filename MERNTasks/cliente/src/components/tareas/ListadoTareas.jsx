import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";

import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
	// Extraer proyectos de state inicial
	const proyectosContext = useContext(proyectoContext);
	const { proyecto, eliminarProyecto } = proyectosContext;

	//Obtener las tareas del proyecto
	const tareasContext = useContext(tareaContext);
	const { tareasProyecto } = tareasContext;

	//Si no hay proyecto seleccionado
	if (!proyecto) return <h2>Selecciona un proyecto</h2>;

	//Array destructuring para extraer el proyecto actual
	const [proyectoActual] = proyecto;

	//Elimina un proyecto
	const onClickEliminar = () => {
		eliminarProyecto(proyectoActual.id);
	};

	return (
		<Fragment>
			<h2>Proyecto: {proyectoActual.nombre}</h2>

			<ul className="listado-tareas">
				{tareasProyecto.length === 0 ? (
					<li className="tarea">
						<p>No Hay tareas</p>
					</li>
				) : (
					tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
				)}
			</ul>

			<button
				type="button"
				className="btn btn-eliminar"
				onClick={onClickEliminar}>
				Eliminar Proyecto &times;
			</button>
		</Fragment>
	);
};

export default ListadoTareas;
