const workoutServices = require('../services/workoutServices')

const getAllWorkouts = (req, res) => {
    const workouts = workoutServices.getAllWorkouts();
    res.status(200).send({status: 'OK', data: workouts});
};
  
const getOneWorkout = (req, res) => {
  const { workoutId } = req.params
  const workout = workoutServices.getWorkoutById(workoutId);
  
  res.status(200).send({status: 'OK', data: workout});
};

const createNewWorkout = (req, res) => {
  const body = req.body

  // Validaciones de los datos que tiene el body
  if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
      res.status(400).send({status:'FAILED', message: 'Missing fields'});
  }

  const workout = workoutServices.createNewWorkout(body);

  res.status(201).send({status: 'OK', data: workout});
};

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params
  const body = req.body;

  const workout = workoutServices.updateWorkout(workoutId, body);

  res.status(201).send({status: 'OK', data: workout});
        
};

const deleteOneWorkout = (req, res) => {
  const { workoutId } = req.params
  const workout = workoutServices.deleteWorkout(workoutId);

  res.status(201).send({status: 'OK', data: workout});
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};