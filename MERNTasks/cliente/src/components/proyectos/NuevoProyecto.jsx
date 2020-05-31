import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
	// Obtener el state del form
	const proyectosContext = useContext(proyectoContext);
	const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

	//State para proyecto
	const [proyecto, guardarProyecto] = useState({
		nombre: "",
	});

	//Extraer
	const { nombre } = proyecto;

	//Lee los contenidos del input
	const onChangeProyecto = (e) => {
		guardarProyecto({
			...proyecto,
			[e.target.name]: e.target.value,
		});
	};

	//Cuando el usuario envía el proyecto

	const onSubmitProyecto = (e) => {
		e.preventDefault();

		//Validar
		if (nombre === '') {
			mostrarError()
			return;
		}

		//Agregar al state
		agregarProyecto(proyecto)

		//Reiniciar form
		guardarProyecto({
			nombre: ''
		})
    };
    
    const onClickFormulario = () =>{
        mostrarFormulario();
    }

	return (
		<Fragment>
			<button type="button" className="btn btn-block btn-primario" onClick={onClickFormulario}>
				Nuevo Proyecto
			</button>

			{formulario && (
				<form
					onSubmit={onSubmitProyecto}
					className="formulario-nuevo-proyecto">
					<input
						type="text"
						className="input-text"
						placeholder="Nombre Proyecto"
						name="nombre"
						value={nombre}
						onChange={onChangeProyecto}
					/>

					<input
						type="submit"
						className="btn btn-primario btn-block"
						value="Agregar Proyecto"
					/>
				</form>
			)}

			{errorFormulario &&
				<p className="mensaje error">El nombre del Proyecto es obligatorio.</p>
			}
		</Fragment>
	);
};

export default NuevoProyecto;
