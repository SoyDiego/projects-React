import React from 'react';
import Login from './components/auth/Login'
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from './components/proyectos/Proyectos'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/nueva-cuenta" component={NuevaCuenta} />
				<Route exact path="/proyectos" component={Proyectos} />
			</Switch>
		</Router>
	);
}

export default App;
