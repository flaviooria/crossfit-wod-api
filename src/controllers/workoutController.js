const workoutServices = require('../services/workoutServices')

const getAllWorkouts = (_, res) => {

    const workouts = workoutServices.getAllWorkouts();

    try {
      res.status(200).send({status: 'OK', data: workouts});
    } catch (error) {
      res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
}; 
  
const getOneWorkout = (req, res) => {
  
  const { workoutId } = req.params

  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }

  const workout = workoutServices.getWorkoutById(workoutId);

  try {
    res.status(200).send({status: 'OK', data: workout});
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });  
  }
  
};

const createNewWorkout = (req, res) => {
  const body = req.body

  // Validaciones de los datos que tiene el body
  if (!body.name || !body.mode || !body.equipment || !body.exercises || !body.trainerTips) {
      res.status(400).send({status:'FAILED', message: 'Missing fields,One of the following keys is missing or is empty in request body: "name", "mode", "equipment", "exercises", "trainerTips"'});
  }

  const workout = workoutServices.createNewWorkout(body);

  try {
    res.status(201).send({status: 'OK', data: workout});
  } catch (error) { 
    res.status(error?.status || 500).send({'status': 'FAILED', data: {error: error?.message || error}});
  }

};

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params
  const body = req.body;

  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }

  const workout = workoutServices.updateWorkout(workoutId, body);

  try {
    res.status(201).send({status: 'OK', data: workout});
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }

        
};

const deleteOneWorkout = (req, res) => {
  const { workoutId } = req.params

  if (!workoutId) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
  }

  const workout = workoutServices.deleteWorkout(workoutId);

  try {
    res.status(201).send({status: 'OK', data: workout});
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }

};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};