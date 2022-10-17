const express = require('express');
const router = express.Router();
const workoutServices = require('../../services/workoutServices');

router
    .get('/', (req , res) => {
        const workouts = workoutServices.getAllWorkouts();
        res.send(workouts).status(200);
    })
    .get('/:workoutId', (req , res) => {
        const { workoutId } = req.params
        const workout = workoutServices.getWorkoutById(workoutId);
        
        if (workout) {
            res.send(workout).status(200);
        } else {
            res.status(404).send({'msg: ': 'Workoout not found'})
        }

    })
    .post('/', (req , res) => {
        const body = req.body
        const workout = workoutServices.createNewWorkout(body)

        if (workout) {
            res.send(workout).status(201);
        } else {
            res.status(400).send({'msg: ': 'Workoout not created'})
        }
    })
    .patch('/:workoutId', (req , res) => {
        const { workoutId } = req.params
        const body = req.body;
        const workout = workoutServices.updateWorkout(id, body);
    })
    .delete('/:workoutId', (req , res) => {
        const { workoutId } = req.params
        const workout = workoutServices.deleteWorkout(id);
    });


module.exports = router;
