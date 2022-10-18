const DB = require('../databases/db.json');
const { saveDataToDatabase } = require('../utils/utils');

const allRecords = () => {
    return DB.records;
}

const getRecordById = (id) => {
    return DB.records.find(record => record.id === id);
}

const saveRecord = (record) => {
    return;
}

const updateRecord = (id, changes) => {
    return;
}

const deleteRecord = (id) => {
    return;
}

module.exports = { allRecords, getRecordById, saveRecord, updateRecord, deleteRecord };

