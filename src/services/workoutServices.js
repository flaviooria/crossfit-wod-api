//Nuestros servicios servirán como intermediario entre la base de datos y los controlodares que recibiran la petición del usuario.
const Workout = require('../repository/workoutRepository');
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

const createNewWorkout = (newWorkout) => {
    const id = crypto.randomUUID();

    // Creando nuestro objeto workout
    const workoutToInsert = {
        'id': id,
        ...newWorkout,
        createdAt: new Date().toLocaleString('en-US',{timeZone: 'UTC'}),
        updateAt: new Date().toLocaleString('en-US',{timeZone: 'UTC'})
    }

    // Creando persistenacia de datos con el nuevo workout
    if (Workout.saveWorkout(workoutToInsert)) {
        return workoutToInsert;
    }

    return null;

};

const updateWorkout = (id, changesWorkout) => {    
    // Actualizando con persistenacia de datos con el workout
    const updateWorkout = Workout.updateWorkout(id, changesWorkout);

    return updateWorkout ? updateWorkout : null;
};

const deleteWorkout = (id) => {
    // Eliminado workout 
    const idWorkout = Workout.deleteWorkout(id);
    return idWorkout;
};

module.exports = {
    getWorkoutById, getAllWorkouts, createNewWorkout, updateWorkout, deleteWorkout
};