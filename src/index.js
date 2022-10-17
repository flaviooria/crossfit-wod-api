const express = require('express');
const initRoutes = require('./v1/routes/index')

const PORT = process.env.PORT || 3005;

const app = express()

/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
}) */
initRoutes(app);


app.listen(PORT,() => {
    console.log(`Puerto escuchado en el ${PORT}`);
})