const recordRepository = require('../repositories/recordRepository');

const getRecordByIdWorkout = (idWorkout) => {
    try {
        return recordRepository.getRecordByIdWorkout(idWorkout);
    } catch (error) {
        throw error;
    }
};

module.exports = { getRecordByIdWorkout };