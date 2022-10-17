//Cargo mi base de datos
const DB = require('../databases/db.json');
const { saveDataToDatabase } = require('../utils/utils');

const allWorkoutsFromDb = () => DB.workouts;

// Función para escribir mi workout a la base de datos
const saveWorkout = (newWorkout) => {
    const isAlreadyExist = DB.workouts.find(workout => workout.id == newWorkout.id);

    if (isAlreadyExist) {
        throw {
            status: 400,
            message: `Workout with the id ${newWorkout.id} already exists`
        }
    }

    try {
        DB.workouts.push(newWorkout);
        saveDataToDatabase(DB);
        return true;        
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const updateWorkout = (id, changes) => {
    const posWorkout = DB.workouts.findIndex(workout => workout.id == id);

    // Buscamos que exista nuestra workout en la bd
    if (posWorkout === -1) {
        throw {
            status: 404,
            message: `Workout not exists in database`
        }
    }

    // Con el spred operator vamos a reemplazar los nuevos valores que nos ingresen y modificamos el update.
    const workout = { ...DB.workouts[posWorkout], ...changes, ...{updadeAt: new Date().toLocaleString('en-US', {timeZone: 'UTC'})}};

    
    try {
        // Sobreescribimos el workour actualizado y salvamos los datos
        DB.workouts[posWorkout] = workout
        saveDataToDatabase(DB);
        return workout;
        
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const deleteWorkout = (id) => {
    const posWorkout = DB.workouts.findIndex(workout => workout.id == id);

    // Buscamos que exista nuestra workout en la bd
    if (posWorkout === -1) {
        throw {
            status: 404,
            message: `Workout not exists in database`
        }
    }

    try {
        const workoutDeleted = DB.workouts[posWorkout];
        // Eliminamos la workout seleccionada de nuestra base de datos.
        DB.workouts.splice(posWorkout,1);
        saveDataToDatabase(DB)
    
        return workoutDeleted;
    
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

module.exports = { allWorkoutsFromDb, saveWorkout, updateWorkout, deleteWorkout };