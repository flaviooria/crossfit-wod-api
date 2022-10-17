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
            res.status(404).send({'msg: ': 'Workout not found'})
        }

    })
    .post('/', (req , res) => {
        const body = req.body

        // Validaciones de los datos que tiene el body
        if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
            res.status(400).send({status:'FAILED', message: 'Missing fields'});
        }

        const workout = workoutServices.createNewWorkout(body)

        if (workout) {
            res.status(201).send({status: 'OK', data: workout});
        } else {
            res.status(400).send({status:'FAILED', message: 'Workout not created'});
        }
    })
    .patch('/:workoutId', (req , res) => {
        const { workoutId } = req.params
        const body = req.body;
        const workout = workoutServices.updateWorkout(workoutId, body);


        if (workout) {
            res.status(201).send({status: 'OK', data: workout});
        } else {
            res.status(400).send({status:'FAILED', message: 'Workout not updated'})
        }
    })
    .delete('/:workoutId', (req , res) => {
        const { workoutId } = req.params
        const workout = workoutServices.deleteWorkout(workoutId);

        if (workout) {
            res.status(201).send({status: 'OK', data: workout});
        } else {
            res.status(400).send({status:'FAILED', message: 'Workout not deleted'})
        }

    });


module.exports = router;

