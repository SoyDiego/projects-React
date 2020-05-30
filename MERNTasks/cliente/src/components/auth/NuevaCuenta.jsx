import React, {useState} from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
	const [usuario, guardarUsuario] = useState({
        nombre:'',
		email: "",
        password: "",
        confirmar:''
	});

	const {nombre, email, password, confirmar} = usuario;

	const onChange = (e) => {
		guardarUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
        e.preventDefault();
        
        //Validar campos

        //Password minimo 6 caracteres

        //Revisar 2 passwords sean iguales

        //Action
	};

	return (
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Obtener una Cuenta</h1>

				<form onSubmit={onSubmit}>
					<div className="campo-form">
						<label htmlFor="nombre">Nombre:</label>
						<input
							type="text"
							id="nombre"
							name="nombre"
							placeholder="Tu Nombre"
							value={nombre}
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Tu Email"
							value={email}
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="email">Password:</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Tu Password"
							value={password}
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="confirmar">Confirmar Password:</label>
						<input
							type="password"
							id="confirmar"
							name="confirmar"
							placeholder="Repite tu Password"
							value={confirmar}
							onChange={onChange}
						/>
					</div>

					<div className="campo-form">
						<input
							type="submit"
							className="btn btn-primario btn-block"
							value="Registrarme"
						/>
					</div>
				</form>

				<Link to={"/"} className="enlace-cuenta">
					Volver a Iniciar Sesión
				</Link>
			</div>
		</div>
	);
};

export default NuevaCuenta;
