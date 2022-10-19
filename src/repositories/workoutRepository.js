//Cargo mi base de datos
const DB = require('../databases/db.json');
const { saveDataToDatabase } = require('../utils/utils');


const getWorkouts = (filterParams) => {
    try {

        let workouts = DB.workouts;

        if (filterParams) {

            const { mode, equipment, length } = filterParams;
            if (mode) {
                workouts = DB.workouts.filter(workout => workout.mode.toLocaleLowerCase().includes(mode));

            }

            if (equipment) {
                workouts = DB.workouts.map((workout) => {
                    const workoutsFiltered = [];
                    if (workout.equipment.includes(equipment)) {
                        workoutsFiltered.push(workout);
                    }
                    return workoutsFiltered;
                }).filter(workout => workout.length > 0)

            }

            if (length) {
                let offset = Number(length)

                workouts = DB.workouts.slice(0, offset);
            }

        }

        return workouts;

    } catch (error) {
        throw {
            status: 500,
            message: `Intenal Server Error`
        }
    }
};

const getWorkoutById = (id) => {
    try {
        return DB.workouts.find(workout => workout.id === id);
    } catch (error) {
        throw {
            status: 404,
            message: `Workout with the id ${newWorkout.id} not exists in bd`
        }
    }
}

// Función para escribir una nueva workout a la base de datos
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
            message: `Workout with id: ${id} not exists in database`
        }
    }

    // Con el spred operator vamos a reemplazar los nuevos valores que nos ingresen y modificamos el update.
    const workoutUpdated = { ...DB.workouts[posWorkout], ...changes, ...{ updadeAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }) } };


    try {
        // Sobreescribimos el workout actualizado y salvamos los datos
        DB.workouts[posWorkout] = workoutUpdated
        saveDataToDatabase(DB);
        return workoutUpdated;

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
            message: `Workout with id: ${id} not exists in database`
        }
    }

    try {
        const workoutDeleted = DB.workouts[posWorkout];
        // Eliminamos la workout seleccionada de nuestra base de datos.
        DB.workouts.splice(posWorkout, 1);
        saveDataToDatabase(DB)

        return workoutDeleted;

    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

module.exports = { getWorkouts, getWorkoutById, saveWorkout, updateWorkout, deleteWorkout };