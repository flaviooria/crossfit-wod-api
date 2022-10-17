const express = require('express');
const router = express.Router();
const workoutServices = require('../../services/workoutServices');

router
    .get('/', (req , res) => {
        const workouts = workoutServices.getAllWorkouts();
    })
    .get('/:workoutId', (req , res) => {
        const { id } = req.params.workoutId;
        const workout = workoutServices.getWorkoutById(id);
    })
    .post('/', (req , res) => {
        const body = req.body
        const workout = workoutServices.createNewWorkout(body)
    })
    .patch('/:workoutId', (req , res) => {
        const { id } = req.params.workoutId
        const body = req.body;
        const workout = workoutServices.updateWorkout(id, body);
    })
    .delete('/:workoutId', (req , res) => {
        const { id } = req.params.workoutId
        const workout = workoutServices.deleteWorkout(id);
    });


module.exports = router;

