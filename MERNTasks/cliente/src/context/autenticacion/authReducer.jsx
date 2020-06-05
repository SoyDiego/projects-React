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
			localStorage.setItem("token", action.payload.token);

			return {
				...state,
				autenticado: true,
				mensaje: null,
			};
        case LOGIN_ERROR:
		case REGISTRO_ERROR:
            localStorage.removeItem('token')
			return {
				...state,
				token: null,
				mensaje: action.payload,
			};

		case OBTENER_USUARIO:
			return {
                ...state,
                usuario: action.payload
            };

		case LOGIN_EXITOSO:
			return {};
		case CERRAR_SESION:
			return {};
		default:
			return state;
	}
};
