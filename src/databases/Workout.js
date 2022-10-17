//Cargo mi base de datos
const DB = require('./db.json');
const { saveDataToDatabase } = require('../utils/utils');

const allWorkoutsFromDb = () => DB.workouts;

// Función para escribir mi workout a la base de datos
const saveWorkout = (newWorkout) => {
    const isAlreadyExist = DB.workouts.find(workout => workout.id == newWorkout.id);

    if (isAlreadyExist) {
        return;
    }

    DB.workouts.push(newWorkout);
    saveDataToDatabase(DB);
    return true;
}

const updateWorkout = (id, changes) => {
    const posWorkout = DB.workouts.findIndex(workout => workout.id == id);

    // Buscamos que exista nuestra workout en la bd
    if (posWorkout === -1) {
        return;
    }

    // Con el spred operator vamos a reemplazar los nuevos valores que nos ingresen y modificamos el update.
    const workout = { ...DB.workouts[posWorkout], ...changes, ...{updadeAt: new Date().toLocaleString('en-US', {timeZone: 'UTC'})}};

    // Sobreescribimos el workour actualizado y salvamos los datos
    DB.workouts[posWorkout] = workout
    saveDataToDatabase(DB);
    return workout;
}

const deleteWorkout = (id) => {
    const posWorkout = DB.workouts.findIndex(workout => workout.id == id);

    // Buscamos que exista nuestra workout en la bd
    if (posWorkout === -1) {
        return;
    }

    const workoutDeleted = DB.workouts[posWorkout];
    // Eliminamos la workout seleccionada de nuestra base de datos.
    DB.workouts.splice(posWorkout,1);
    saveDataToDatabase(DB)

    return workoutDeleted;
}

module.exports = { allWorkoutsFromDb, saveWorkout, updateWorkout, deleteWorkout };