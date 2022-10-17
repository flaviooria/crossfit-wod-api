const DB = require('./db.json');

const allWorkoutsFromDb = () => DB.workouts;

module.exports = allWorkoutsFromDb;