const express = require('express');

const PORT = process.env.PORT || 3005;

const app = express()

app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.listen(PORT,() => {
    console.log(`Puerto escuchado en el ${PORT}`);
})