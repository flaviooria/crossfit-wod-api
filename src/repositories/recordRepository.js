const DB = require('../databases/db.json');
const { saveDataToDatabase } = require('../utils/utils');

const allRecords = () => {
    try {
        return DB.records;
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const getRecordById = (id) => {
    if (!id) {
        throw {
            status: 400,
            message: `Parameter id not founded`
        }
    }

    try {
        return DB.records.find(record => record.id === id);
    } catch (error) {
        throw {
            status: 404,
            message: `Record not founded in database`
        }
    }
}

const getRecordByIdWorkout = (idWorkout) => {

    if (!idWorkout) {
        throw {
            status: 400,
            message: `Parameter id not founded`
        }
    }

    try {
        const recordFounded = DB.records.filter(record => record.workout === idWorkout);
        return recordFounded;
    } catch (error) {
        throw {
            status: 404,
            message: error?.message || error
        }
    }

}

module.exports = { allRecords, getRecordById, getRecordByIdWorkout };

