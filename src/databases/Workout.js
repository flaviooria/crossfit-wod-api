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

module.exports = { allWorkoutsFromDb, saveWorkout };