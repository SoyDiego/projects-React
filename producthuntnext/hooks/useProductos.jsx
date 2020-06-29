import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

const useProductos = (orden) => {
	const [productos, guardarProductos] = useState([]);
	const { firebase } = useContext(FirebaseContext);

	//Consulta a la BD de Firebase
	useEffect(() => {
		(() => {
			firebase.db
				.collection("productos")
				.orderBy(orden, "desc")
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

	return {
		productos,
	};
};

export default useProductos;
