const express = require('express');
const conectarDB = require('./config/db')

//Crear servidor
const app = express();

//Conectar a la BD

conectarDB()

//Puerto de la app
const PORT = process.env.PORT || 4000;

//Defiir la página principal
app.get('/',(req, res) => {
    res.send('Hola Mundo')
})

//Arrancar la APP.
app.listen(PORT, () =>{
    console.log(`El servidor está funcionando en el puerto ${PORT}`)
})