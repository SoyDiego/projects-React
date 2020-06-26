import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import DetallesProducto from "../components/layout/DetallesProducto";
import { FirebaseContext } from "../firebase";

const Home = () => {
	const [productos, guardarProductos] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	//Consulta a la BD de Firebase
	useEffect(() => {
		(() => {
			firebase.db
				.collection("productos")
				.orderBy("creado", "desc")
				.onSnapshot(manejarSnapshot);
		})();
	}, []);

	function manejarSnapshot(snapshot) {
		const productos = snapshot.docs.map((doc) => {
			return {
				id: doc.id,
				...doc.data(),
			};
		});

		//Guardando la info de la BD en el State
		guardarProductos(productos);
	}

	return (
		<div>
			<Layout>
				<div className="listado-productos">
					<div className="contenedor">
						<ul className="bg-white">
							{productos.map((producto) => (
								<DetallesProducto
									key={producto.id}
									producto={producto}
								/>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Home;
