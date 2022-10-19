//Nuestros servicios servirán como intermediario entre la base de datos y los controlodares que recibiran la petición del usuario.
const Workout = require('../repositories/workoutRepository');
const crypto = require('crypto');

const getAllWorkouts = (filterParams) => {
    try {
        const workouts = Workout.getWorkouts(filterParams);
        return workouts;
    } catch (error) {
        throw error;
    }
};

const getWorkoutById = (id) => {
    try {
        const workout = Workout.getWorkoutById(id);
        return workout;
    } catch (error) {
        throw error;
    }
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

    try {
        // Creando persistenacia de datos con el nuevo workout
        if (Workout.saveWorkout(workoutToInsert)) {
            return workoutToInsert;
        }
    } catch (error) {
        throw error;
    }
};

const updateWorkout = (id, changesWorkout) => {    
    try {
        // Actualizando con persistenacia de datos con el workout
        const updateWorkout = Workout.updateWorkout(id, changesWorkout);
    
        return updateWorkout ? updateWorkout : null;
    } catch (error) {
        throw error;
    }
};

const deleteWorkout = (id) => {
    try {
        // Eliminado workout 
        const idWorkout = Workout.deleteWorkout(id);
        return idWorkout;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllWorkouts, getWorkoutById, createNewWorkout, updateWorkout, deleteWorkout
};