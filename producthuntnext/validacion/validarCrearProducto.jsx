export default function validarCrearProducto(valores) {
	let errores = {};

	//Validar nombre de usuario.

	if (!valores.nombre) {
		errores.nombre = "El Nombre es obligatorio.";
	}

	//Validar empresa
	if (!valores.empresa) {
		errores.empresa = "El Nombre de Empresa es obligatorio.";
	}

	//Validar URL
	if (!valores.url) {
		errores.url = "La URL del Producto es obligatoria.";
	} else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
		errores.url = "URL mal formateada o no válida.";
	}

	// Validar descripcion
	if (!valores.descripcion) {
		errores.descripcion = "Agrega una descripción de tu Producto.";
	}

	return errores;
}
