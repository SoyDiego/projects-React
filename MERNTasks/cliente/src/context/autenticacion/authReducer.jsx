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
        case LOGIN_EXITOSO:
			localStorage.setItem("token", action.payload.token);

			return {
				...state,
				autenticado: true,
				mensaje: null,
				cargando: false
			};
        case LOGIN_ERROR:
		case REGISTRO_ERROR:
		case CERRAR_SESION:
            localStorage.removeItem('token')
			return {
				...state,
				token: null,
				usuario: null,
				autenticado: null,
				mensaje: action.payload,
				cargando: false
			};

		case OBTENER_USUARIO:
			return {
				...state,
				autenticado: true,
				usuario: action.payload,
				cargando: false
            };
		default:
			return state;
	}
};
