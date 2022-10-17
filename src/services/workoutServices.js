//Nuestros servicios servirán como intermediario entre la base de datos y los controlodares que recibiran la petición del usuario.
const Workout = require('../databases/Workout');
const crypto = require('crypto');
const allWorkouts = Workout.allWorkoutsFromDb();

const getAllWorkouts = () => {
    const workouts = allWorkouts;
    return workouts;
};

const getWorkoutById = (id) => {
    const workout = allWorkouts.find(element => element.id == id);
    return workout;
};

const createNewWorkout = (body) => {
    const id = crypto.randomUUID();

    // Validaciones de los datos que tiene el body
    if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
        return;
    }
    // Creando nuestro objeto workout
    const newWorkout = {
        'id': id,
        ...body,
        createdAt: new Date().toLocaleString('en-US',{timeZone: 'UTC'}),
        updateAt: new Date().toLocaleString('en-US',{timeZone: 'UTC'})
    }

    // Creando persistenacia de datos con el nuevo workout
    if (Workout.saveWorkout(newWorkout)) {
        return newWorkout;
    }

    return null;

};

const updateWorkout = () => {
    return;
};

const deleteWorkout = () => {
    return;
};

module.exports = {
    getWorkoutById, getAllWorkouts, createNewWorkout, updateWorkout, deleteWorkout
};