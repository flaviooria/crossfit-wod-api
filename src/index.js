const express = require('express');
const apicache = require('apicache');
const initRoutes = require('./v1/routes/index')


const PORT = process.env.PORT || 3005;

const app = express()

// Añadiendo cache 

const cache = apicache.middleware;

/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
}) */

//Añadiremos nuestro midleware de json body parser, que nos permite parsear los campo json
app.use(express.json())

// Estableciendo la cache para todas las rutas
app.use(cache('5 minutes'))

initRoutes(app);


app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
}) 