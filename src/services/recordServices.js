const recordRepository = require('../repository/recordRepository');

const getRecordByIdWorkout = (idWorkout) => {
    try {
        return recordRepository.getRecordByIdWorkout(idWorkout);
    } catch (error) {
        throw error;
    }
};

module.exports = { getRecordByIdWorkout };