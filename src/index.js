const express = require('express');
const initRoutes = require('./v1/routes/index')

const PORT = process.env.PORT || 3005;

const app = express()

/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
}) */

//Añadiremos nuestro midleware de json body parser, que nos permite parsear los campo json
app.use(express.json())

initRoutes(app);


app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
}) 