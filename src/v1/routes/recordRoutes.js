const express = require('express');
const router = express.Router();
const recordController = require('../../controllers/recordController');

router
    .get('/', recordController.getAllRecords)
    .get('/:recordId', recordController.getOnerRecord)
    .post('/', recordController.createRecord)
    .patch('/:recordId', recordController.updateRercord)
    .delete('/:recordId', recordController.deleteRecord)


module.exports = router;