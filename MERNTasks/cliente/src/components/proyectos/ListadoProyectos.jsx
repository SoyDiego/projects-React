import React, {useContext, useEffect} from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
    //Extraer proyectos State inicial
	const proyectosContext = useContext(proyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;
    
    useEffect(() => {
		obtenerProyectos()
	}, [])
	 
    //Revisa si proyectos tiene contenidos
    if (proyectos.lenght === 0) return null


	return (
		<ul className="listado-proyectos">
			{proyectos.map((proyecto) => (
				<Proyecto key={proyecto.id} proyecto={proyecto} />
			))}
		</ul>
	); 
};

export default ListadoProyectos;
