import React, {useEffect, useContext} from "react";
import AuthContext from "../../context/autenticacion/authContext";

const Barra = () => {
	//Extraer la info de autenticación
	const authContext = useContext(AuthContext);
	const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

	useEffect(() => {
		usuarioAutenticado();
    }, []);
    
	return (
		<header className="app-header">
            {usuario &&
			<p className="nombre-usuario">
				Hola <span>{usuario.nombre}</span>
			</p>}

			<nav className="nav-principal">
                <button 
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => cerrarSesion()}
                >Cerrar Sesión
                     
                </button>
			</nav>
		</header>
	);
};

export default Barra;
