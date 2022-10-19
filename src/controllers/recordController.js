const recordServices = require('../services/recordServices');

const getRecordByIdWorkout = (req, res) => {
    const { workoutId } = req.params

    if (!workoutId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':workoutId' can not be empty" },
            });
    }


    const records = recordServices.getRecordByIdWorkout(workoutId);

    try {
        res.status(200).send({ status: 'OK', data: records });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};


module.exports = { getRecordByIdWorkout };