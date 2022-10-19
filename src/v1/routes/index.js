const express = require('express');
const workouts = require('./workoutRoutes');


function initRoutes(app) {
    //Establecemos nuesta ruta maestra
    const routerController = express.Router()
    // Añado nuestras rutas a usar
    routerController.use('/workouts',workouts);
    // Establesco la ruta
    app.use('/api/v1', routerController)
}

module.exports = initRoutes;