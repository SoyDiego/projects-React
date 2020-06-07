const express = require("express");
const conectarDB = require("./config/db");
const cors = require('cors')

//Crear servidor
const app = express();

//Conectar a la BD

conectarDB();

//Habilitar cors
app.use(cors())

//Habilitar express.json
app.use(express.json({ extended: true }));

//Puerto de la app
const port = process.env.PORT || 4000;

//Importar rutas
app.use("/api/usuarios", require("./routes/usuarios.js"));
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/proyectos", require("./routes/proyectos.js"));
app.use("/api/tareas", require("./routes/tareas.js"));

//Defiir la página principal
app.get("/", (req, res) => {
	res.send("Hola Mundo");
});

//Arrancar la APP.
app.listen(port,'0.0.0.0', () => {
	console.log(`El servidor está funcionando en el puerto ${port}`);
});
