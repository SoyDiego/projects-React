const express = require('express');
const conectarDB = require('./config/db')

//Crear servidor
const app = express();

//Conectar a la BD

conectarDB()

//Habilitar express.json
app.use(express.json({extended: true}))

//Puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios.js'))
app.use('/api/auth', require('./routes/auth.js'))

//Defiir la página principal
app.get('/',(req, res) => {
    res.send('Hola Mundo')
})

//Arrancar la APP.
app.listen(PORT, () =>{
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
})