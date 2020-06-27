import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import Layout from "../../components/layout/Layout";
import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/layout/404";

const Producto = () => {
	//State del componente
	const [producto, guardarProducto] = useState({});
	const [error, guardarError] = useState(false);

	//Routing para obtener el id actual
	const router = useRouter();
	const {
		query: { id },
	} = router;

	//Context de Firebase
	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		if (id) {
			(async () => {
				const productoQuery = await firebase.db
					.collection("productos")
					.doc(id);
				const producto = await productoQuery.get();
				if (producto.exists) {
					guardarProducto(producto.data());
				} else {
					guardarError(true);
				}
			})();
		}
	}, [id]);

	return (
		<Layout>
			<>{error && <Error404 />}</>
		</Layout>
	);
};

export default Producto;
