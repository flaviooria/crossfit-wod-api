const express = require('express');
const workouts = require('./workoutRoutes');
// Importar nuestra nueva ruta record
const records = require('./recordRoutes');


function initRoutes(app) {
    //Establecemos nuesta ruta maestra
    const routerController = express.Router()
    // Añado nuestras rutas a usar
    routerController.use('/workouts',workouts);
    routerController.use('/records',records);
    // Establesco la ruta
    app.use('/api/v1', routerController)
}

module.exports = initRoutes;