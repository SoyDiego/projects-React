import axios from 'axios'

const clienteAxios = axios.create({
	baseURL: "https://crud-reactjs-redux.herokuapp.com/",
});

export default clienteAxios;