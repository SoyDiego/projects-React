import React, { useState, useEffect } from "react";
import { editarProductoAction } from "../actions/productosActions";
import { useHistory } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";

const EditarProducto = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	//Nuevo state de producto.
	const [producto, guardarProducto] = useState({
		nombre: "",
		precio: "",
	});

	const submitEditarProducto = (e) => {
		e.preventDefault();

		dispatch(editarProductoAction(producto));
		history.push('/')
	};

	//Producto a editar
	const productoEditar = useSelector(
		(state) => state.productos.productoEditar
	);

	useEffect(() => {
		guardarProducto(productoEditar);
	}, [productoEditar]);

	// Leer los datos del formulario.
	const onChangeFormulario = (e) => {
		guardarProducto({
			...producto,
			[e.target.name]: e.target.value,
		});
	};

	const { nombre, precio } = producto;

	return (
		<div className="row justify-content-center mt-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Editar Producto
						</h2>

						<form onSubmit={submitEditarProducto}>
							<div className="form-group">
								<label>Nombre Producto</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre Producto"
									name="nombre"
									value={nombre}
									onChange={onChangeFormulario}
								/>
							</div>

							<div className="form-group">
								<label>Precio Producto</label>
								<input
									type="number"
									className="form-control"
									placeholder="Precio Producto"
									name="precio"
									value={precio}
									onChange={onChangeFormulario}
								/>
							</div>

							<button
								type="submit"
								className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
								Guardar Cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditarProducto;
