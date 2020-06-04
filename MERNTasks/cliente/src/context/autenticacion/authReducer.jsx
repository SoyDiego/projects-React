import {
	REGISTRO_EXISTOSO,
	REGISTRO_ERROR,
	OBTENER_USUARIO,
	LOGIN_EXITOSO,
	LOGIN_ERROR,
	CERRAR_SESION,
} from "../../types/index";

export default (state, action) => {
	switch (action.type) {
		case REGISTRO_EXISTOSO:
			return {};

		case REGISTRO_ERROR:
			return {};

		case OBTENER_USUARIO:
			return {};

		case LOGIN_EXITOSO:
			return {};

		case LOGIN_ERROR:
			return {};
		case CERRAR_SESION:
			return {};
		default:
			return state;
	}
};
